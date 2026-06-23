export const revalidateSite = async (path?: string) => {
    const baseUrls = ["http://localhost:3000/api/revalidate", "https://punktwolkehamm.de/api/revalidate"]

    await Promise.all(
        baseUrls.map((baseUrl) => {
            const url = path ? `${baseUrl}?path=${encodeURIComponent(path)}` : baseUrl

            return fetch(url, { method: "GET" })
        })
    )
}
