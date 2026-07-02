export type ReviewJobStatus = "queued" | "running" | "succeeded" | "failed" | "cancelled";

export interface ReviewRequest {
  title: string;
  abstract: string;
  manuscriptUrl?: string;
}

export interface ReviewResult {
  summary: string;
  strengths: string[];
  weaknesses: string[];
  recommendation: string;
}

export interface ReviewJob {
  job_id: string;
  status: ReviewJobStatus;
  progress?: number;
  result?: ReviewResult;
  error?: string;
}

