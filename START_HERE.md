Getting started — quick checklist

This file is a lightweight starter to get your dev environment and project scaffold ready. I created a branch `setup/starter` with an init script you can run locally. I will not complete tasks for you — this just prepares everything so you can start coding.

What I added for you
- scripts/init-next.sh — a one-shot script that scaffolds a Next.js (App Router) + TypeScript + Tailwind starter in projects/nextjs-starter
- START_HERE.md (this file)

Step-by-step (what you should do next)

1) Review the branch and PR I opened: `setup/starter` (see GitHub PR link in the repo).
2) Open a terminal and cd into the repo root:
   cd ~/workspace/career-roadmap-6months

3) Option A — Run the init script (recommended):
   chmod +x scripts/init-next.sh
   ./scripts/init-next.sh

   This will create projects/nextjs-starter with TypeScript, Tailwind, ESLint and a README. It will NOT deploy or push the generated app — you'll run the commands and finish setup.

4) Option B — Run the commands manually if you prefer finer control (copy/paste):
   npx create-next-app@latest projects/nextjs-starter --typescript --eslint --app
   cd projects/nextjs-starter
   # Follow the interactive prompts.
   # Then add Tailwind:
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   # Update tailwind.config.js and globals.css per Tailwind docs

5) After the scaffold finishes:
   - Start dev server: cd projects/nextjs-starter && npm run dev
   - Commit your work to a feature branch, push, and open a PR when ready.

Helpful tips
- Use Node 18+ (nvm use 18 or nvm install 18).
- I recommend enabling TypeScript and ESLint during create-next-app prompts.
- If you want, I can run CI checks, but I will not complete coding tasks for you.

If anything fails when you run the script, paste the terminal output here and I’ll help debug.
