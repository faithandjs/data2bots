import { get_job_posting } from "@/utils/api_handlers";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: JobPost } | { error: string }>
) {
  const { method } = req;
  const { id } = req.query;
  switch (method) {
    case "GET": {
      try {
        if (!id) {
          return res.status(400).json({ error: "Missing id" });
        }
        const data = await get_job_posting(id as string);
        return res.status(200).json({ data });
      } catch (error) {
        if (error instanceof Error) {
          return res.status(400).json({ error: error.message });
        }
        return res.status(400).json({ error: "Something went wrong" });
      }
    }

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
