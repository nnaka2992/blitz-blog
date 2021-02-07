// import { enhancePrisma } from "blitz"
import { PrismaClient } from "@prisma/client"

// const EnhancedPrisma = enhancePrisma(PrismaClient)

export * from "@prisma/client"
// export default new EnhancedPrisma()

let prisma: PrismaClient


if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
} else {
    // Ensure the prisma instance is re-used during hot-reloading
    // Otherwise, a new client will be created on every reload
    globalThis["prisma"] = globalThis["prisma"] || new PrismaClient()
    prisma = globalThis["prisma"]
}

export default prisma
