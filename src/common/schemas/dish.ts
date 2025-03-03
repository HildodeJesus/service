import { z } from "zod";

export const DishItemSchema = z.object({
	productId: z.string().uuid(),
	quantity: z.number().positive(),
});

export const CreateDishSchema = z.object({
	name: z.string().min(1, "O nome é obrigatório"),
	description: z.string().optional(),
	price: z.number().positive("O preço deve ser maior que 0"),
	picture: z.string().optional(),
	cost: z.number().positive("O custo deve ser maior que 0"),
	categoryId: z.string().uuid("ID de categoria inválido"),
	dishItems: z.array(DishItemSchema),
});

export type CreateDishInput = z.infer<typeof CreateDishSchema>;
export type DishItemInput = z.infer<typeof DishItemSchema>;
