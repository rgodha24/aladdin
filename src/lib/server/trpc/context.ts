import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';
import { prisma } from '../prisma';

export async function createContext(event: RequestEvent) {
  const user = await event.locals.auth.validateUser();
  return {
    user,
    event,
    prisma
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
