import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LEETCODE_SESSION = process.env.LEETCODE_SESSION;
const LEETCODE_CSRF_TOKEN = process.env.LEETCODE_CSRF_TOKEN;
const COOKIES = `LEETCODE_SESSION=${LEETCODE_SESSION}; csrftoken=${LEETCODE_CSRF_TOKEN}`;

const PROBLEMS_DIR = path.join(__dirname, '../src/problems');
const OLD_PROBLEMS_JSON = path.join(__dirname, '../problems.json');

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
      difficulty
      topicTags {
        name
      }
    }
  }
}
`;

function generateNunjucks(problem, submission) {
  const frontMatter = {
    title: problem.title
  };

  return `---
${Object.entries(frontMatter).map(([k, v]) => `${k}: "${v.replace(/"/g, '\\"')}"`).join('\n')}
---

# ${problem.title}

<h2 id="problem-description">Problem Description</h2>

${problem.content}

<h2 id="solution">Solution (${submission.lang.verboseName || submission.lang.name})</h2>

\`\`\`${submission.lang.name === 'javascript' ? 'js' : (submission.lang.name === 'python' || submission.lang.name === 'python3' ? 'python' : submission.lang.name)}
${submission.code}
\`\`\`
`;
}

async function main() {
  // Migrate old first
  if (fs.existsSync(OLD_PROBLEMS_JSON)) {
    console.log('Migrating from old problems.json...');
    const problems = JSON.parse(fs.readFileSync(OLD_PROBLEMS_JSON, 'utf-8'));
    for (const p of problems) {
      const filePath = path.join(PROBLEMS_DIR, `${p.titleSlug}.md`);
      if (fs.existsSync(filePath)) continue;

      const content = generateNunjucks(
        { title: p.title, titleSlug: p.titleSlug, content: p.content, difficulty: '', topicTags: [] },
        { code: p.code, lang: { name: p.lang === 'ac' ? 'js' : (p.lang || 'js') } }
      );
      fs.writeFileSync(filePath, content);
    }
  }

  // Remote sync if enabled
  if (LEETCODE_SESSION && LEETCODE_CSRF_TOKEN) {
    console.log('Syncing from LeetCode...');
    const response = await graphql(GET_SUBMISSION_LIST, { offset: 0, limit: 20 });
    const submissions = response.data?.submissionList?.submissions || [];
    for (const sub of submissions.filter(s => s.statusDisplay === 'Accepted')) {
      const filePath = path.join(PROBLEMS_DIR, `${sub.titleSlug}.md`);
      if (fs.existsSync(filePath)) continue;

      console.log(`- Fetching ${sub.titleSlug}...`);
      const detailsResp = await graphql(GET_SUBMISSION_DETAILS, { submissionId: parseInt(sub.id) });
      const details = detailsResp.data?.submissionDetails;
      if (details) {
        fs.writeFileSync(filePath, generateNunjucks(details.question, details));
      }
    }
  }

  console.log('Sync complete.');
}

main().catch(console.error);
