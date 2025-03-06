/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetPrismaClient } from "@/utils/getPrismaClient";
import { PrismaClient } from "../../prisma/generated/tenant";
import { CreatePaymentInput } from "@/common/schemas/payment";
import { ApiResponse } from "@/utils/ApiResponse";
import { PrismaErrorHandler } from "@/errors/prismaErrorHandler";
import { IPagination } from "@/common/interfaces/Pagination";
import { PaginatedResponse } from "@/utils/PaginatedResponse";
import { PaymentStatus } from "@/common/constants/PaymentStatus";

export default class PaymentService {
	private prisma: PrismaClient;

	constructor(database: string) {
		this.prisma = GetPrismaClient.tenant(database);
	}

	async createPayment(data: CreatePaymentInput): Promise<ApiResponse<any>> {
		try {
			const existingPayment = await this.prisma.bill.findFirst({
				where: { id: data.billId },
			});

			if (!existingPayment) {
				return ApiResponse.error("Comanda não encontrada", 404);
			}

			const payment = await this.prisma.payment.create({
				data: {
					amount: data.amount,
					billId: data.billId,
					paymentMethod: data.payment_method,
					status: data.status,
				},
			});

			return ApiResponse.success("comanda criado com sucesso!", payment, 201);
		} catch (error) {
			return PrismaErrorHandler.handleCreateError(error, "comanda");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async getPayments(
		pagination: IPagination,
		status = PaymentStatus.PENDING
	): Promise<PaginatedResponse<any>> {
		try {
			const [payments, totalCount] = await Promise.all([
				this.prisma.payment.findMany({
					where: {
						status: status,
					},
					orderBy: {
						createdAt: pagination.order || "desc",
					},
					take: pagination.take,
					skip: (pagination.page - 1) * pagination.take,
				}),
				this.prisma.payment.count({
					where: {
						status: status,
					},
				}),
			]);

			const totalPages = Math.ceil(totalCount / pagination.take);

			return new PaginatedResponse("Payments encontrados", payments, 200, {
				...pagination,
				totalItems: totalCount,
				totalPages,
			});
		} catch (error) {
			console.error("Error fetching products:", error);
			throw PrismaErrorHandler.handle(error, "produto");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async getPaymentById(id: string): Promise<ApiResponse<any>> {
		try {
			const payment = await this.prisma.payment.findUnique({
				where: { id },
			});

			if (!payment) {
				return ApiResponse.error("pagamento não encontrado", 404);
			}

			return ApiResponse.success("pagamento encontrado", payment);
		} catch (error) {
			return PrismaErrorHandler.handle(error, "pagamento");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async updateStatus(
		id: string,
		status: PaymentStatus
	): Promise<ApiResponse<any>> {
		try {
			const existingPayment = await this.prisma.payment.findUnique({
				where: { id },
			});

			if (!existingPayment) {
				return ApiResponse.error("Pagamento não encontrado", 404);
			}

			const updatedpayment = await this.prisma.payment.update({
				where: { id },
				data: { status },
			});

			return ApiResponse.success(
				"Pagamento status atualizado com sucesso",
				updatedpayment
			);
		} catch (error) {
			return PrismaErrorHandler.handleUpdateError(error, "comanda");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async deletePayment(id: string): Promise<ApiResponse<any>> {
		try {
			const existingPayment = await this.prisma.payment.findUnique({
				where: { id },
			});

			if (!existingPayment) {
				return ApiResponse.error("comanda não encontrado", 404);
			}

			await this.prisma.payment.delete({
				where: { id },
			});

			return ApiResponse.success("comanda excluída com sucesso", null);
		} catch (error) {
			return PrismaErrorHandler.handleDeleteError(error, "comanda");
		} finally {
			await this.prisma.$disconnect();
		}
	}
}
