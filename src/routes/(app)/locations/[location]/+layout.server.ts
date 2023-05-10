import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { validateUserAccessToLocation } from './validateUserAccess';

export const load: LayoutServerLoad = async ({ params, locals }) => {
	// layout doesnt reload on all page changes, so we need to check if the user is still logged in on page server loads...
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(307, '/login');

	if (Number.isNaN(Number(params.location))) {
		throw redirect(307, '/locations');
	}

	const location = validateUserAccessToLocation(params.location, user.id);

	return {
		location
	};
};
