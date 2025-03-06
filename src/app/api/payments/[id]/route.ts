import { PaymentStatus } from "@/common/constants/PaymentStatus";
import { CreatePaymentInput } from "@/common/schemas/payment";
import { handleApiError } from "@/errors/handleApiError";
import PaymentService from "@/services/payment.service";
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

		const res = await new PaymentService(tenant.databaseName).getPaymentById(
			id
		);

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

		const { status }: CreatePaymentInput = await req.json();

		const res = await new PaymentService(tenant.databaseName).updateStatus(
			id,
			status as PaymentStatus
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

		const res = await new PaymentService(tenant.databaseName).deletePayment(id);

		return NextResponse.json(res, { status: res.statusCode });
	} catch (error) {
		return handleApiError(error);
	}
}
