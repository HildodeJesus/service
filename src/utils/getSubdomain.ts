import { NextRequest } from "next/server";
import { ApiResponse } from "./ApiResponse";

/**
 *
 * @param req NextRequest
 * @returns string
 */

export function getSubdomain(req: NextRequest) {
	const subdomain = req.headers.get("xs-slug");
	if (!subdomain) throw ApiResponse.error("Ação não permitida!", 403);

	console.log(subdomain);

	return subdomain;
}
