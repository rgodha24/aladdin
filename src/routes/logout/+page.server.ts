import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { auth } from '$lib/server/lucia';

export const actions: Actions = {
	default: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
