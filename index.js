const dotenv = require("dotenv");
dotenv.config();
const { Octokit } = require("octokit");
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
  userAgent: "triage-tool/v1.0.0",
});

async function main() {
  for (const repo of [
    "clarinet",
    "clarity-repl",
    "clarity-lsp",
    "orchestra",
    // "clarinet-vscode",
  ]) {
    console.log("\n", repo);
    console.log(
      "--------------------------------------------------------------------------------"
    );
    let response = await octokit.request(
      "GET /repos/{owner}/{repo}/issues?state=open&sort=updated-desc&since=2022-06-06T00:00:00Z",
      {
        owner: "hirosystems",
        repo: repo,
      }
    );
    // console.log(response.data[0]);
    for (const issue of response.data) {
      console.log(`${issue.number}:\t${issue.title}\n\t${issue.html_url}\n`);
    }
  }
}

main();
