# Review Worker Service

Placeholder for a future background worker that performs model-heavy or agentic review workflows.

Suggested responsibilities:

- Consume jobs created by `review-api`.
- Call hosted models, local inference servers, retrieval systems, or document-processing services.
- Persist progress, intermediate artifacts, and final review outputs.
- Apply retries, timeouts, and cancellation behavior away from the browser.

This service can have heavier dependencies than the public API. Keeping it separate makes it easier
to isolate model runtimes, PDF processing stacks, GPU access, or workflow engines.

