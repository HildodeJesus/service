import { z } from "zod";

export const CreateCategorySchema = z.object({
	name: z.string().min(3, "Nome da categoria deve ter no mínimo 3 caracteres"),
});

export type CreateCategoryInput = z.infer<typeof CreateCategorySchema>;
