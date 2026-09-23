# junmingchen-panunics.com — Personal Academic Website

Permanent academic homepage of **Junming Chen (陈俊名)** and the **PANUNICS
(统域学)** framework. Static site, zero server cost, designed for 10–20 years
of maintenance.

- **Content** lives in `src/content/*.json` — edit those files only. See
  `src/content/README.md`.
- **Presentation** is React + Vite + Tailwind in `src/`.
- **Deploy** is GitHub Actions → GitHub Pages, fronted by Cloudflare DNS.

## Stack

React 19 + TypeScript + Vite 7 + Tailwind CSS 3. No external fonts, no
third-party runtime services, no paid platforms. Hash-based routing, so the
site works on GitHub Pages without any server rewrite rules.

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # serve dist/ locally
```

## Deploy (one-time setup)

1. Create a public GitHub repository named `<your-username>.github.io` (or any
   name — then set `base` in `vite.config.ts` accordingly and keep HashRouter).
2. Push this repository to GitHub (`main` branch).
3. In the repository: **Settings → Pages → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every
   push to `main`.
5. In Cloudflare (your DNS host for `junmingchen-panunics.com`):
   - Add a `CNAME` record: `junmingchen-panunics.com` →
     `<your-username>.github.io` (Proxied status works and gives you
     Cloudflare's CDN + automatic HTTPS).
   - Add a `CNAME` record: `www` → `junmingchen-panunics.com`.
   - In the GitHub repo: **Settings → Pages → Custom domain**:
     `junmingchen-panunics.com`. GitHub will issue the TLS certificate
     automatically once DNS propagates.
6. Enforce HTTPS in **Settings → Pages** once the certificate is active.

The `public/CNAME` file in this repo pins the custom domain across deploys.

## Update the site

Edit a JSON file in `src/content/`, commit, push. Done. No HTML touched.
