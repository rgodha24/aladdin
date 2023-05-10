import { z } from 'zod';

export const newItemSchema = z.object({
	name: z.string().min(1).max(25),
	imgUrl: z.string().url(),
	tags: z.string().toLowerCase().array().default([]),
	barcode: z.coerce.bigint()
});
