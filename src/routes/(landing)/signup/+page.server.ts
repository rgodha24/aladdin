import { z } from 'zod';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import { signUpSchema } from '$lib/schemas/auth';
import { setError, superValidate } from 'sveltekit-superforms/server';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, signUpSchema);

		if (!form.valid) return fail(400, { form });

		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'username',
					providerUserId: form.data.username,
					password: form.data.password
				},
				attributes: {
					username: form.data.username
				}
			});
			const session = await auth.createSession(user.id);
			locals.auth.setSession(session);
			return {
				form
			};
		} catch {
			return setError(form, 'username', 'Username already exists');
		}
	}
};

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, '/app');
	const form = await superValidate(signUpSchema);
	return { form };
};
