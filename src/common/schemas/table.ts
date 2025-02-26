import { z } from "zod";

export const createTableSchema = z.object({
	number: z
		.number()
		.int()
		.positive("Número da mesa deve ser um número positivo"),
});

export const updateTableSchema = z.object({
	number: z
		.number()
		.int()
		.positive("Número da mesa deve ser um número positivo")
		.optional(),
});
