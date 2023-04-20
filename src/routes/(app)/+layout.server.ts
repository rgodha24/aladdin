import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();

	if (!user) throw redirect(307, '/login');

	return {
		user
	};
};
