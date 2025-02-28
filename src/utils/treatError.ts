/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { ApiResponse } from "./ApiResponse";

export function treatError(error: any) {
	if (error instanceof ApiResponse) {
		return NextResponse.json(
			ApiResponse.error(error.message, error.statusCode),
			{
				status: error.statusCode,
			}
		);
	}

	console.log(error);
	return NextResponse.json(ApiResponse.error("Erro interno do servidor", 500), {
		status: 500,
	});
}
