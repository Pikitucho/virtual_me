# Deploying Virtual Me: Origins on Vercel

This project is a static browser prototype. Vercel builds it with `npm run build`, serves the generated `dist/` directory, and does not require server-side functions or environment variables.

## Project settings

Use these values if Vercel asks for project settings during import or linking:

| Setting | Value |
| --- | --- |
| Framework preset | Other |
| Install command | `npm install` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Development command | `npm run dev` |

The repository also includes `vercel.json`, so Vercel can infer the build command and output directory automatically.

## Publish with the Vercel CLI

Run these commands from the repository root:

```bash
npm run check
npm run build
npm i -g vercel
vercel login
vercel link
vercel deploy
vercel deploy --prod
```

What each command does:

1. `npm run check` validates the JavaScript entry points before deployment.
2. `npm run build` creates the static `dist/` folder that Vercel will publish.
3. `npm i -g vercel` installs the Vercel CLI if it is not already installed.
4. `vercel login` authenticates your local machine with your Vercel account.
5. `vercel link` connects this folder to a Vercel project.
6. `vercel deploy` creates a preview deployment and prints the preview URL.
7. `vercel deploy --prod` publishes the production deployment and prints the live production URL.

## Publish from GitHub through the Vercel dashboard

1. Push this repository to GitHub.
2. Open the Vercel dashboard and choose **Add New... → Project**.
3. Import the GitHub repository.
4. Confirm the project settings listed above.
5. Click **Deploy**.
6. After the first deployment, every pull request creates a preview deployment and every production-branch merge creates a production deployment.

## Verify the live deployment

After Vercel prints a URL, open it in a browser and check that you can:

- Edit the character name.
- Log an IRL activity.
- See Ability Now, Legacy, fragments, and permanent stat points update.
- See Skill Universe stars change from locked to available when requirements are met.
- Copy the read-only Game Passport JSON.
