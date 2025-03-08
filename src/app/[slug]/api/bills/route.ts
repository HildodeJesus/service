import { BillStatus } from "@/common/constants/BillStatus";
import { CreateBillInput } from "@/common/schemas/bill";
import { handleApiError } from "@/errors/handleApiError";
import { BillService } from "@/services/bill.service";
import { TenantDatabaseService } from "@/services/tenant.service";
import { getSubdomain } from "@/utils/getSubdomain";
import { Pagination } from "@/utils/Pagination";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const subdomain = getSubdomain(req);
	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const {
			clientId,
			status = "open",
			total,
			billItems,
			tableId,
		}: CreateBillInput = await req.json();

		const res = await new BillService(tenant.databaseName).createBill({
			clientId,
			status,
			total,
			billItems,
			tableId,
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
	const clientId = searchParams.get("clientId");
	const status = searchParams.get("status");
	const tableId = searchParams.get("tableId");

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const pagination = Pagination.formated(order, Number(page), Number(take));

		const res = await new BillService(tenant.databaseName).getBills(
			pagination,
			status as BillStatus,
			tableId,
			clientId
		);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}
