import { prisma } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	// TODO: only return locations that the user can see
	const locations = prisma.location.findMany();
	return {
		locations
	};
};
