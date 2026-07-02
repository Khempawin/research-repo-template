# Demo Package

This package contains a Next.js App Router site for showcasing research results, figures, videos,
and links to the paper or code release.

## Setup

```bash
pnpm install
pnpm dev
```

Edit routes in `app/`, reusable UI in `components/`, placeholder content in `data/`, shared
types in `interfaces/`, helpers in `lib/`, and global CSS in `styles/`.

## Optional Review API

The demo remains static for GitHub Pages. If a project later needs dynamic review generation, host
an API separately and set:

```bash
NEXT_PUBLIC_REVIEW_API_URL=https://review-api.example.org
```

Use `lib/review-api.ts` from client components to create review jobs and poll for status. Keep
model credentials and long-running workflows in `services/review-api` and `services/review-worker`,
not in the static demo.

## GitHub Pages

The demo is configured for static export with `next build`. On GitHub Actions, the base path is
derived from `GITHUB_REPOSITORY`, so project pages work at `https://OWNER.github.io/REPOSITORY/`.

Deployment is handled by `.github/workflows/pages.yml`. In the repository settings, set Pages to
use GitHub Actions as the source.

If the first deploy fails with `Get Pages site failed`, either enable Pages manually in the
repository settings or add a `PAGES_TOKEN` repository secret with permission to enable Pages. The
workflow passes that token to `actions/configure-pages` with `enablement: true`.
