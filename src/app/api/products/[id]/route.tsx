import { UpdateProductInput } from "@/common/schemas/product";
import { ProductService } from "@/services/product.service";
import { TenantDatabaseService } from "@/services/tenant.service";
import { ApiResponse } from "@/utils/ApiResponse";
import { getSubdomain } from "@/utils/getSubdomain";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const subdomain = getSubdomain(req);
	const { id } = await params;

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const { name, price, quantity, unit, minimumQuantity }: UpdateProductInput =
			await req.json();

		const res = await new ProductService(tenant.databaseName).updateProduct(
			id,
			{
				name,
				price,
				quantity,
				unit,
				minimumQuantity,
			}
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

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const subdomain = getSubdomain(req);
	const { id } = await params;

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const res = await new ProductService(tenant.databaseName).getOneProductById(
			id
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

export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const subdomain = getSubdomain(req);
	const { id } = await params;

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const res = await new ProductService(tenant.databaseName).deleteProduct(id);

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
