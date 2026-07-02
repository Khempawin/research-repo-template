import type { ReviewJob, ReviewRequest } from "../interfaces/review-job";

const reviewApiUrl = process.env.NEXT_PUBLIC_REVIEW_API_URL;

export function isReviewApiConfigured() {
  return Boolean(reviewApiUrl);
}

export async function createReviewJob(request: ReviewRequest): Promise<ReviewJob> {
  if (!reviewApiUrl) {
    throw new Error("NEXT_PUBLIC_REVIEW_API_URL is not configured.");
  }

  const response = await fetch(`${reviewApiUrl}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Review API returned ${response.status}.`);
  }

  return response.json() as Promise<ReviewJob>;
}

export async function getReviewJob(jobId: string): Promise<ReviewJob> {
  if (!reviewApiUrl) {
    throw new Error("NEXT_PUBLIC_REVIEW_API_URL is not configured.");
  }

  const response = await fetch(`${reviewApiUrl}/reviews/${encodeURIComponent(jobId)}`);

  if (!response.ok) {
    throw new Error(`Review API returned ${response.status}.`);
  }

  return response.json() as Promise<ReviewJob>;
}

