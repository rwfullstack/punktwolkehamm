const DEV_MEDIA_ORIGIN = "https://www.punktwolke-hamm.de"

export const getResourceUrl = (url?: string | null): string => {
    if (!url) {
        return ""
    }

    if (process.env.NODE_ENV === "development") {
        if (url.startsWith("http://") || url.startsWith("https://")) {
            return url
        }

        return `${DEV_MEDIA_ORIGIN}${url.startsWith("/") ? url : `/${url}`}`
    }

    return url
}
