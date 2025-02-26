import { z } from "zod";

export const createDishSchema = z.object({
	name: z.string().min(3, "Nome do prato deve ter no mínimo 3 caracteres"),
	description: z.string().optional(),
	price: z.number().positive("Preço deve ser um valor positivo"),
	cost: z.number().positive("Custo deve ser um valor positivo"),
	category_id: z.string().uuid("ID da categoria inválido"),
});

export const updateDishSchema = z.object({
	name: z
		.string()
		.min(3, "Nome do prato deve ter no mínimo 3 caracteres")
		.optional(),
	description: z.string().optional(),
	price: z.number().positive("Preço deve ser um valor positivo").optional(),
	cost: z.number().positive("Custo deve ser um valor positivo").optional(),
	category_id: z.string().uuid("ID da categoria inválido").optional(),
});
