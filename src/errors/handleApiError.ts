import { ApiResponse } from "@/utils/ApiResponse";
import { NextResponse } from "next/server";

export function handleApiError(error: unknown) {
	if (error instanceof ApiResponse) {
		return NextResponse.json(
			ApiResponse.error(error.message, error.statusCode),
			{ status: error.statusCode }
		);
	}

	const statusCode = 500;
	const message =
		error instanceof Error ? error.message : "Erro interno do servidor";

	return NextResponse.json(ApiResponse.error(message, statusCode), {
		status: statusCode,
	});
}
