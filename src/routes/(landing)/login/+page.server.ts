import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import { signInSchema } from '$lib/schemas/auth';
import { superValidate, setError } from 'sveltekit-superforms/server';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, signInSchema);

		if (!form.valid) return fail(400, { form });

		try {
			const key = await auth.useKey('username', form.data.username, form.data.password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
		} catch (e) {
			setError(form, 'username', 'Invalid username or password');
			return setError(form, 'password', 'Invalid username or password');
		}

		return {
			form
		};
	}
};

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, '/app');

	const signInForm = await superValidate(signInSchema);

	return {
		signInForm
	};
};
