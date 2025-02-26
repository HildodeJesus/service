/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { cors } from "@/lib/cors";
import { rateLimit } from "./lib/rateLimiting";
import { ApiResponse } from "./utils/ApiResponse";

export default async function middleware(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		await new Promise<void>((resolve, reject) => {
			cors(req, res, (err: any) => (err ? reject(err) : resolve()));
		});

		await new Promise<void>((resolve, reject) => {
			rateLimit(req, res, (err: any) => (err ? reject(err) : resolve()));
		});

		
	} catch (error) {
		return res
			.status(500)
			.json(ApiResponse.error("internal server error", 500));
	}
}
