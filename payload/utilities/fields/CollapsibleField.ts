import { CollapsibleField, Field } from "payload"

export const COLLAPSIBLE_FIELD = (
    label: string,

    fields: Field[]
): CollapsibleField => {
    return {
        type: "collapsible",

        label,

        fields
    }
}

export const COLLAPSIBLE_FIELD_OPTIONS = (
    label: string,

    options: Omit<Partial<CollapsibleField>, "type" | "label" | "fields">,

    fields: Field[]
): CollapsibleField => {
    return {
        type: "collapsible",

        label,

        fields,

        ...options
    }
}
