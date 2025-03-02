/* eslint-disable @typescript-eslint/no-unused-vars */
import { CompanyService } from "@/services/company.service";
import { ApiResponse } from "@/utils/ApiResponse";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const body = await request.json();
	const { name, email, password } = body;

	try {
		const res = await new CompanyService().create({ name, email, password });

		return NextResponse.json(res, {
			status: res.statusCode,
		});
	} catch (er) {
		console.log(er);
		if (er instanceof ApiResponse)
			return NextResponse.json(ApiResponse.error(er.message, er.statusCode), {
				status: er.statusCode,
			});
		return NextResponse.json(ApiResponse.error("Internal server error", 200), {
			status: 500,
		});
	}
}
