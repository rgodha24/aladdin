import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	console.log('hook');
	event.locals.auth = auth.handleRequest(event);
	return await resolve(event);
};
