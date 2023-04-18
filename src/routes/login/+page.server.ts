import { z } from 'zod';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const form = Object.entries(await request.formData());
    const schema = z.object({
      username: z.string(),
      password: z.string().min(8).max(16).regex(/[a-z]/).regex(/[A-Z]/).regex(/[0-9]/)
    });

    const { username, password } = schema.parse(form);

    try {
      const key = await auth.useKey('username', username, password);
      const session = await auth.createSession(key.userId);
      locals.auth.setSession(session);
    } catch {
      // invalid credentials
      return fail(400);
    }
  }
};

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (session) throw redirect(302, '/');
};
