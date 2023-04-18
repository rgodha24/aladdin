import { z } from 'zod';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formdata = Object.fromEntries(await request.formData());

		const schema = z
			.object({
				username: z.string(),
				password: z.string().min(8).max(16).regex(/[a-z]/).regex(/[A-Z]/).regex(/[0-9]/),
				passwordConfirm: z.string()
			})
			.refine(
				(data) => data.password === data.passwordConfirm,
				'password and password confrim dont match'
			);

		const { username, password } = schema.parse(formdata);

		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'username',
					providerUserId: username,
					password
				},
				attributes: {
					username
				}
			});
			const session = await auth.createSession(user.id);
			locals.auth.setSession(session);
			return {
				success: true
			};
		} catch {
			return fail(400, { usernameTaken: true });
		}
	}
};

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, '/');
	return {};
};
