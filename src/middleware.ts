/* eslint-disable @typescript-eslint/no-unused-vars */
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { checkPublicRoute } from "./utils/checkPublicRoute";
import { handleApiError } from "./errors/handleApiError";

const secret = process.env.NEXTAUTH_SECRET;

export default async function middleware(req: NextRequest) {
	try {
		const host = req.headers.get("host") || "";
		const subdomain = host.split(".")[0];
		const pathname = req.nextUrl.pathname;

		const isPublicRoute = checkPublicRoute(pathname);

		if (!isPublicRoute) {
			const token = await getToken({ req, secret });

			if (!token || Number(token.exp) * 1000 < Date.now()) {
				return NextResponse.redirect(new URL("/login", req.url));
			} else if (token.name?.toLowerCase() !== subdomain.toLowerCase()) {
				if (subdomain == process.env.BASE_URL) {
					return NextResponse.redirect(
						new URL(pathname, `http://${token.name}.${host}`)
					);
				} else
					return NextResponse.redirect(
						new URL("/errors/nao-autorizado", req.url)
					);
			}
		}

		const requestHeaders = new Headers(req.headers);
		requestHeaders.set("x-subdomain", subdomain);

		return NextResponse.next({
			request: {
				headers: requestHeaders,
			},
		});
	} catch (error) {
		return handleApiError(error);
	}
}

export const config = {
	matcher: "/:path*",
};
