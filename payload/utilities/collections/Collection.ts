import { CollectionConfig, Field } from "payload"

export const Collection = (
    slug: string,

    labels: {
        singular: string
        plural: string
    },

    fields: Field[]
): CollectionConfig => {
    return {
        slug,

        labels,

        fields
    }
}

export const Collection_Options = (
    slug: string,

    labels: {
        singular: string
        plural: string
    },

    options: Omit<Partial<CollectionConfig>, "slug" | "labels" | "fields">,

    fields: Field[]
): CollectionConfig => {
    return {
        slug,

        labels,

        fields,

        ...options
    }
}
