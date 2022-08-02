import { config } from "dotenv";
config();
import { Octokit } from "octokit";
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
  userAgent: "triage-tool/v1.0.0",
});

function getDateNDaysAgo(n) {
  const now = new Date();

  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - n);
}

async function main() {
  for (const repo of [
    "clarinet",
    "clarity-lsp",
    "orchestra",
    // "clarinet-vscode",
  ]) {
    let days = 7;
    if (process.argv.length === 3) {
      days = parseInt(process.argv[2]);
      if (isNaN(days)) {
        console.error(
          "Invalid argument. Only argument should be a number of days."
        );
        process.exit(1);
      }
    }

    console.log("\n", repo);
    console.log(
      "--------------------------------------------------------------------------------"
    );
    const response = await octokit.request(
      `GET /repos/{owner}/{repo}/issues?state=open&sort=updated-desc&since=${getDateNDaysAgo(
        days
      ).toISOString()}`,
      {
        owner: "hirosystems",
        repo: repo,
      }
    );
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
