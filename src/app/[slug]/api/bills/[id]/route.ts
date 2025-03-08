import { CreateBillInput } from "@/common/schemas/bill";
import { handleApiError } from "@/errors/handleApiError";
import { BillService } from "@/services/bill.service";
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

		const res = await new BillService(tenant.databaseName).getBillById(id);

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
	const { id } = await params;

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const { status }: CreateBillInput = await req.json();

		const res = await new BillService(tenant.databaseName).updateBillStatus(
			id,
			{
				status,
			}
		);

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

	const { id } = await params;

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const res = await new BillService(tenant.databaseName).deleteOrder(id);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}
