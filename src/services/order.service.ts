/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPagination } from "@/common/interfaces/Pagination";
import { CreateOrderInput } from "@/common/schemas/order";
import { PrismaErrorHandler } from "@/errors/prismaErrorHandler";
import { ApiResponse } from "@/utils/ApiResponse";
import { GetPrismaClient } from "@/utils/getPrismaClient";
import { PaginatedResponse } from "@/utils/PaginatedResponse";
import { PrismaClient } from "../../prisma/generated/tenant";
import { OrderStatus } from "@/common/constants/OrderStatus";
import { BillService } from "./bill.service";

export class OrderService {
	private prisma: PrismaClient;
	private database: string;

	constructor(database: string) {
		this.database = database;
		this.prisma = GetPrismaClient.tenant(database);
	}

	async createOrder(data: CreateOrderInput) {
		try {
			if (data.tableId) {
				const tableExists = await this.prisma.table.findUnique({
					where: { id: data.tableId },
				});

				if (!tableExists) {
					return ApiResponse.error("Mesa não encontrada", 404);
				}
			}
			if (data.clientId) {
				const tableExists = await this.prisma.client.findUnique({
					where: { id: data.clientId },
				});

				if (!tableExists) {
					return ApiResponse.error("Cliente não encontrado", 404);
				}
			}

			if (!data.orderItems) {
				return ApiResponse.error("Nenhum prato foi selecionado", 404);
			}

			const invalidDishes = await Promise.all(
				data.orderItems.map(async item => {
					const dishExists = await this.prisma.dish.findUnique({
						where: { id: item.dishId },
					});
					return dishExists ? null : item.dishId;
				})
			);

			const missingDishes = invalidDishes.filter((dish: any) => dish !== null);

			if (missingDishes.length > 0) {
				return ApiResponse.error(
					`Pratos não encontrados: ${missingDishes.join(", ")}`,
					404
				);
			}

			const order = await this.prisma.$transaction(async tx => {
				const createdOrder = await tx.order.create({
					data: {
						tableId: data.tableId,
						clientId: data.clientId,
						status: OrderStatus.PENDING,
						...(data.orderItems && {
							orderItems: {
								create: data.orderItems.map(item => ({
									dishId: item.dishId,
									quantity: item.quantity,
								})),
							},
						}),
					},
					include: {
						table: true,
						client: true,
						orderItems: {
							omit: {
								createdAt: true,
								updatedAt: true,
								dishId: true,
								id: true,
								orderId: true,
							},
							include: {
								dish: true,
							},
						},
					},
				});

				return createdOrder;
			});

			return ApiResponse.success("Pedido criado com sucesso", order);
		} catch (error: any) {
			return PrismaErrorHandler.handleCreateError(error, "pedido");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async getOrders(
		pagination: IPagination,
		status?: OrderStatus,
		tableId?: string | null
	) {
		try {
			console.log(status);
			const where = {
				...(status && { status }),
				...(tableId && { tableId }),
			};

			console.log(where);

			const ordersQuery = this.prisma.order.findMany({
				where,
				include: {
					table: true,
					client: true,
					orderItems: {
						include: {
							dish: true,
						},
						omit: {
							updatedAt: true,
							dishId: true,
							id: true,
							orderId: true,
						},
					},
				},

				orderBy: { createdAt: pagination.order || "desc" },
				skip: (pagination.page - 1) * pagination.take,
				take: pagination.take,
			});

			const [orders, totalItems] = await Promise.all([
				ordersQuery,
				this.prisma.order.count({ where }),
			]);

			const newPagination: IPagination = {
				...pagination,
				totalItems,
				totalPages: Math.ceil(totalItems / pagination.take),
			};

			return PaginatedResponse.success(
				"Pedidos listados com sucesso",
				orders,
				200,
				newPagination
			);
		} catch (error) {
			return PrismaErrorHandler.handle(error, "pedido");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async getOrderById(id: string) {
		try {
			const order = await this.prisma.order.findUnique({
				where: { id },
				include: {
					table: true,
					client: true,
					orderItems: {
						include: {
							dish: true,
						},
						omit: {
							createdAt: true,
							updatedAt: true,
							dishId: true,
							id: true,
							orderId: true,
						},
					},
				},
			});

			if (!order) {
				return ApiResponse.error("Pedido não encontrado", 404);
			}

			return ApiResponse.success("Pedido encontrado com sucesso", order);
		} catch (error) {
			return PrismaErrorHandler.handle(error, "pedido");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async updateOrderStatus(id: string, data: Partial<CreateOrderInput>) {
		try {
			const orderExists = await this.prisma.order.findUnique({
				where: { id },
			});

			if (!orderExists) {
				return ApiResponse.error("Pedido não encontrado", 404);
			}

			const updatedOrder = await this.prisma.order.update({
				where: { id },
				data: {
					status: data.status,
					...(data.clientId && { clientId: data.clientId }),
				},
				include: {
					table: true,
					client: true,
					orderItems: {
						include: {
							dish: true,
						},
						omit: {
							createdAt: true,
							updatedAt: true,
							dishId: true,
							id: true,
							orderId: true,
						},
					},
				},
			});

			if (data.status === "preparing") {
				await new BillService(this.database).addOrderToBill({
					clientId: orderExists.clientId as string,
					status: "open",
					billItems: [{ orderId: orderExists.id }],
					total: 0,
				});
			}

			return ApiResponse.success(
				"Status do pedido atualizado com sucesso",
				updatedOrder
			);
		} catch (error) {
			return PrismaErrorHandler.handleUpdateError(error, "pedido");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async deleteOrder(id: string) {
		try {
			const orderExists = await this.prisma.order.findUnique({
				where: { id },
			});

			if (!orderExists) {
				return ApiResponse.error("Pedido não encontrado", 404);
			}

			if (orderExists.status !== OrderStatus.PENDING) {
				return ApiResponse.error(
					"Apenas pedidos em aberto podem ser excluídos",
					400
				);
			}

			await this.prisma.$transaction(async tx => {
				await tx.orderItem.deleteMany({
					where: { orderId: id },
				});

				await tx.order.delete({
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
