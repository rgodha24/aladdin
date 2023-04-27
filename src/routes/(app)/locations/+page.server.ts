import { prisma } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const user = await event.locals.auth.validate();
	if (!user) {
		console.log('redirecting');
		throw redirect(307, '/login');
	}
	const locations = prisma.location.findMany({
		where: {
			users: {
				some: {
					id: user.userId
				}
			}
		}
	});
	return {
		locations
	};
};
