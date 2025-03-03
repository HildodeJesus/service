import { CreateDishInput } from "@/common/schemas/dish";
import { handleApiError } from "@/errors/handleApiError";
import { DishService } from "@/services/dish.service";
import { TenantDatabaseService } from "@/services/tenant.service";
import { getSubdomain } from "@/utils/getSubdomain";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const subdomain = getSubdomain(req);

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const res = await new DishService(tenant.databaseName).getDishById(
			params.id
		);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const subdomain = getSubdomain(req);

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const {
			name,
			description,
			price,
			cost,
			categoryId,
			dishItems,
		}: CreateDishInput = await req.json();

		const res = await new DishService(tenant.databaseName).updateDish(
			params.id,
			{
				name,
				description,
				price,
				cost,
				categoryId,
				dishItems,
			}
		);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const subdomain = getSubdomain(req);

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const res = await new DishService(tenant.databaseName).deleteDish(
			params.id
		);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}
