import privateRoutes from "../privateRoutes.json";

export function checkPublicRoute(pathname: string): boolean {
	for (const route of privateRoutes) {
		if (pathname === route || pathname.startsWith(route + "/")) {
			return false;
		}
	}
	return true;
}
