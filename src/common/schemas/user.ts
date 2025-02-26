import { z } from "zod";

export const createUserSchema = z.object({
	name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
	email: z.string().email("Email inválido"),
	password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
	role: z.enum(["admin", "waiter", "kitchen"]),
});

export const updateUserSchema = z.object({
	name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").optional(),
	email: z.string().email("Email inválido").optional(),
	password: z
		.string()
		.min(6, "Senha deve ter no mínimo 6 caracteres")
		.optional(),
	role: z.enum(["admin", "waiter", "kitchen"]).optional(),
});
