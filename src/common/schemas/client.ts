import { z } from "zod";

export const createClientSchema = z.object({
	name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").optional(),
	phone: z.string().regex(/^\d{10,15}$/, "Telefone inválido"),
});

export const updateClientSchema = z.object({
	name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").optional(),
	phone: z
		.string()
		.regex(/^\d{10,15}$/, "Telefone inválido")
		.optional(),
});
