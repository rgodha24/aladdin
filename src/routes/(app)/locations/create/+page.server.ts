import type { Actions } from './$types';
import { prisma } from '$lib/server/db';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { locationSchema } from '$lib/schemas/locationSchema';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(307, '/login');

	const form = await superValidate(locationSchema);

	return {
		form
	};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const { user } = await locals.auth.validateUser();
		if (!user) throw redirect(307, '/login');

		const form = await superValidate(request, locationSchema);

		if (!form.valid) {
			return fail(400, { form });
		}

		const res = await prisma.location.create({
			data: {
				...form.data,
				users: {
					connect: { id: user.id }
				}
			}
		});

		return {
			form
		};
	}
};
