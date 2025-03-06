import { z } from "zod";

export const createPaymentSchema = z.object({
	billId: z.string().uuid("ID da comanda inválido"),
	amount: z.number().positive("Valor do pagamento deve ser positivo"),
	paymentMethod: z.enum(["cash", "card", "pix"]),
	status: z.enum(["pending", "paid"]),
});

export type CreatePaymentInput = z.infer<typeof createPaymentSchema>;
