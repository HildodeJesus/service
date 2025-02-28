import { IPagination } from "@/common/interfaces/Pagination";
import { ApiResponse } from "./ApiResponse";

export class PaginatedResponse<T> {
	message: string;
	data: T | T[] | null;
	statusCode: number;
	pagination?: IPagination;

	constructor(
		message: string,
		data: T | T[] | null = null,
		statusCode: number = 200,
		pagination: IPagination
	) {
		this.message = message;
		this.data = data;
		this.statusCode = statusCode;
		this.pagination = {
			order: pagination.order || "desc",
			page: pagination.page || 1,
			take: pagination.take || 10,
			totalItems: pagination.totalItems || 0,
			totalPages: pagination.totalPages || 0,
		};
	}

	static success<T>(
		message: string,
		data: T | T[] | null = null,
		statusCode: number = 200,
		pagination: IPagination
	): PaginatedResponse<T> {
		return new PaginatedResponse<T>(message, data, statusCode, {
			order: pagination.order || "desc",
			page: pagination.page || 1,
			take: pagination.take || 10,
			totalItems: pagination.totalItems || 0,
			totalPages: pagination.totalPages || 0,
		});
	}

	static error<T>(
		message: string,
		statusCode: number = 400,
		data: T | T[] | null = null
	): ApiResponse<T> {
		return new ApiResponse<T>(message, data, statusCode);
	}
}
