// lib/trpc/router.ts
import type { Context } from '$lib/server/trpc/context';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
  greeting: t.procedure.query(async () => {
    return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
  }),
  checkout: t.procedure.input(z.object({})).mutation(async ({ input, ctx: {prisma} }) => { })
});

export type Router = typeof router;
