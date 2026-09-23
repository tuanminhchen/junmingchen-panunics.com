# Content files — how to maintain this site

All site content lives in this directory as JSON. **You never need to touch
React components to update the site.** Edit a file here, commit, push — the
site rebuilds and deploys automatically.

| File | What it controls |
|---|---|
| `site.json` | Identity (name, tagline, email, profile links), research interests, news items, and the whole Panunics (统域学) page |
| `publications.json` | All publications, grouped automatically by year |
| `projects.json` | Research projects shown on the Projects page |
| `works.json` | Science fiction, books, and other writing |

## Rules of thumb

- **New paper?** Add an entry at the **top** of `publications.json`'s `items`
  array. Newest entries appear first automatically.
- Keep your name in `authors` exactly matching `site.json`'s `identity.name`
  (currently `Junming Chen`) — matching names render in bold.
- Leave a link's `url` as an empty string `""` to hide it; no need to delete it.
- Every file has a `_readme` field at the top documenting its own schema.
- After editing, run `npm run build` locally to check for JSON syntax errors
  before pushing.

## Adding long-form content (essays, project pages)

If you need real Markdown essays or per-project pages rather than short
descriptions, say so and the build can be extended with a Markdown pipeline —
but for a durable low-maintenance site, prefer structured entries here.
