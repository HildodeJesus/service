/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiResponse } from "@/utils/ApiResponse";
import { GetPrismaClient } from "@/utils/getPrismaClient";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const body = await request.json();
	const { name, email, password } = body;

	try {
		const prisma = GetPrismaClient.main();
		const alredyExists = await prisma.company.findFirst({
			where: { email: email },
		});

		if (alredyExists)
			return NextResponse.json(
				ApiResponse.error("Email já usado anteriormente", 400),
				{ status: 400 }
			);

		const hashedPassword = await bcrypt.hash(password, 8);

		await prisma.company.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});

		return NextResponse.json(ApiResponse.error("Criado com sucesso!", 200), {
			status: 200,
		});
	} catch (er) {
		console.log(er);
		return NextResponse.json(ApiResponse.error("Internal server error", 200), {
			status: 500,
		});
	}
}
