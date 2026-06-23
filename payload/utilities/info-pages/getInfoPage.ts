import { GetPayload } from "@/payload/utilities/config/GetPayload"

import { InfoPage } from "./types"

export const getInfoPage = async (path: string): Promise<InfoPage | null> => {
    const payload = await GetPayload()

    const result = await payload.find({
        collection: "InfoPages",
        where: {
            path: {
                equals: path
            }
        },
        depth: 1,
        limit: 1
    })

    return (result.docs[0] as InfoPage | undefined) ?? null
}

export const getAllInfoPagePaths = async (): Promise<string[]> => {
    try {
        const payload = await GetPayload()

        const result = await payload.find({
            collection: "InfoPages",
            limit: 1000,
            pagination: false,
            depth: 0
        })

        return (result.docs as InfoPage[]).map((page) => page.path).filter(Boolean)
    } catch {
        return []
    }
}
