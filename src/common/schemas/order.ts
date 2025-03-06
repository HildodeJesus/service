import { z } from "zod";

export const CreateOrderItemSchema = z.object({
	orderId: z.string().uuid().optional(),
	dishId: z.string().uuid(),
	quantity: z.number().positive("Quantidade deve ser uma valor maior que zero"),
});

export const CreateOrderSchema = z.object({
	tableId: z.string().uuid("ID da mesa inválido").optional(),
	clientId: z.string().uuid("ID do cliente inválido").optional(),
	orderType: z.enum(["dine-in", "takeout", "delivery"]),
	status: z.enum(["pending", "preparing", "delivered", "canceled"]),
	orderItems: z.array(CreateOrderItemSchema).optional(),
});

export type CreateOrderInput = z.infer<typeof CreateOrderSchema>;
