import { Field, GlobalConfig } from "payload"

export const Global = (
    slug: string,

    label: string,

    fields: Field[]
): GlobalConfig => {
    return {
        slug,

        label,

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

        fields,

        ...options
    }
}
