const dotenv = require("dotenv");
dotenv.config();
const { Octokit } = require("octokit");
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
  userAgent: "triage-tool/v1.0.0",
});

function getLastWeeksDate() {
  const now = new Date();

  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
}

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
      `GET /repos/{owner}/{repo}/issues?state=open&sort=updated-desc&since=${getLastWeeksDate().toISOString()}`,
      {
        owner: "hirosystems",
        repo: repo,
      }
    );
    // console.log(response.data[0]);
    for (const issue of response.data) {
      console.log(`${issue.number}:\t${issue.title}`);
      console.log(`\t  ${issue.html_url}`);
      console.log(`\t  Creator: ${issue.user.login}`);
      if (issue.assignee) {
        console.log(`\t  Assigned: ${issue.assignee.login}`);
      }
    }
  }
}

main();
