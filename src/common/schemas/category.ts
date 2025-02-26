import { z } from "zod";

export const createCategorySchema = z.object({
	name: z.string().min(3, "Nome da categoria deve ter no mínimo 3 caracteres"),
});

export const updateCategorySchema = z.object({
	name: z
		.string()
		.min(3, "Nome da categoria deve ter no mínimo 3 caracteres")
		.optional(),
});
