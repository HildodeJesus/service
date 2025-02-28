import privateRoutes from "../privateRoutes.json";

export function checkPublicRoute(pathname: string) {
	for (const route of privateRoutes) {
		if (pathname === route || pathname.startsWith(route + "/")) {
			return false;
		} else {
			return true;
		}
	}

	return true;
}
