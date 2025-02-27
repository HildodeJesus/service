/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "./utils/ApiResponse";
import {} from "next-auth/middleware";
import { NextResponse } from "next/server";

export default async function middleware(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
	} catch (error) {
		if (error instanceof ApiResponse)
			return NextResponse.json(
				ApiResponse.error(error.message, error.statusCode),
				{
					status: error.statusCode,
				}
			);

		return NextResponse.json(ApiResponse.error("internal server error", 500), {
			status: 500,
		});
	}
}

export const config = {
	match: ["/dashboard/:path*"],
};
