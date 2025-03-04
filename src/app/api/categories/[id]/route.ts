import { CreateCategoryInput } from "@/common/schemas/category";
import { handleApiError } from "@/errors/handleApiError";
import { CategoryService } from "@/services/category.service";
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

		const res = await new CategoryService(tenant.databaseName).getCategoryById(
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

		const { name }: CreateCategoryInput = await req.json();

		const res = await new CategoryService(tenant.databaseName).updateCategory(
			params.id,
			{
				name,
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

		const res = await new CategoryService(tenant.databaseName).deleteCategory(
			params.id
		);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}
