import { CreateDishInput } from "@/common/schemas/dish";
import { handleApiError } from "@/errors/handleApiError";
import { DishService } from "@/services/dish.service";
import { TenantDatabaseService } from "@/services/tenant.service";
import { getSubdomain } from "@/utils/getSubdomain";
import { Pagination } from "@/utils/Pagination";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
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

		const res = await new DishService(tenant.databaseName).createDish({
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

export async function GET(req: NextRequest) {
	const subdomain = getSubdomain(req);
	const searchParams = req.nextUrl.searchParams;

	const order = searchParams.get("order");
	const page = searchParams.get("page");
	const take = searchParams.get("take");
	const search = searchParams.get("search");

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const res = await new DishService(tenant.databaseName).getDishes(
			Pagination.formated(order, Number(page), Number(take)),
			search
		);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}
