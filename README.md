# Service Finder HTML to React (Vite)

This project wraps each original HTML page as a React route while keeping the **same CSS/JS/assets** for identical responsiveness.

## How it works

- All template assets are copied into `public/`:
  - `public/css`, `public/js`, `public/images`, `public/fonts`
- Each original `*.html` file becomes a React page component in `src/pages/`
- The `<body>` markup is preserved and rendered via `dangerouslySetInnerHTML`
- All `href="something.html"` links are rewritten to `href="/something"` (and `index.html` -> `/`)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment note (important)

Because this is a client-side router, your hosting must serve `index.html` for all routes like:

- `/about-us`
- `/search-list`
- etc.
