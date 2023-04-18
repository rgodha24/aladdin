import type { Actions } from './$types';
import { locationSchema } from './locationSchema';
import { prisma } from '$lib/server/db';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(307, '/login');
	return {
		user
	};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		console.log('create location');
		const { user } = await locals.auth.validateUser();
		if (!user) throw redirect(307, '/login');
		const formdata = Object.fromEntries(await request.formData());
		const location = locationSchema.safeParse(formdata);

		if (!location.success)
			return fail(400, {
				name: location.error.message,
				success: false
			});

		const res = await prisma.location.create({
			data: {
				...location.data,
				users: {
					connect: { id: user.id }
				}
			}
		});

		console.log(res);

		return {
			success: true
		};
	}
};
