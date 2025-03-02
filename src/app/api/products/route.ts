import { CreateProductInput } from "@/common/schemas/product";
import { ProductService } from "@/services/product.service";
import { TenantDatabaseService } from "@/services/tenant.service";
import { ApiResponse } from "@/utils/ApiResponse";
import { getSubdomain } from "@/utils/getSubdomain";
import { Pagination } from "@/utils/Pagination";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const subdomain = getSubdomain(req);
	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const { name, price, quantity, unit, minimumQuantity }: CreateProductInput =
			await req.json();

		const res = await new ProductService(tenant.databaseName).createProduct({
			name,
			price,
			quantity,
			unit,
			minimumQuantity,
		});

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		if (error instanceof ApiResponse) {
			return NextResponse.json(
				ApiResponse.error(error.message, error.statusCode),
				{
					status: error.statusCode,
				}
			);
		}

		console.log(error);
		return NextResponse.json(
			ApiResponse.error("Erro interno do servidor", 500),
			{
				status: 500,
			}
		);
	}
}

export async function GET(req: NextRequest) {
	const subdomain = getSubdomain(req);
	const searchParams = req.nextUrl.searchParams;

	const order = searchParams.get("order");
	const page = searchParams.get("page");
	const take = searchParams.get("order");
	const search = searchParams.get("search");

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const res = await new ProductService(tenant.databaseName).getProducts(
			Pagination.formated(order, Number(page), Number(take)),
			search
		);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		if (error instanceof ApiResponse) {
			return NextResponse.json(
				ApiResponse.error(error.message, error.statusCode),
				{
					status: error.statusCode,
				}
			);
		}

		console.log(error);
		return NextResponse.json(
			ApiResponse.error("Erro interno do servidor", 500),
			{
				status: 500,
			}
		);
	}
}
