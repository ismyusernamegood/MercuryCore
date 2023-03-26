import { authorise } from "$lib/server/lucia"
import { prisma } from "$lib/server/prisma"

export const load = async ({ locals }) => ({
	items: (
		await prisma.user.findUnique({
			where: {
				number: (await authorise(locals.validateUser)).user.number,
			},
			select: {
				itemsOwned: true,
			},
		})
	)?.itemsOwned,
})
