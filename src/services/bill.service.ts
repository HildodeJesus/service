/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPagination } from "@/common/interfaces/Pagination";
import { PrismaErrorHandler } from "@/errors/prismaErrorHandler";
import { ApiResponse } from "@/utils/ApiResponse";
import { GetPrismaClient } from "@/utils/getPrismaClient";
import { PaginatedResponse } from "@/utils/PaginatedResponse";
import { PrismaClient } from "../../prisma/generated/tenant";
import { CreateBillInput } from "@/common/schemas/bill";
import { BillStatus } from "@/common/constants/BillStatus";
import { IBillItem } from "@/common/interfaces/BillItem";

export class BillService {
	private prisma: PrismaClient;

	constructor(database: string) {
		this.prisma = GetPrismaClient.tenant(database);
	}

	async addItemsToBill(
		billId: string,
		data: {
			billItems: Array<IBillItem>;
			total: number;
		}
	) {
		try {
			const billExists = await this.prisma.bill.findUnique({
				where: { id: billId },
			});

			if (!billExists) {
				return ApiResponse.error("Comanda não encontrada", 404);
			}

			const updatedBill = await this.prisma.$transaction(async tx => {
				await Promise.all(
					data.billItems.map(item =>
						tx.billItem.create({
							data: {
								billId: billExists.id,
								orderId: item.orderId,
							},
						})
					)
				);

				const updated = await tx.bill.update({
					where: { id: billId },
					data: {
						total: Number(billExists.total) + data.total,
						updatedAt: new Date(),
					},
				});

				return updated;
			});

			return ApiResponse.success(
				"Itens adicionados à comanda com sucesso",
				updatedBill
			);
		} catch (error) {
			return PrismaErrorHandler.handleUpdateError(error, "comanda");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async createBill(data: CreateBillInput) {
		try {
			if (data.clientId) {
				const clientExists = await this.prisma.client.findUnique({
					where: { id: data.clientId },
				});

				if (!clientExists) {
					return ApiResponse.error("Cliente não encontrado", 404);
				}
			}

			if (!data.billItems || data.billItems.length === 0) {
				return ApiResponse.error("Nenhum item foi selecionado", 404);
			}

			const bill = await this.prisma.$transaction(async tx => {
				const createdBill = await tx.bill.create({
					data: {
						...(data.tableId && { tableId: data.tableId }),
						clientId: data.clientId,
						status: "open",
						total: data.total,
						billItems: {
							createMany: { data: data.billItems },
						},
					},
				});

				return createdBill;
			});

			return ApiResponse.success("Comanda criada com sucesso", bill);
		} catch (error) {
			return PrismaErrorHandler.handleCreateError(error, "Comanda");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async addOrderToBill(data: CreateBillInput) {
		try {
			console.log(data.clientId);
			const clientExists = await this.prisma.client.findUnique({
				where: { id: data.clientId },
			});

			console.log(clientExists);
			if (!clientExists) {
				return ApiResponse.error("Cliente não encontrado", 404);
			}

			if (!data.billItems || data.billItems.length === 0) {
				return ApiResponse.error("Nenhum item foi selecionado", 404);
			}

			let total = 0;
			const handleBillItems: any[] = [];

			for (const item of data.billItems) {
				const orderItems = await this.prisma.orderItem.findMany({
					where: { orderId: item.orderId },
					include: { dish: true },
				});

				total += orderItems.reduce<number>((acc, cur) => {
					return acc + cur.quantity * Number(cur.dish.price);
				}, 0);

				handleBillItems.push({
					orderId: item.orderId,
				});
			}

			const existingBill = await this.prisma.bill.findFirst({
				where: {
					clientId: data.clientId,
					status: "open",
				},
			});

			if (existingBill) {
				return await this.addItemsToBill(existingBill.id, {
					billItems: handleBillItems,
					total: total,
				});
			}

			return await this.createBill({
				...data,
				total: total,
				status: "open",
				billItems: handleBillItems,
			});
		} catch (error) {
			return PrismaErrorHandler.handleCreateError(error, "Comanda");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async getBills(
		pagination: IPagination,
		status?: BillStatus,
		tableId?: string | null,
		clientId?: string | null
	) {
		try {
			const where = {
				...(status && { status }),
				...(tableId && { tableId }),
				...(clientId && { clientId }),
			};

			const billsQuery = this.prisma.bill.findMany({
				where,
				include: {
					client: true,
					billItems: {
						include: {
							order: true,
						},
						omit: {
							createdAt: true,
							updatedAt: true,
							id: true,
							orderId: true,
							billId: true,
						},
					},
				},

				orderBy: { createdAt: pagination.order || "desc" },
				skip: (pagination.page - 1) * pagination.take,
				take: pagination.take,
			});

			const [bills, totalItems] = await Promise.all([
				billsQuery,
				this.prisma.bill.count({ where }),
			]);

			const newPagination: IPagination = {
				...pagination,
				totalItems,
				totalPages: Math.ceil(totalItems / pagination.take),
			};

			return PaginatedResponse.success(
				"Comandas listados com sucesso",
				bills,
				200,
				newPagination
			);
		} catch (error) {
			return PrismaErrorHandler.handle(error, "Comanda");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async getBillById(id: string) {
		try {
			const bill = await this.prisma.bill.findUnique({
				where: { id },
				include: {
					table: true,
					client: true,
					billItems: {
						omit: {
							createdAt: true,
							updatedAt: true,
							id: true,
							orderId: true,
							billId: true,
						},
						include: { order: true },
					},
				},
			});

			if (!bill) {
				return ApiResponse.error("Comanda não encontrado", 404);
			}

			return ApiResponse.success("Comanda encontrado com sucesso", bill);
		} catch (error) {
			return PrismaErrorHandler.handle(error, "Comanda");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async updateBillStatus(id: string, data: Partial<CreateBillInput>) {
		try {
			const billExists = await this.prisma.bill.findUnique({
				where: { id },
			});

			if (!billExists) {
				return ApiResponse.error("Pedido não encontrado", 404);
			}

			const updatedBill = await this.prisma.bill.update({
				where: { id },
				data: {
					status: data.status,
				},
				include: {
					table: true,
					client: true,
					billItems: {
						omit: {
							createdAt: true,
							updatedAt: true,
							id: true,
							orderId: true,
							billId: true,
						},
					},
				},
			});

			return ApiResponse.success(
				"Status da comanda atualizada com sucesso",
				updatedBill
			);
		} catch (error) {
			return PrismaErrorHandler.handleUpdateError(error, "pedido");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async deleteOrder(id: string) {
		try {
			const billExists = await this.prisma.bill.findUnique({
				where: { id },
			});

			if (!billExists) {
				return ApiResponse.error("Pedido não encontrado", 404);
			}

			await this.prisma.$transaction(async tx => {
				await tx.billItem.deleteMany({
					where: { billId: id },
				});

				await tx.bill.delete({
					where: { id },
				});
			});

			return ApiResponse.success("Pedido excluído com sucesso", null);
		} catch (error) {
			return PrismaErrorHandler.handleDeleteError(error, "pedido");
		} finally {
			await this.prisma.$disconnect();
		}
	}
}
