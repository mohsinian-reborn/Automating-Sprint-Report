# Sprint Reporting Automation Tool

This project automates the process of generating sprint reports by integrating data from GitHub, Bitbucket, and Jira. It collects information like pull requests, issues, commits, and sprint progress to create detailed reports, making it easier to track the team's work and identify blockers or delays.

Evertything should be in future tense, let's see what we can build!
I will update each section when we are done.

## Features

- **GitHub Integration**: Pulls data on pull requests, issues, and commits related to a specific sprint.
- **Bitbucket Integration**: Retrieves pull request statuses and commits from Bitbucket repositories.
- **Jira Integration**: Fetches sprint data, including story progress, issues completed, and blockers.
- **Automated Reports**: Generates a summary report of the sprint, providing an overview of what was accomplished and pending work.
- **Customizable**: Configure which repositories, branches, or boards to pull data from.

## Tech Stack

- **Node.js**: The core framework to build the application.
- **GitHub API**: To pull data related to pull requests, commits, and issues.
- **Bitbucket API**: To gather data from Bitbucket repositories.
- **Jira API**: To collect sprint-related data from Jira boards.
