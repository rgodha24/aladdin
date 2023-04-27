import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import adapter from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import { prisma } from './db';
import 'lucia-auth/polyfill/node';

export const auth = lucia({
	adapter: adapter(prisma),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	transformDatabaseUser: (user) => user
});

type test = (typeof auth)['_transformDatabaseUser'];

export type Auth = typeof auth;
