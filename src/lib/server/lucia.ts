import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import prisma from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';

export const auth = lucia({
  adapter: prisma(prisma),
  env: dev ? 'DEV' : 'PROD',
  middleware: sveltekit()
});

export type Auth = typeof auth;
