const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    /*await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
            posts: {
                create: { title: 'Hello World' },
            },
            profile: {
                create: { bio: 'I like turtles' },
            },
        },
    })*/

    /*const post = await prisma.post.update({
        where: { id: 1 },
        data: { content: 'Lorem ipsum' },
    })

    console.log(post)
    */

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    })

    //const allPosts = await prisma.post.findMany({})

    console.dir(allUsers, { depth: null })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
