import { z } from "zod";

export const createProductSchema = z.object({
	name: z.string().min(3, "Nome do produto deve ter no mínimo 3 caracteres"),
	quantity: z.number().positive("Quantidade deve ser um valor positivo"),
	minimumQuantity: z
		.number()
		.positive("Quantidade deve ser um valor positivo")
		.optional(),
	unit: z.enum(["unit", "kg", "liter"]),
	price: z.number().positive("Preço deve ser um valor positivo"),
});

export const updateProductSchema = z.object({
	name: z
		.string()
		.min(3, "Nome do produto deve ter no mínimo 3 caracteres")
		.optional(),
	quantity: z
		.number()
		.positive("Quantidade deve ser um valor positivo")
		.optional(),
	minimumQuantity: z
		.number()
		.positive("Quantidade deve ser um valor positivo")
		.optional(),
	unit: z.enum(["unit", "kg", "liter"]).optional(),
	price: z.number().positive("Preço deve ser um valor positivo").optional(),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
