import { validateUserAccessToLocation } from '../validateUserAccess';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	const userId = (await locals.auth.validate())?.userId;
	// todo: this runs twice?
	const location = await validateUserAccessToLocation(params.location, userId);

	return {
		location
	};
};
