import { prisma } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';

export async function validateUserAccessToLocation(location: string, userId: string) {
  return await prisma.location
    .findUnique({
      where: {
        id: Number(location)
      },
      include: {
        users: {
          where: {
            id: userId
          }
        },
        inventory: true
      }
    })
    .then((location) => {
      if (location === null) {
        // TODO: custom logic for no location found
        throw redirect(307, '/locations');
      }
      // TODO: custom logic for no access to location
      else if (location.users.length === 0) {
        throw redirect(307, '/locations');
      }
      return location;
    });
}