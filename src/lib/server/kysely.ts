import type { DB } from 'kysely-codegen';
import { PlanetScaleDialect } from 'kysely-planetscale';
import { Kysely } from 'kysely';
import { DATABASE_URL } from '$env/static/private';

export const kys = new Kysely<DB>({
	dialect: new PlanetScaleDialect({
		url: DATABASE_URL,
		fetch
	})
});
