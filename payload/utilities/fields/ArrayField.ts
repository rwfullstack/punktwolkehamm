import { ArrayField, Field } from "payload"

export const ARRAY_FIELD = (label: string, name: string, fields: Field[]): ArrayField => {
    return {
        type: "array",

        name,
        label,

        fields
    }
}

export const ARRAY_FIELD_OPTIONS = (
    label: string,
    name: string,

    options: Omit<Partial<ArrayField>, "type" | "name" | "label" | "fields">,

    fields: Field[]
): ArrayField => {
    return {
        type: "array",

        name,
        label,

        fields,

        ...options
    }
}
