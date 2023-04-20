import { prisma } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, locals }) => {
	// layout doesnt reload on all page changes, so we need to check if the user is still logged in on page server loads...
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(307, '/login');

	if (Number.isNaN(Number(params.location))) {
		throw redirect(307, '/locations');
	}

	const location = prisma.location
		.findUnique({
			where: {
				id: Number(params.location)
			},
			include: {
				users: {
					where: {
						id: user.id
					}
				},
				inventory: true
			}
		})
		.then((location) => {
			if (location === null) {
				// TODO: custom logic for no location found
				throw redirect(307, '/locations');
			}
			// TODO: custom logic for no access to location
			else if (location.users.length === 0) {
				throw redirect(307, '/locations');
			}
			return location;
		});

	return {
		location
	};
};
