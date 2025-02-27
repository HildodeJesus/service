import { z } from "zod";

export const createCompanySchema = z.object({
	email: z.string().email("Email inválido"),
	name: z.string().min(1),
	password: z.string().min(6),
	stripeCustomerId: z.string().optional(),
	subscriptionStatus: z
		.enum(["active", "inactive", "trial", "canceled"])
		.default("inactive")
		.optional(),
});

export const loginCompanySchema = z.object({
	email: z.string().email("Email inválido"),
	password: z.string().min(6),
});

export const updateCompanySchema = z.object({
	email: z.string().email("Email inválido").optional(),
	name: z.string().min(1).optional(),
	password: z.string().min(6).optional(),
	stripeCustomerId: z.string().optional(),
	subscriptionStatus: z
		.enum(["active", "inactive", "trial", "canceled"])
		.default("inactive"),
});

export type CreateCompanyInput = z.infer<typeof createCompanySchema>;
export type LoginCompanyInput = z.infer<typeof loginCompanySchema>;
