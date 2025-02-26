import { z } from "zod";

export const createPaymentSchema = z.object({
	bill_id: z.string().uuid("ID da comanda inválido"),
	amount: z.number().positive("Valor do pagamento deve ser positivo"),
	payment_method: z.enum(["cash", "card", "pix"]),
	status: z.enum(["pending", "paid"]),
});

export const updatePaymentSchema = z.object({
	bill_id: z.string().uuid("ID da comanda inválido").optional(),
	amount: z
		.number()
		.positive("Valor do pagamento deve ser positivo")
		.optional(),
	payment_method: z.enum(["cash", "card", "pix"]).optional(),
	status: z.enum(["pending", "paid"]).optional(),
});
