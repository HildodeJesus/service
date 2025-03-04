/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPagination } from "@/common/interfaces/Pagination";
import { CreateCategoryInput } from "@/common/schemas/category";
import { PrismaErrorHandler } from "@/errors/prismaErrorHandler";
import { ApiResponse } from "@/utils/ApiResponse";
import { GetPrismaClient } from "@/utils/getPrismaClient";
import { PaginatedResponse } from "@/utils/PaginatedResponse";
import { PrismaClient } from "../../prisma/generated/tenant";

export class CategoryService {
	private prisma: PrismaClient;

	constructor(database: string) {
		this.prisma = GetPrismaClient.tenant(database);
	}

	async createCategory(data: CreateCategoryInput) {
		try {
			const categoryExists = await this.prisma.category.findUnique({
				where: { name: data.name },
			});

			if (categoryExists) {
				return ApiResponse.error("Categoria com mesmo nome já existe", 400);
			}

			const category = await this.prisma.category.create({
				data: {
					name: data.name,
				},
			});

			return ApiResponse.success("Categoria criado com sucesso", category);
		} catch (error: any) {
			return PrismaErrorHandler.handleCreateError(error, "categoria");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async getCategories(pagination: IPagination, search: string | null) {
		try {
			const where = {
				...(search && {
					name: {
						contains: search,
						mode: "insensitive" as const,
					},
				}),
			};

			const categoriesQuery = this.prisma.category.findMany({
				where,
				orderBy: { name: pagination.order || "asc" },
				skip: (pagination.page - 1) * pagination.take,
				take: pagination.take,
			});

			const [categories, totalItems] = await Promise.all([
				categoriesQuery,
				this.prisma.category.count({ where }),
			]);

			const newPagination: IPagination = {
				...pagination,
				totalItems,
				totalPages: Math.ceil(totalItems / pagination.take),
			};

			return PaginatedResponse.success(
				"Categorias listados com sucesso",
				categories,
				200,
				newPagination
			);
		} catch (error) {
			return PrismaErrorHandler.handle(error, "categorias");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async getCategoryById(id: string) {
		try {
			const category = await this.prisma.category.findUnique({
				where: { id },
				include: {
					dishes: true,
				},
			});

			if (!category) {
				return ApiResponse.error(
					"Categoria não encontrada não encontrado",
					404
				);
			}

			return ApiResponse.success("Categoria encontrado com sucesso", category);
		} catch (error) {
			return PrismaErrorHandler.handle(error, "categoria");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async updateCategory(id: string, data: CreateCategoryInput) {
		try {
			const categoryExists = await this.prisma.category.findUnique({
				where: { id },
			});

			if (!categoryExists) {
				return ApiResponse.error("categoria não encontrado", 404);
			}

			const category = await this.prisma.$transaction(async (tx: any) => {
				return tx.category.update({
					where: { id },
					data: {
						name: data.name,
					},
				});
			});

			return ApiResponse.success("categoria atualizado com sucesso", category);
		} catch (error: any) {
			return PrismaErrorHandler.handleUpdateError(error, "categoria");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async deleteCategory(id: string) {
		try {
			const dishExists = await this.prisma.category.findUnique({
				where: { id },
			});

			if (!dishExists) {
				return ApiResponse.error("categoria não encontrado", 404);
			}

			await this.prisma.$transaction(async (tx: any) => {
				await tx.category.delete({
					where: { id },
				});
			});

			return ApiResponse.success("categoria excluído com sucesso", null);
		} catch (error) {
			return PrismaErrorHandler.handleDeleteError(error, "categoria");
		} finally {
			await this.prisma.$disconnect();
		}
	}
}
