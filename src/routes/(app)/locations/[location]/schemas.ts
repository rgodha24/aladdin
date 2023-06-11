import { z } from 'zod';

export const newItemSchema = z.object({
	name: z.string().min(1).max(25),
	imgUrl: z.string().url(),
	tags: z.string().toLowerCase().array().default([]),
	price: z.coerce.number().min(0).positive().step(0.01),
	barcode: z.coerce.number()
});
