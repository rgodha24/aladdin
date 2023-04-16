import { prisma } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
  // TODO: only return locations that the user can see
  const location = prisma.location
    .findUnique({
      where: { id: Number(event.params.location) }
    })
    .then((location) => {
      if (location === null) {
        throw redirect(307, '/locations');
      }
      return location;
    });

  return {
    location
  };
};
