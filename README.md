# Bligh Stian Ignacio — Portfolio

Personal portfolio site built with React + Vite.

## Getting started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

### 3. Build for production
```bash
npm run build
```

---

## Before you deploy

Search the project for these placeholders and replace them with your real info:

| File | Placeholder | Replace with |
|---|---|---|
| `src/components/Hero.jsx` | `your@email.com` | Your email address |
| `src/components/Contact.jsx` | `your@email.com` | Your email address |
| `src/components/Contact.jsx` | `yourprofile` | Your LinkedIn username |

When a project goes live, update the `demoUrl` field in `src/components/Projects.jsx`.

---

## Deploying to Vercel (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** → import your repo
4. Leave all settings as default — Vercel auto-detects Vite
5. Click **Deploy**

That's it. Every `git push` to `main` will trigger a new deployment automatically.

---

## Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Projects.jsx   ← add/edit projects here
        ├── Skills.jsx     ← add/edit skills here
        └── Contact.jsx    ← update email & LinkedIn here
```
