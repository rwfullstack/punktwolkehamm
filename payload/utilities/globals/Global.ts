import { Field, GlobalConfig } from "payload"

export const Global = (
    slug: string,

    label: string,

    fields: Field[]
): GlobalConfig => {
    return {
        slug,

        label,

        hooks: {
            afterChange: [
                async ({ doc }) => {
                    await fetch("http://localhost:3000/api/revalidate", { method: "GET" })
                    await fetch("https://punktwolkehamm.de/api/revalidate", { method: "GET" })
                }
            ]
        },

        fields
    }
}

export const Global_Options = (
    slug: string,

    label: string,

    options: Omit<Partial<GlobalConfig>, "slug" | "label" | "fields">,

    fields: Field[]
): GlobalConfig => {
    return {
        slug,

        label,

        hooks: {
            afterChange: [
                async ({ doc }) => {
                    await fetch("http://localhost:3000/api/revalidate", { method: "GET" })
                    await fetch("https://punktwolkehamm.de/api/revalidate", { method: "GET" })
                }
            ]
        },

        fields,

        ...options
    }
}
