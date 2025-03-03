/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateProductInput } from "@/common/schemas/product";
import { PrismaClient } from "../../prisma/generated/tenant";
import { GetPrismaClient } from "@/utils/getPrismaClient";
import { ApiResponse } from "@/utils/ApiResponse";
import { IPagination } from "@/common/interfaces/Pagination";
import { PaginatedResponse } from "@/utils/PaginatedResponse";
import { PrismaErrorHandler } from "@/errors/prismaErrorHandler";

export class ProductService {
	private prisma: PrismaClient;

	constructor(database: string) {
		this.prisma = GetPrismaClient.tenant(database);
	}

	async createProduct(data: CreateProductInput): Promise<ApiResponse<any>> {
		try {
			const existingProduct = await this.prisma.product.findFirst({
				where: { name: data.name },
			});

			if (existingProduct) {
				return ApiResponse.error(
					"Outro produto com o mesmo nome já existe",
					400
				);
			}

			const product = await this.prisma.product.create({
				data,
			});

			return ApiResponse.success("Produto criado com sucesso!", product, 201);
		} catch (error) {
			return PrismaErrorHandler.handleCreateError(error, "produto");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async getProducts(
		pagination: IPagination,
		search: string | null
	): Promise<PaginatedResponse<any>> {
		try {
			const whereClause = search
				? {
						name: {
							contains: search,
							mode: "insensitive" as const,
						},
				  }
				: undefined;

			const [products, totalCount] = await Promise.all([
				this.prisma.product.findMany({
					where: whereClause,
					orderBy: {
						createdAt: pagination.order || "desc",
					},
					take: pagination.take,
					skip: (pagination.page - 1) * pagination.take,
				}),
				this.prisma.product.count({
					where: whereClause,
				}),
			]);

			const totalPages = Math.ceil(totalCount / pagination.take);

			return new PaginatedResponse("Produtos encontrados", products, 200, {
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

	async getProductById(id: string): Promise<ApiResponse<any>> {
		try {
			const product = await this.prisma.product.findUnique({
				where: { id },
			});

			if (!product) {
				return ApiResponse.error("Produto não encontrado", 404);
			}

			return ApiResponse.success("Produto encontrado", product);
		} catch (error) {
			return PrismaErrorHandler.handle(error, "produto");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async updateProduct(
		id: string,
		data: Partial<CreateProductInput>
	): Promise<ApiResponse<any>> {
		try {
			const existingProduct = await this.prisma.product.findUnique({
				where: { id },
			});

			if (!existingProduct) {
				return ApiResponse.error("Produto não encontrado", 404);
			}

			if (data.name && data.name !== existingProduct.name) {
				const nameConflict = await this.prisma.product.findFirst({
					where: {
						name: data.name,
						id: { not: id },
					},
				});

				if (nameConflict) {
					return ApiResponse.error(
						"Outro produto com o mesmo nome já existe",
						400
					);
				}
			}

			const updatedProduct = await this.prisma.product.update({
				where: { id },
				data,
			});

			return ApiResponse.success(
				"Produto atualizado com sucesso",
				updatedProduct
			);
		} catch (error) {
			return PrismaErrorHandler.handleUpdateError(error, "produto");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async deleteProduct(id: string): Promise<ApiResponse<any>> {
		try {
			const existingProduct = await this.prisma.product.findUnique({
				where: { id },
			});

			if (!existingProduct) {
				return ApiResponse.error("Produto não encontrado", 404);
			}

			const usedInDish = await this.prisma.dishItem.findFirst({
				where: { productId: id },
			});

			if (usedInDish) {
				return ApiResponse.error(
					"Este produto não pode ser excluído pois está sendo usado em pratos",
					400
				);
			}

			await this.prisma.product.delete({
				where: { id },
			});

			return ApiResponse.success("Produto excluído com sucesso", null);
		} catch (error) {
			return PrismaErrorHandler.handleDeleteError(error, "produto");
		} finally {
			await this.prisma.$disconnect();
		}
	}
}
