import { CreateCategoryInput } from "@/common/schemas/category";
import { handleApiError } from "@/errors/handleApiError";
import { CategoryService } from "@/services/category.service";
import { TenantDatabaseService } from "@/services/tenant.service";
import { getSubdomain } from "@/utils/getSubdomain";
import { Pagination } from "@/utils/Pagination";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const subdomain = getSubdomain(req);
	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const { name }: CreateCategoryInput = await req.json();

		const res = await new CategoryService(tenant.databaseName).createCategory({
			name,
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

		const pagination = Pagination.formated(order, Number(page), Number(take));

		const res = await new CategoryService(tenant.databaseName).getCategories(
			pagination,
			search
		);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}
