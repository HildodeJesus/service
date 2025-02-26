import { z } from "zod";

export const createOrderSchema = z.object({
	table_id: z.string().uuid("ID da mesa inválido").optional(),
	client_id: z.string().uuid("ID do cliente inválido").optional(),
	order_type: z.enum(["dine-in", "takeout", "delivery"]),
	status: z.enum(["pending", "preparing", "delivered", "canceled"]),
});

export const updateOrderSchema = z.object({
	table_id: z.string().uuid("ID da mesa inválido").optional(),
	client_id: z.string().uuid("ID do cliente inválido").optional(),
	order_type: z.enum(["dine-in", "takeout", "delivery"]).optional(),
	status: z.enum(["pending", "preparing", "delivered", "canceled"]).optional(),
});
