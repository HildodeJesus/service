import { PaymentStatus } from "@/common/constants/PaymentStatus";
import { CreatePaymentInput } from "@/common/schemas/payment";
import { handleApiError } from "@/errors/handleApiError";
import PaymentService from "@/services/payment.service";
import { TenantDatabaseService } from "@/services/tenant.service";
import { getSubdomain } from "@/utils/getSubdomain";
import { Pagination } from "@/utils/Pagination";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const subdomain = getSubdomain(req);
	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const { amount, billId, paymentMethod, status }: CreatePaymentInput =
			await req.json();

		const res = await new PaymentService(tenant.databaseName).createPayment({
			amount,
			billId,
			paymentMethod,
			status,
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

	try {
		const tenant = await TenantDatabaseService.getTenantBySubdomain(subdomain);

		const pagination = Pagination.formated(order, Number(page), Number(take));

		const res = await new PaymentService(tenant.databaseName).getPayments(
			pagination,
			status as PaymentStatus
		);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}
