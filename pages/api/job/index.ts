import type { NextApiRequest, NextApiResponse } from "next";
import { list_job_postings } from "@/utils/api_handlers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: [JobPost] } | { error: string }>
) {
  const { method } = req;
  const { q } = req.query;
  switch (method) {
    case "GET":
      try {
        const data = await list_job_postings(q as string);
        return res.status(200).json({ data });
      } catch (error) {
        if (error instanceof Error) {
          return res.status(400).json({ error: error.message });
        }
        return res.status(400).json({ error: "Something went wrong" });
      }

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
