// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  status?: number;
  data?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  if (req.method != `POST`) {
    return res.status(405).json({
      status: 405,
      message: `Method ${req.method} not allowed`,
    });
  }
  if (!req.body.url) {
    return res.status(400).json({
      message: "url is required",
      status: 400,
    });
  }
  const pageHtml = await (await fetch(req.body.url)).text();
  return res.status(200).json({ data: pageHtml });
}
