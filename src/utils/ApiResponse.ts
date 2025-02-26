export class ApiResponse<T> {
	message: string;
	data: T | T[] | null;
	statusCode: number;

	constructor(
		message: string,
		data: T | T[] | null = null,
		statusCode: number = 200
	) {
		this.message = message;
		this.data = data;
		this.statusCode = statusCode;
	}

	static success<T>(
		message: string,
		data: T | T[] | null = null,
		statusCode: number = 200
	): ApiResponse<T> {
		return new ApiResponse<T>(message, data, statusCode);
	}

	static error<T>(
		message: string,
		statusCode: number = 400,
		data: T | T[] | null = null
	): ApiResponse<T> {
		return new ApiResponse<T>(message, data, statusCode);
	}
}


