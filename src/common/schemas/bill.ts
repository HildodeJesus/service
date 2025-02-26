import { z } from "zod";

export const createBillSchema = z.object({
	table_id: z.string().uuid("ID da mesa inválido"),
	client_id: z.string().uuid("ID do cliente inválido").optional(),
	status: z.enum(["open", "closed"]),
	total: z.number().positive("Total deve ser um valor positivo"),
});

export const updateBillSchema = z.object({
	table_id: z.string().uuid("ID da mesa inválido").optional(),
	client_id: z.string().uuid("ID do cliente inválido").optional(),
	status: z.enum(["open", "closed"]).optional(),
	total: z.number().positive("Total deve ser um valor positivo").optional(),
});
