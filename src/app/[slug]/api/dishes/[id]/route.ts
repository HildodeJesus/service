import { CreateDishInput } from "@/common/schemas/dish";
import { handleApiError } from "@/errors/handleApiError";
import { DishService } from "@/services/dish.service";
import { TenantDatabaseService } from "@/services/tenant.service";
import { getSubdomain } from "@/utils/getSubdomain";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const subdomain = getSubdomain(req);

	const { id } = await params;

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const res = await new DishService(tenant.databaseName).getDishById(id);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
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
			picture,
		}: CreateDishInput = await req.json();

		const { id } = await params;

		console.log(id);
		console.log(picture);

		const res = await new DishService(tenant.databaseName).updateDish(id, {
			name,
			description,
			price,
			cost,
			categoryId,
			dishItems,
			picture,
		});

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const subdomain = getSubdomain(req);

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const { id } = await params;

		const res = await new DishService(tenant.databaseName).deleteDish(id);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}
