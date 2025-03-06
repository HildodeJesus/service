import { NextRequest } from "next/server";
import { ApiResponse } from "./ApiResponse";

export function getSubdomain(req: NextRequest) {
	const subdomain = req.headers.get("x-subdomain");
	if (!subdomain) throw ApiResponse.error("Ação não permitida!", 403);

	console.log(subdomain);

	return subdomain;
}
