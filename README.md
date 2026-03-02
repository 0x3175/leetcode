# LeetCode Solutions

A modern, high-performance static website displaying LeetCode solutions, built with [11ty](https://www.11ty.dev/).

## Features

- **Automated Sync**: Fetches newest accepted submissions from LeetCode via GraphQL.
- **Classic Design**: Replicates the clean Docusaurus v1 aesthetic with a green primary theme.
- **Fast Search & Navigation**: Lightweight static pages for optimal performance.
- **CI/CD**: Automatically syncs and deploys to GitHub Pages via GitHub Actions.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

1.  **Clone the repository**:
    ```bash
    git clone ...
    cd leetcode
    ```

2.  **Install dependencies**:
    ```bash
    cd website
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm start
    ```
    The site will be available at `http://localhost:8080`.

### Manual Sync

To manually trigger a sync of your latest LeetCode solutions:
```bash
# Requires LEETCODE_SESSION and LEETCODE_CSRF_TOKEN env variables
node website/scripts/sync-leetcode.mjs
```

## Automation Setup

To enable the daily automated sync, add the following as GitHub Secrets:
- `LEETCODE_SESSION`
- `LEETCODE_CSRF_TOKEN`

## License

ISC
