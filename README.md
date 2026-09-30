# Anubhav Yadav – Portfolio

React + Vite + Tailwind CSS (v4) + lucide-react icons.

## Run locally
1. Install Node.js 18 or newer (https://nodejs.org).
2. In this folder run:
   npm install
   npm run dev
3. Open the local address it prints (usually http://localhost:5173).

Build for production: `npm run build` (output goes to `dist/`).

## Where your information lives
- `src/data/portfolio.js` – ALL text: name, contact details, summary, skills,
  experience, projects, certifications, achievements, interests, nav links.
- `index.html` – browser tab title and search-engine description.
- `public/favicon.svg` – the "AY" browser tab icon.
- `src/index.css` – colours and font (the `@theme` block at the top).

## Add or replace a project
Open `src/data/portfolio.js`, find `projects`, copy one `{ ... }` block,
paste it into the list and edit it. `featured: true` gives the large two-panel
layout; `featured: false` gives the standard card. `badge` is the small label.

## Add GitHub links
- Project: fill in `githubUrl: "https://github.com/you/repo"` (and `demoUrl`
  for a live demo). Buttons appear automatically only when these are filled.
- Profile: fill in `githubUrl` in `profile` to show a GitHub icon in the hero.
- Certificates: fill in `verifyUrl` to show a "Verify credential" link.

## Deploy (free) – Vercel
1. Create a GitHub account and a new repository; upload this folder
   (don't upload `node_modules` or `dist`).
2. Sign in at https://vercel.com with GitHub, click "Add New → Project",
   pick the repository. Vercel detects Vite; click Deploy.
3. You get a URL like `anubhav-yadav.vercel.app` (rename it under
   Project → Settings → Domains). Every push to GitHub redeploys automatically.

Netlify works the same way: build command `npm run build`, publish directory `dist`.
