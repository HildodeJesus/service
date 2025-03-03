/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPagination } from "@/common/interfaces/Pagination";
import { CreateDishInput } from "@/common/schemas/dish";
import { PrismaErrorHandler } from "@/errors/prismaErrorHandler";
import { ApiResponse } from "@/utils/ApiResponse";
import { GetPrismaClient } from "@/utils/getPrismaClient";
import { PaginatedResponse } from "@/utils/PaginatedResponse";
import { PrismaClient } from "@prisma/client";

export class DishService {
	private prisma: PrismaClient;

	constructor(database: string) {
		this.prisma = GetPrismaClient.tenant(database);
	}

	async createDish(data: CreateDishInput) {
		try {
			const categoryExists = await this.prisma.category.findUnique({
				where: { id: data.categoryId },
			});

			if (!categoryExists) {
				return ApiResponse.error("Categoria não encontrada", 404);
			}

			const dish = await this.prisma.dish.create({
				data: {
					name: data.name,
					description: data.description,
					price: data.price,
					cost: data.cost,
					categoryId: data.categoryId,
					dishItems: {
						create: data.dishItems.map((item: any) => ({
							productId: item.productId,
							quantity: item.quantity,
						})),
					},
				},
				include: {
					category: true,
					dishItems: {
						include: {
							product: true,
						},
					},
				},
			});

			return ApiResponse.success("Prato criado com sucesso", dish);
		} catch (error: any) {
			return PrismaErrorHandler.handleCreateError(error, "prato");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async getDishes(pagination: IPagination, search: string | null) {
		try {
			const where = {
				...(search && {
					name: {
						contains: search,
						mode: "insensitive" as const,
					},
				}),
			};

			const dishesQuery = this.prisma.dish.findMany({
				where,
				include: {
					category: true,
					dishItems: {
						include: {
							product: true,
						},
					},
				},
				order: { name: pagination.order || "asc" },
				skip: (pagination.page - 1) * pagination.take,
				take: pagination.take,
			});

			const [dishes, totalItems] = await Promise.all([
				dishesQuery,
				this.prisma.dish.count({ where }),
			]);

			const newPagination: IPagination = {
				...pagination,
				totalItems,
				totalPages: Math.ceil(totalItems / pagination.take),
			};

			return PaginatedResponse.success(
				"Pratos listados com sucesso",
				{
					data: dishes,
				},
				200,
				newPagination
			);
		} catch (error) {
			return PrismaErrorHandler.handle(error, "prato");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async getDishById(id: string) {
		try {
			const dish = await this.prisma.dish.findUnique({
				where: { id },
				include: {
					category: true,
					dishItems: {
						include: {
							product: true,
						},
					},
				},
			});

			if (!dish) {
				return ApiResponse.error("Prato não encontrado", 404);
			}

			return ApiResponse.success("Prato encontrado com sucesso", dish);
		} catch (error) {
			return PrismaErrorHandler.handle(error, "prato");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async updateDish(id: string, data: CreateDishInput) {
		try {
			const dishExists = await this.prisma.dish.findUnique({
				where: { id },
			});

			if (!dishExists) {
				return ApiResponse.error("Prato não encontrado", 404);
			}

			const categoryExists = await this.prisma.category.findUnique({
				where: { id: data.categoryId },
			});

			if (!categoryExists) {
				return ApiResponse.error("Categoria não encontrada", 404);
			}

			const dish = await this.prisma.$transaction(async (tx: any) => {
				await tx.dishItem.deleteMany({
					where: { dishId: id },
				});

				return tx.dish.update({
					where: { id },
					data: {
						name: data.name,
						description: data.description,
						price: data.price,
						cost: data.cost,
						categoryId: data.categoryId,
						dishItems: {
							create: data.dishItems.map((item: any) => ({
								productId: item.productId,
								quantity: item.quantity,
							})),
						},
					},
					include: {
						category: true,
						dishItems: {
							include: {
								product: true,
							},
						},
					},
				});
			});

			return ApiResponse.success("Prato atualizado com sucesso", dish);
		} catch (error: any) {
			return PrismaErrorHandler.handleUpdateError(error, "prato");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async deleteDish(id: string) {
		try {
			const dishExists = await this.prisma.dish.findUnique({
				where: { id },
			});

			if (!dishExists) {
				return ApiResponse.error("Prato não encontrado", 404);
			}

			const orderItemCount = await this.prisma.orderItem.count({
				where: { dishId: id },
			});

			if (orderItemCount > 0) {
				return ApiResponse.error(
					"Este prato não pode ser excluído pois está sendo usado em pedidos",
					400
				);
			}

			await this.prisma.$transaction(async (tx: any) => {
				await tx.dishItem.deleteMany({
					where: { dishId: id },
				});

				await tx.dish.delete({
					where: { id },
				});
			});

			return ApiResponse.success("Prato excluído com sucesso", null);
		} catch (error) {
			return PrismaErrorHandler.handleDeleteError(error, "prato");
		} finally {
			await this.prisma.$disconnect();
		}
	}
}
