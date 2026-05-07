import { NumberField } from "payload"

export const NUMBER_FIELD = (label: string, name: string): NumberField => {
    return {
        type: "number",

        name,
        label
    }
}

export const NUMBER_FIELD_OPTIONS = (
    label: string,
    name: string,

    options: Omit<Partial<NumberField>, "type" | "name" | "label" | "hasMany" | "validate" | "maxRows" | "minRows">
): NumberField => {
    return {
        type: "number",

        name,
        label,

        ...options
    }
}
