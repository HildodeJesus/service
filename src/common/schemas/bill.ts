import { z } from "zod";

export const CreateBillItemSchema = z.object({
	billId: z.string().uuid("ID da mesa inválido").optional(),
	orderId: z.string().uuid("ID da order inválido"),
});

export const CreateBillSchema = z.object({
	tableId: z.string().uuid("ID da mesa inválido").optional(),
	clientId: z.string().uuid("ID do cliente inválido"),
	status: z.enum(["open", "closed"]),
	total: z.number().positive("Total deve ser um valor positivo"),
	billItems: z.array(CreateBillItemSchema).optional(),
});

export type CreateBillInput = z.infer<typeof CreateBillSchema>;
