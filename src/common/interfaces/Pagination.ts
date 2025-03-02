export interface IPagination {
	totalItems?: number;
	totalPages?: number;
	page: number;
	take: number;
	order: "desc" | "asc";
}

export interface IPaginationClient {
	page: number;
	take: number;
	order: "desc" | "asc";
}
