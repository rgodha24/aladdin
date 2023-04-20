import { z } from 'zod';

export const username = z.string().email();
export const password = z.string().min(8).max(16);

export const signInSchema = z.object({
	username,
	password
});

export const signUpSchema = z
	.object({
		username,
		password,
		passwordConfirm: password
	})
	.refine((data) => data.password === data.passwordConfirm, {
		message: 'Passwords do not match',
		path: ['passwordConfirm']
	});
