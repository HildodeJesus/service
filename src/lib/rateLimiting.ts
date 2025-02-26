/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { NextApiRequest, NextApiResponse } from "next";
import { redis } from "./redis";

export async function rateLimit(
	req: NextApiRequest,
	res: NextApiResponse,
	next: Function
) {
	const ip =
		req.headers["x-real-ip"] || req.connection.remoteAddress || "anonymous";
	const currentTime = Date.now();
	const timeWindow = 15 * 60 * 1000;
	const maxRequests = 100;

	const key = `rate-limit:${ip}:${Math.floor(currentTime / timeWindow)}`;

	const requestCount = await redis.get(key);

	if (requestCount && parseInt(requestCount) >= maxRequests) {
		return res
			.status(429)
			.json({ message: "Muitas requisições, tente novamente mais tarde." });
	}

	if (!requestCount) {
		await redis.setex(key, timeWindow / 1000, "1");
	} else {
		await redis.incr(key);
	}

	next();
}
