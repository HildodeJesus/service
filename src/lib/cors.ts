/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */

import { ApiResponse } from "@/utils/ApiResponse";
import { NextApiRequest, NextApiResponse } from "next";

const ALLOWED_ORIGINS =
	process.env.ALLOWED_ORIGIN?.split(",").map(o => o.trim()) || [];

export function cors(
	req: NextApiRequest,
	res: NextApiResponse,
	next: Function
) {
	if (!ALLOWED_ORIGINS.length) return next();

	const origin = req.headers.origin as string | undefined;
	console.log(origin);

	if (origin) {
		try {
			const url = new URL(origin);
			const domainParts = url.hostname.split(".");
			const baseDomain = domainParts.slice(-2).join(".");

			if (ALLOWED_ORIGINS.includes(baseDomain)) {
				res.setHeader("Access-Control-Allow-Origin", origin);
			} else {
				return res
					.status(403)
					.json(ApiResponse.error("Origin not allowed", 403));
			}
		} catch (error) {
			return res.status(403).json(ApiResponse.error("Invalid origin", 403));
		}
	} else {
		return res.status(403).json(ApiResponse.error("Missing origin", 403));
	}

	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, OPTIONS"
	);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	res.setHeader("Access-Control-Allow-Credentials", "true");

	if (req.method === "OPTIONS") {
		return res.status(200).end();
	}

	next();
}
