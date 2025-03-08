import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { handleApiError } from "./errors/handleApiError";
import { checkPublicRoute } from "./utils/checkPublicRoute";

const secret = process.env.NEXTAUTH_SECRET;

export default async function middleware(req: NextRequest) {
	try {
		const pathname = req.nextUrl.pathname;

		if (
			pathname.startsWith("/_next") ||
			pathname.startsWith("/api/") ||
			pathname.startsWith("/favicon.ico") ||
			checkPublicRoute(pathname)
		) {
			return NextResponse.next();
		}

		const pathParts = pathname.split("/").filter(Boolean);
		const slug = pathParts[0] || "";

		const remainingPath =
			pathParts.length > 1 ? `/${pathParts.slice(1).join("/")}` : "/";

		console.log({
			pathname,
			slug,
			remainingPath,
		});

		const token = await getToken({ req, secret });

		if (!token || Number(token.exp) * 1000 < Date.now()) {
			return NextResponse.redirect(new URL(`/login`, req.url));
		}

		if (token.name?.toLowerCase() !== slug.toLowerCase()) {
			return NextResponse.redirect(
				new URL(`/${token.name?.toLowerCase()}/`, req.url)
			);
		}

		const requestHeaders = new Headers(req.headers);
		requestHeaders.set("x-slug", slug);

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
	matcher: ["/:path*"],
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
