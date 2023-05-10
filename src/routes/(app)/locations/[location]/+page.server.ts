import { fail, redirect } from '@sveltejs/kit';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { newItemSchema } from './schemas';
import type { PageServerLoad, Actions } from './$types';
import { prisma } from '$lib/server/db';
import { validateUserAccessToLocation } from './validateUserAccess';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(307, '/login');

	const newItem = superValidate(newItemSchema);

	return {
		newItem
	};
};

export const actions: Actions = {
	newItem: async ({ locals, request, params }) => {
		const { user } = await locals.auth.validateUser();

		if (!user) throw redirect(307, '/login');

		const form = await superValidate(request, newItemSchema);

		if (!form.valid) return { newItem: form };

		const { id: locationId, inventory } = await validateUserAccessToLocation(
			params.location,
			user.id
		);

		if (inventory.some((item) => item.name === form.data.name)) {
			setError(form, 'name', 'item with this name already exists in this location');

			return fail(400, { newItem: form });
		}
		if (inventory.some((item) => item.barcode === form.data.barcode)) {
			setError(form, 'barcode', 'item with this barcode already exists in this location');

			return fail(400, { newItem: form });
		}

		try {
			await prisma.item.create({
				data: {
					...form.data,
					locationId,
					quantity: 0,
					tags: {
						connectOrCreate: form.data.tags.map((tag) => ({
							create: { name: tag },
							where: { name: tag }
						}))
					}
				}
			});
		} catch {
			setError(form, null, 'an error occured');

			return fail(400, { newItem: form });
		}

		return {
			newItem: form
		};
	}
};
