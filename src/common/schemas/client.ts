import { z } from "zod";

export const CreateClientSchema = z.object({
	name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").optional(),
	phone: z.string().regex(/^\d{10,15}$/, "Telefone inválido"),
});

export type CreateClientInput = z.infer<typeof CreateClientSchema>;
