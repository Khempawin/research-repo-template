# Review API Service

Placeholder for a future HTTP API that accepts review-generation requests from the static demo.

Suggested responsibilities:

- Validate public request payloads.
- Create review jobs and return stable job IDs.
- Provide job status and result endpoints.
- Own API authentication, rate limits, CORS, and request size limits.
- Forward long-running work to `review-worker` instead of blocking browser requests.

Suggested endpoints:

```text
POST /reviews
GET  /reviews/{job_id}
```

For Python projects, FastAPI is a good fit because it can publish OpenAPI schemas that the demo can
consume later. For TypeScript projects, a small Node service can share more types with the demo.

