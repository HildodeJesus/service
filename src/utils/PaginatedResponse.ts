export class PaginatedResponse<T> {
	message: string;
	data: T | T[] | null;
	statusCode: number;
	pagination?: {
		totalItems: number;
		totalPages: number;
		currentPage: number;
		itemsPerPage: number;
	};

	constructor(
		message: string,
		data: T | T[] | null = null,
		statusCode: number = 200,
		totalItems: number = 0,
		totalPages: number = 0,
		currentPage: number = 1,
		itemsPerPage: number = 10
	) {
		this.message = message;
		this.data = data;
		this.statusCode = statusCode;
		this.pagination = {
			totalItems,
			totalPages,
			currentPage,
			itemsPerPage,
		};
	}

	static success<T>(
		message: string,
		data: T | T[] | null = null,
		statusCode: number = 200,
		totalItems: number = 0,
		totalPages: number = 0,
		currentPage: number = 1,
		itemsPerPage: number = 10
	): PaginatedResponse<T> {
		return new PaginatedResponse<T>(
			message,
			data,
			statusCode,
			totalItems,
			totalPages,
			currentPage,
			itemsPerPage
		);
	}

	static error<T>(
		message: string,
		statusCode: number = 400,
		data: T | T[] | null = null,
		totalItems: number = 0,
		totalPages: number = 0,
		currentPage: number = 1,
		itemsPerPage: number = 10
	): PaginatedResponse<T> {
		return new PaginatedResponse<T>(
			message,
			data,
			statusCode,
			totalItems,
			totalPages,
			currentPage,
			itemsPerPage
		);
	}
}
