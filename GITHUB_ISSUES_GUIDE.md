# GitHub Issues Management Guide for AI Dev Agents

This document serves as the standard operating procedure for maintaining project tracking discipline within the `session-bookr` repository. Every AI agent assigned to this project must adhere to these guidelines to ensure milestones and progress are accurately reflected on GitHub.

## 1. Task Initialization
Before writing any code or performing research, the agent must:
- **Search for existing issues**: Check if the current task is already documented.
- **Create an issue**: If no relevant issue exists, create one.
    - **Title**: Concise and descriptive (e.g., "Add user authentication flow").
    - **Body**: Include requirements, acceptance criteria, and any technical notes.
    - **Labels**: Assign relevant labels (e.g., `feature`, `bug`, `refactor`).
    - **Milestone**: Assign the issue to the active milestone.

## 2. In-Progress Updates
Once work begins:
- **Assign yourself**: Ensure the issue shows active work.
- **Comment on the issue**: Provide a brief starting update (e.g., "Starting implementation of the login API").
- **Update Milestones**: Ensure the milestone progress reflects that work is underway.

## 3. Work Completion
Upon finishing the task:
- **Final Comment**: Post a summary of the changes made, including links to relevant files or PRs.
- **Close the Issue**: Mark the issue as completed once the code is verified or merged.
- **Milestone Review**: If this was the last issue in a milestone, notify the user to review and potentially close the milestone.

## 4. Milestone Discipline
- Always check the `pageInfo` and `milestones` metadata.
- Ensure every issue is categorized.
- If a task is too large, break it into sub-issues and link them to the parent issue.

## 5. Agent Reporting
In every session wrap-up, the agent should confirm:
1. Which issue was addressed.
2. The current status of that issue (e.g., "Issue #12 closed").
3. How this affected the overall milestone progress.

---
*Failure to follow this guide leads to fragmented project tracking. Discipline is mandatory.*
