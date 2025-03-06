/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPaginationClient } from "@/common/interfaces/Pagination";

export class Pagination {
	static getQuery(pagination: any) {
		if (!pagination) return "";

		const keys = Object.keys(pagination) as Array<keyof IPaginationClient>;
		let string = "";

		for (const key of keys) {
			if (pagination[key] !== undefined) {
				if (string === "") {
					string = `${key}=${pagination[key]}`;
				} else {
					string += `&${key}=${pagination[key]}`;
				}
			}
		}

		return string;
	}

	static formated(
		order?: "desc" | "asc" | null | string,
		page?: number,
		take?: number
	): IPaginationClient {
		return {
			order: order !== "desc" && order !== "asc" ? "desc" : order,
			page: page || 1,
			take: take || 10,
		};
	}
}
