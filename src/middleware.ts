import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { checkPublicRoute } from "./utils/checkPublicRoute";
import { handleApiError } from "./errors/handleApiError";

const secret = process.env.NEXTAUTH_SECRET;
const BASE_DOMAIN = process.env.BASE_DOMAIN;

export default async function middleware(req: NextRequest) {
	try {
		const url = req.nextUrl.clone();
		const host = req.headers.get("host") || "";
		const subdomain = host.split(".")[0];
		const pathname = req.nextUrl.pathname;

		const isPublicRoute = checkPublicRoute(pathname);

		console.log({
			pathname,
			subdomain,
			host,
		});

		if (!isPublicRoute) {
			const token = await getToken({ req, secret });

			console.log(token);

			if (!token || Number(token.exp) * 1000 < Date.now()) {
				return NextResponse.redirect(
					new URL(`${url.protocol}//${BASE_DOMAIN}/login`, req.url)
				);
			} else if (token.name?.toLowerCase() !== subdomain.toLowerCase()) {
				if (subdomain == BASE_DOMAIN) {
					return NextResponse.redirect(
						new URL(`${url.protocol}//${token.name}.${BASE_DOMAIN}`, req.url)
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
	exclude: [
		"/**/*.jpg",
		"/**/*.jpeg",
		"/**/*.png",
		"/**/*.gif",
		"/**/*.svg",
		"/**/*.ico",
		"/**/*.webp",
		"/**/*.avif",
	],
};
