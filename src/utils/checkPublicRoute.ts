import publicroutes from "../publicRoutes.json";

/**
 * @param pathname pathname da rota atual
 * @description Essa função checa se a rota é pública ou não
 * @returns boolean
 */

export function checkPublicRoute(pathname: string) {
	for (const route of publicroutes) {
		if (pathname === route || pathname.startsWith(route + "/")) {
			return true;
		}
	}

	return false;
}
