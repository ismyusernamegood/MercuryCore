// import type { PageServerLoad } from "./$types"
// import { authoriseUser } from "$lib/server/lucia"
// import { prisma } from "$lib/server/prisma"
// import { error } from "@sveltejs/kit"

// export const load: PageServerLoad = async ({ locals, params }) => {
// 	console.time("place settings")
// 	const getPlace = await prisma.place.findUnique({
// 		where: {
// 			id: params.id,
// 		},
// 		select: {
// 			id: true,
// 			name: true,
// 			description: true,
// 			image: true,
// 			maxPlayers: true,
// 			created: true,
// 			updated: true,
// 			serverTicket: true,
// 			ownerUser: {
// 				select: {
// 					number: true,
// 					username: true,
// 				},
// 			},
// 		},
// 	})
// 	console.timeEnd("place settings")
// 	if (getPlace) {
// 		const user = (await authoriseUser(locals.validateUser)).user

// 		if (user.number != getPlace.ownerUser?.number && user.permissionLevel >= 4) throw error(401, "You do not have permission to view this page.")

// 		return {
// 			id: getPlace.id,
// 			name: getPlace.name,
// 			owner: getPlace.ownerUser,
// 			description: getPlace.description,
// 			image: getPlace.image,
// 			maxPlayers: getPlace.maxPlayers,
// 			created: getPlace.created,
// 			updated: getPlace.updated,
// 			serverTicket: getPlace.serverTicket,
// 		}
// 	} else throw error(404, "Not found")
// }
