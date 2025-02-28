/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from "./utils/ApiResponse";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { checkPublicRoute } from "./utils/checkPublicRoute";

const secret = process.env.NEXTAUTH_SECRET;

export default async function middleware(req: NextRequest) {
	try {
		const host = req.headers.get("host") || "";
		const subdomain = host.split(".")[0];
		req.subdomain = subdomain;

		const isPublicRoute = checkPublicRoute(req.nextUrl.pathname);

		if (!isPublicRoute) {
			const token = await getToken({ req, secret });

			if (!token || token.name !== subdomain) {
				return NextResponse.json(ApiResponse.error("Não autorizado", 401), {
					status: 401,
				});
			}
		}

		return NextResponse.next();
	} catch (error) {
		if (error instanceof ApiResponse) {
			return NextResponse.json(
				ApiResponse.error(error.message, error.statusCode),
				{
					status: error.statusCode,
				}
			);
		}

		return NextResponse.json(
			ApiResponse.error("Erro interno do servidor", 500),
			{
				status: 500,
			}
		);
	}
}
