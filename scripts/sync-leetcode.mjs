import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env if it exists (Node 20.12.0+ / 21.7.0+)
if (fs.existsSync('.env') && typeof process.loadEnvFile === 'function') {
  process.loadEnvFile();
}

const LEETCODE_SESSION = process.env.LEETCODE_SESSION;
const LEETCODE_CSRF_TOKEN = process.env.LEETCODE_CSRF_TOKEN;
const COOKIES = `LEETCODE_SESSION=${LEETCODE_SESSION}; csrftoken=${LEETCODE_CSRF_TOKEN}`;

const PROBLEMS_DIR = path.join(__dirname, '../src/problems');

if (!fs.existsSync(PROBLEMS_DIR)) {
  fs.mkdirSync(PROBLEMS_DIR, { recursive: true });
}

async function graphql(query, variables = {}) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ query, variables });
    const options = {
      hostname: 'leetcode.com',
      path: '/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': COOKIES,
        'x-csrftoken': LEETCODE_CSRF_TOKEN,
        'Referer': 'https://leetcode.com',
        'User-Agent': 'Mozilla/5.0'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          reject(new Error(`Failed to parse response: ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

const GET_AC_QUESTION_LIST = `
query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
  problemsetQuestionList: questionList(
    categorySlug: $categorySlug
    limit: $limit
    skip: $skip
    filters: $filters
  ) {
    total: totalNum
    questions: data {
      title
      titleSlug
    }
  }
}
`;

const GET_SUBMISSION_LIST = `
query submissionList($offset: Int!, $limit: Int!, $lastKey: String, $questionSlug: String) {
  submissionList(offset: $offset, limit: $limit, lastKey: $lastKey, questionSlug: $questionSlug) {
    submissions {
      id
      statusDisplay
      lang
      title
      titleSlug
    }
  }
}
`;

const GET_SUBMISSION_DETAILS = `
query submissionDetails($submissionId: Int!) {
  submissionDetails(submissionId: $submissionId) {
    code
    lang {
      name
      verboseName
    }
    question {
      title
      titleSlug
      content
      topicTags {
        name
      }
    }
  }
}
`;

const LANG_MAP = {
  'javascript': 'js',
  'python': 'python',
  'python3': 'python',
  'mysql': 'sql',
  'golang': 'go',
  'cpp': 'cpp',
  'java': 'java',
  'c': 'c',
  'csharp': 'csharp',
  'ruby': 'ruby',
  'swift': 'swift',
  'scala': 'scala',
  'kotlin': 'kotlin',
  'rust': 'rust',
  'php': 'php',
  'typescript': 'ts'
};

function generateNunjucks(problem, submission) {
  const frontMatter = {
    id: problem.titleSlug,
    title: problem.title,
    lang: submission.lang.name
  };

  const langName = submission.lang.name;
  const fenceLang = LANG_MAP[langName] || langName;

  return `---
${Object.entries(frontMatter).map(([k, v]) => `${k}: "${v.replace(/"/g, '\\"')}"`).join('\n')}
---

# ${problem.title}

<h2 id="problem-description">Problem Description</h2>

${problem.content}

<h2 id="solution">Solution (${submission.lang.verboseName || submission.lang.name})</h2>

\`\`\`${fenceLang}
${submission.code}
\`\`\`
`;
}

async function main() {
  // Remote sync if enabled
  if (LEETCODE_SESSION && LEETCODE_CSRF_TOKEN) {
    console.log('Syncing from LeetCode...');
    let skip = 0;
    const limit = 100;
    let hasMore = true;

    while (hasMore) {
      console.log(`- Discovering solved problems (skip: ${skip}, limit: ${limit})...`);
      const listResp = await graphql(GET_AC_QUESTION_LIST, {
        categorySlug: "",
        skip,
        limit,
        filters: { status: "AC" }
      });

      const questions = listResp.data?.problemsetQuestionList?.questions || [];
      if (questions.length === 0) {
        hasMore = false;
        break;
      }

      for (const q of questions) {
        const filePath = path.join(PROBLEMS_DIR, `${q.titleSlug}.md`);
        if (fs.existsSync(filePath)) continue;

        console.log(`  - Found new solved problem: ${q.titleSlug}. Fetching latest submission...`);

        // Fetch the latest accepted submission for this specific question
        const subResp = await graphql(GET_SUBMISSION_LIST, {
          offset: 0,
          limit: 1,
          questionSlug: q.titleSlug
        });

        const submissions = subResp.data?.submissionList?.submissions || [];
        const latestAccepted = submissions.find(s => s.statusDisplay === 'Accepted');

        if (latestAccepted) {
          console.log(`    - Fetching details for submission ${latestAccepted.id}...`);
          const detailsResp = await graphql(GET_SUBMISSION_DETAILS, { submissionId: parseInt(latestAccepted.id) });
          const details = detailsResp.data?.submissionDetails;
          if (details) {
            fs.writeFileSync(filePath, generateNunjucks(details.question, details));
          }
        } else {
          console.log(`    - Warning: No accepted submission found for ${q.titleSlug} despite AC status.`);
        }
      }

      skip += limit;
    }
  }

  console.log('Sync complete.');
}

main().catch(console.error);
