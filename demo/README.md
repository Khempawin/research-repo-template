# Demo Package

This package contains a Next.js App Router site for showcasing research results, figures, videos,
and links to the paper or code release.

## Setup

```bash
pnpm install
pnpm dev
```

Edit pages in `app/`.

## GitHub Pages

The demo is configured for static export with `next build`. On GitHub Actions, the base path is
derived from `GITHUB_REPOSITORY`, so project pages work at `https://OWNER.github.io/REPOSITORY/`.

Deployment is handled by `.github/workflows/pages.yml`. In the repository settings, set Pages to
use GitHub Actions as the source.
