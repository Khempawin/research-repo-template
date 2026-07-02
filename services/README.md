# Services

This directory is reserved for optional dynamic services that support the static demo.

The default template deploys `demo/` to GitHub Pages as a static site. If a project later needs
server-side behavior, keep the public demo static and host the API or worker services separately.

## Suggested Architecture

```text
services/
  review-api/      HTTP API gateway for review-generation jobs
  review-worker/   background worker for model calls and agentic workflows
  shared/          shared schemas, job states, and service contracts
```

Recommended request flow:

1. The static demo calls `POST /reviews` on `review-api`.
2. `review-api` validates the request, creates a job, and returns `job_id`.
3. `review-worker` consumes the job and writes status/results.
4. The static demo polls `GET /reviews/{job_id}` or subscribes to progress updates.

This avoids long browser requests for model-heavy workflows such as peer review generation, PDF
analysis, retrieval, or multi-agent review pipelines.

## Environment

The demo should read the API origin from `NEXT_PUBLIC_REVIEW_API_URL`.

```bash
NEXT_PUBLIC_REVIEW_API_URL=https://review-api.example.org
```

Do not expose model provider secrets to the static demo. Keep those in the hosted API or worker
environment.

