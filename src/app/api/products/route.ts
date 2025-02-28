import { CreateProductInput } from "@/common/schemas/product";
import { TenantDatabaseService } from "@/services/tenant.service";
import { ApiResponse } from "@/utils/ApiResponse";
import { GetPrismaClient } from "@/utils/getPrismaClient";
import { treatError } from "@/utils/treatError";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const subdomain = req.headers.get("x-subdomain");
	if (!subdomain)
		return NextResponse.json(ApiResponse.error("Ação não permitida!", 403), {
			status: 403,
		});

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);
		if (!tenant)
			return NextResponse.json(
				ApiResponse.error("Banco tenant não criado!", 400),
				{
					status: 400,
				}
			);

		const body: CreateProductInput = await req.json();

		const prisma = GetPrismaClient.tenant(tenant?.databaseName);

		return NextResponse.json("asds");
	} catch (error) {
		treatError(error);
	}
}
