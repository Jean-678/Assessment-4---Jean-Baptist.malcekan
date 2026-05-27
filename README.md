# Assessment 4 project

## Student Information

- Student name: *Jean-baptist Malcekan*
- Course: ITDI204 Cloud Computing
- Application: *Petit App*

## Cloud Deployment

This application is deployed using Render.

## Repository Structure

*This app is mainly a beginner deployment project to demonstrate:
server creation
routing
environment variables
cloud deployment skills*

## Branching Strategy

| Branch | Purpose |
|---|---|
| main | Production version |
| staging | Testing version before production |

## Render Environment

| Environment | Branch | Render URL |
|---|---|---|
| Production | main | *https://assessment-4-jean-baptist-malcekan.onrender.com/* |

Part 3 — Configure a GitHub Secret
GitHub Secrets are available only inside GitHub Actions.

Step 1 — Open Repository Settings
Open:

Repository → Settings
→ Secrets and variables
→ Actions
Select:

New repository secret
Step 2 — Create Secret
Name:

CI_SECRET_MESSAGE
Value:

Hello from GitHub Secret
Save.

Step 3 — Update GitHub Actions Workflow
Open:

.github/workflows/YOURFILE.yml
Add to your current file steps this part (after jobs) with:

    steps:

      - uses: actions/checkout@v4

      - name: Verify Secret

        run: |

          if [ -z "$CI_SECRET_MESSAGE" ]; then
            echo "Secret missing"
            exit 1
          else
            echo "GitHub Secret detected"
          fi

        env:

          CI_SECRET_MESSAGE: ${{ secrets.CI_SECRET_MESSAGE }}
Step 4 — Push Changes
Run:

git add .
git commit -m "Added GitHub Secret check"
git push
Open:

Actions
Verify workflow success.

README Update
Add the following section.

## Environment Variables and Secrets

This project uses:

| Component | Purpose |
|----------|----------|
| APP_ENV | Environment identification |
| Render Secret File | Runtime secret storage |
| GitHub Secret | CI/CD workflow secret |

Secrets are not committed into GitHub.
Submission Evidence
Submit screenshots of:

Environment Variables
APP_ENV configured in staging
APP_ENV configured in production
Secret File
Secret File configured in Render
secret-check working
GitHub Secret
GitHub Secret configuration
Successful GitHub Actions run
Application Evidence
/health endpoint output
Updated README
Reflection Questions
Answer in README:

What is the difference between an environment variable and a secret?

Why should secrets never be stored in GitHub?

Which part of your deployment uses:

GitHub Secret?
Render Secret File?
