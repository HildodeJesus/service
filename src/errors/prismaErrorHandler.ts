/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from "@/utils/ApiResponse";

export class PrismaErrorHandler {
	/**
	 * Handles common Prisma errors and returns appropriate API responses
	 * @param error The caught error
	 * @param entityName The name of the entity being operated on (e.g., "prato", "produto")
	 * @returns ApiResponse with appropriate error message and status code
	 */
	static handle(error: any, entityName: string = "registro"): ApiResponse<any> {
		if (error && error.code) {
			// Unique constraint violation
			if (error.code === "P2002") {
				const target = (error.meta?.target as string[]) || [];
				const field = target.length > 0 ? target[0] : "campo";
				return ApiResponse.error(
					`Já existe um ${entityName} com este ${field}`,
					400
				);
			}

			// Foreign key constraint violation
			if (error.code === "P2003") {
				const field = error.meta?.field_name || "referência";
				return ApiResponse.error(
					`Um ou mais registros relacionados não existem (${field})`,
					400
				);
			}

			// Record not found
			if (error.code === "P2001" || error.code === "P2018") {
				return ApiResponse.error(
					`${
						entityName.charAt(0).toUpperCase() + entityName.slice(1)
					} não encontrado`,
					404
				);
			}

			// Required field constraint violation
			if (error.code === "P2011") {
				const field = error.meta?.constraint || "campo obrigatório";
				return ApiResponse.error(`O campo ${field} é obrigatório`, 400);
			}

			// Field value too long
			if (error.code === "P2000") {
				return ApiResponse.error(`Valor muito longo para um dos campos`, 400);
			}

			// Not-null constraint violation
			if (error.code === "P2012") {
				const field = error.meta?.path || "campo";
				return ApiResponse.error(`O campo ${field} não pode ser nulo`, 400);
			}

			// Invalid value provided
			if (error.code === "P2007") {
				return ApiResponse.error(
					`Valor inválido fornecido para um dos campos`,
					400
				);
			}
		}

		// Prisma validation error (check by name instead of instanceof)
		if (error && error.name === "PrismaClientValidationError") {
			return ApiResponse.error(`Erro de validação: ${error.message}`, 400);
		}

		// Prisma initialization error (check by name instead of instanceof)
		if (error && error.name === "PrismaClientInitializationError") {
			console.error("Database initialization error:", error);
			return ApiResponse.error("Erro ao conectar-se ao banco de dados", 500);
		}

		// If it's an unknown error
		console.error("Unhandled database error:", error);
		return ApiResponse.error("Erro interno do servidor", 500);
	}

	/**
	 * Handles errors specific to create operations
	 */
	static handleCreateError(error: any, entityName: string): ApiResponse<any> {
		if (error && error.code === "P2002") {
			return ApiResponse.error(`Já existe um ${entityName} com este nome`, 400);
		}
		return this.handle(error, entityName);
	}

	/**
	 * Handles errors specific to update operations
	 */
	static handleUpdateError(error: any, entityName: string): ApiResponse<any> {
		return this.handle(error, entityName);
	}

	/**
	 * Handles errors specific to delete operations
	 */
	static handleDeleteError(error: any, entityName: string): ApiResponse<any> {
		if (error && error.code === "P2003") {
			return ApiResponse.error(
				`Este ${entityName} não pode ser excluído pois está sendo usado em outros registros`,
				400
			);
		}
		return this.handle(error, entityName);
	}

	/**
	 * Handles errors specific to relation operations
	 */
	static handleRelationError(error: any, entityName: string): ApiResponse<any> {
		if (error && error.code === "P2025") {
			return ApiResponse.error(`Registro relacionado não encontrado`, 404);
		}
		return this.handle(error, entityName);
	}
}
