import { CreateProductInput } from "@/common/schemas/product";
import { PrismaClient } from "../../prisma/generated/tenant";
import { GetPrismaClient } from "@/utils/getPrismaClient";
import { ApiResponse } from "@/utils/ApiResponse";
import { IPagination } from "@/common/interfaces/Pagination";
import { PaginatedResponse } from "@/utils/PaginatedResponse";

export class ProductService {
	private prisma: PrismaClient;

	constructor(database: string) {
		this.prisma = GetPrismaClient.tenant(database);
	}

	async createProduct(data: CreateProductInput) {
		const alreadyExist = await this.getOneProductByName(data.name);

		if (alreadyExist.data)
			throw ApiResponse.error("Outro produto com o mesmo nome já existe", 400);

		const product = await this.prisma.product.create({
			data,
		});

		return ApiResponse.success("Criado com sucesso!", product, 201);
	}

	async getProducts(pagination: IPagination) {
		const productsQuery = this.prisma.product.findMany({
			orderBy: { createdAt: pagination.order },
			take: pagination.take,
			skip: (pagination.page - 1) * pagination.take,
			include: {
				_count: true,
			},
		});

		const productsCountQuery = this.prisma.product.count();

		const [products, productsCount] = await Promise.all([
			productsQuery,
			productsCountQuery,
		]);

		const totalPages = Math.floor(productsCount / pagination.take);

		const newPagination: IPagination = {
			...pagination,
			totalItems: productsCount,
			totalPages,
		};

		return new PaginatedResponse<typeof products>(
			"Criado com sucesso!",
			products,
			201,
			newPagination
		);
	}

	async getOneProductById(id: string) {
		const product = await this.prisma.product.findUnique({ where: { id } });

		if (!product) throw ApiResponse.error("Produto não existe", 400);

		return new ApiResponse<typeof product>("sucesso!", product, 200);
	}

	async getOneProductByName(name: string) {
		const product = await this.prisma.product.findFirst({
			where: { name: name },
		});

		if (!product) return ApiResponse.error("Produto não existe", 400);

		return new ApiResponse<typeof product>("sucesso!", product, 200);
	}

	async updateProduct(id: string, data: Partial<CreateProductInput>) {
		const alreadyExist = await this.getOneProductById(id);

		if (!alreadyExist.data) return ApiResponse.error("Produto não existe", 400);

		if (
			!Array.isArray(alreadyExist.data) &&
			data.name &&
			data.name !== alreadyExist.data.name
		) {
			const alreadyExistName = await this.getOneProductByName(data.name);

			if (alreadyExistName.data)
				throw ApiResponse.error("Outro produto com o mesmo nome já existe");
		}

		const product = await this.prisma.product.update({
			where: { id },
			data,
		});

		return ApiResponse.success("Criado com sucesso!", product, 201);
	}

	async deleteProduct(id: string) {
		const alreadyExist = await this.getOneProductById(id);
		if (!alreadyExist.data) return ApiResponse.error("Produto não existe", 400);

		await this.prisma.product.delete({ where: { id } });

		return ApiResponse.success("Deletado com sucesso!", null, 200);
	}
}
