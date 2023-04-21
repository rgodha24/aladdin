import { z } from 'zod';

export const locationSchema = z.object({
	name: z.string().min(2)
});
