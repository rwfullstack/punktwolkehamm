import { InfoPage } from "@/payload/payload-types"

export const getInfoPageHref = (infoPage?: (string | null) | InfoPage): string | null => {
    if (!infoPage || typeof infoPage === "string") {
        return null
    }

    if (!infoPage.path) {
        return null
    }

    return `/${infoPage.path}`
}
