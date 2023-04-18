import { z } from 'zod';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const form = Object.fromEntries(formData);
		const schema = z.object({
			username: z.string(),
			password: z.string().min(8).max(16).regex(/[a-z]/).regex(/[A-Z]/).regex(/[0-9]/)
		});

		const data = schema.safeParse(form);

		if (!data.success) {
			const formatted = data.error.format();
			return fail(400, {
				password: formatted.password?._errors,
				username: formatted.username?._errors,
				success: false
			});
		}

		try {
			const key = await auth.useKey('username', data.data.username, data.data.password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
		} catch (e) {
			// invalid credentials
			console.log('failed', e);
			return fail(400, {
				success: false,
				password: ['Invalid credentials'],
				username: ['Invalid credentials']
			});
		}

		return {
			success: true
		};
	}
};

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, '/');
};
