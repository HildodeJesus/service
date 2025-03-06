import { OrderStatus } from "@/common/constants/OrderStatus";
import { CreateOrderInput } from "@/common/schemas/order";
import { handleApiError } from "@/errors/handleApiError";
import { OrderService } from "@/services/order.service";
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
			orderType,
			status,
			orderItems,
			tableId,
		}: CreateOrderInput = await req.json();

		const res = await new OrderService(tenant.databaseName).createOrder({
			clientId,
			orderType,
			status,
			orderItems,
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
	const status = searchParams.get("status");
	const tableId = searchParams.get("tableId");

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const pagination = Pagination.formated(order, Number(page), Number(take));

		const res = await new OrderService(tenant.databaseName).getOrders(
			pagination,
			status as OrderStatus,
			tableId
		);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}
