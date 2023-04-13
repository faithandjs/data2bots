import { convertToTitleCase, fresh_url, truncate } from "./requests";
import { parse } from "node-html-parser";

const FRESH_DEPARTMENT_ID = process.env.FRESH_DEPARTMENT_ID || "";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.FRESH_API_KEY}`,
};

const getJobIdFromUrl = (url: string): string => {
  const regex = /jobId=([\w\d]+)/;
  const match = url.match(regex);
  if (match && match.length > 1) {
    return match[1];
  }
  return "";
};

const slugify = (text: string) => {
  const slug = text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
  return slug.replace(/^-+|-+$/g, "");
};

export const list_job_postings = async (q?: string) => {
  const response = await fetch(
    fresh_url(
      q
        ? `job_postings?status=published&department=${FRESH_DEPARTMENT_ID}&title=${encodeURI(
            q
          )}`
        : `job_postings?status=published&department=${FRESH_DEPARTMENT_ID}`
    ),
    {
      method: "GET",
      headers,
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch job postings", { cause: response.status });
  }
  const fresh_data = await response.json();

  const data = fresh_data.map((job_posting: JobPost) => {
    const html = parse(job_posting?.description || "");
    const text = html.textContent || "";
    return {
      id: job_posting.id,
      description: truncate(text),
      title: job_posting.title,
      created_at: job_posting.created_at,
      updated_at: job_posting.updated_at,
      type: convertToTitleCase(job_posting.type || ""),
      remote: job_posting.remote,
      url: `${process.env.FRESH_JOB_URL}${getJobIdFromUrl(
        job_posting.applicant_apply_link
      )}/${slugify(job_posting.title)}`,
    };
  });
  return data;
};

export const get_job_posting = async (id: string) => {
  const response = await fetch(fresh_url(`job_postings/${id}`), {
    method: "GET",
    headers,
  });
  if (!response.ok) {
    throw new Error("Failed to fetch job posting", { cause: response.status });
  }
  const fresh_data = await response.json();
  delete fresh_data.interview_process;
  delete fresh_data.requisitions;
  return fresh_data;
};

export const get_job_fields = async (id: string) => {
  const response = await fetch(
    fresh_url(`job_postings/${id}/applicant_fields`),
    {
      method: "GET",
      headers,
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch job posting fields", {
      cause: response.status,
    });
  }
  const fresh_data = await response.json();
  return fresh_data;
};
