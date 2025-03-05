/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPagination } from "@/common/interfaces/Pagination";
import { PrismaErrorHandler } from "@/errors/prismaErrorHandler";
import { ApiResponse } from "@/utils/ApiResponse";
import { GetPrismaClient } from "@/utils/getPrismaClient";
import { PaginatedResponse } from "@/utils/PaginatedResponse";
import { PrismaClient } from "../../prisma/generated/tenant";
import { CreateClientInput } from "@/common/schemas/client";

export class ClientService {
	private prisma: PrismaClient;

	constructor(database: string) {
		this.prisma = GetPrismaClient.tenant(database);
	}

	async createClient(data: CreateClientInput) {
		try {
			const existingClient = await this.prisma.client.findUnique({
				where: { phone: data.phone },
			});

			if (existingClient) {
				return ApiResponse.error(
					"Cliente com este telefone já cadastrado",
					400
				);
			}

			const client = await this.prisma.client.create({
				data: {
					name: data.name,
					phone: data.phone,
				},
				include: {
					orders: false,
					bills: false,
				},
			});

			return ApiResponse.success("Cliente criado com sucesso", client);
		} catch (error: any) {
			return PrismaErrorHandler.handleCreateError(error, "cliente");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async getClients(pagination: IPagination, search: string | null) {
		try {
			const where = {
				...(search && {
					OR: [
						{
							name: {
								contains: search,
								mode: "insensitive" as const,
							},
						},
						{
							phone: {
								contains: search,
								mode: "insensitive" as const,
							},
						},
					],
				}),
			};

			const clientsQuery = this.prisma.client.findMany({
				where,
				include: {
					_count: {
						select: { orders: true, bills: true },
					},
				},
				orderBy: { name: pagination.order || "asc" },
				skip: (pagination.page - 1) * pagination.take,
				take: pagination.take,
			});

			const [clients, totalItems] = await Promise.all([
				clientsQuery,
				this.prisma.client.count({ where }),
			]);

			const newPagination: IPagination = {
				...pagination,
				totalItems,
				totalPages: Math.ceil(totalItems / pagination.take),
			};

			return PaginatedResponse.success(
				"Clientes listados com sucesso",
				clients,
				200,
				newPagination
			);
		} catch (error) {
			return PrismaErrorHandler.handle(error, "cliente");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async getClientById(id: string) {
		try {
			const client = await this.prisma.client.findUnique({
				where: { id },
				include: {
					orders: true,
					bills: true,
					_count: {
						select: { orders: true, bills: true },
					},
				},
			});

			if (!client) {
				return ApiResponse.error("Cliente não encontrado", 404);
			}

			return ApiResponse.success("Cliente encontrado com sucesso", client);
		} catch (error) {
			return PrismaErrorHandler.handle(error, "cliente");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async updateClient(id: string, data: CreateClientInput) {
		try {
			const clientExists = await this.prisma.client.findUnique({
				where: { id },
			});

			if (!clientExists) {
				return ApiResponse.error("Cliente não encontrado", 404);
			}

			const phoneConflict = await this.prisma.client.findFirst({
				where: {
					phone: data.phone,
					NOT: { id: id },
				},
			});

			if (phoneConflict) {
				return ApiResponse.error(
					"Telefone já cadastrado para outro cliente",
					400
				);
			}

			const client = await this.prisma.client.update({
				where: { id },
				data: {
					name: data.name,
					phone: data.phone,
				},
				include: {
					orders: false,
					bills: false,
				},
			});

			return ApiResponse.success("Cliente atualizado com sucesso", client);
		} catch (error: any) {
			return PrismaErrorHandler.handleUpdateError(error, "cliente");
		} finally {
			await this.prisma.$disconnect();
		}
	}

	async deleteClient(id: string) {
		try {
			const clientExists = await this.prisma.client.findUnique({
				where: { id },
			});

			if (!clientExists) {
				return ApiResponse.error("Cliente não encontrado", 404);
			}

			const orderCount = await this.prisma.order.count({
				where: { clientId: id },
			});

			const billCount = await this.prisma.bill.count({
				where: { clientId: id },
			});

			if (orderCount > 0 || billCount > 0) {
				return ApiResponse.error(
					"Este cliente não pode ser excluído pois possui pedidos ou contas vinculadas",
					400
				);
			}

			await this.prisma.client.delete({
				where: { id },
			});

			return ApiResponse.success("Cliente excluído com sucesso", null);
		} catch (error) {
			return PrismaErrorHandler.handleDeleteError(error, "cliente");
		} finally {
			await this.prisma.$disconnect();
		}
	}
}
