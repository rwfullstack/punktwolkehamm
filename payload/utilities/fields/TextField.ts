import { TextField } from "payload"

export const TEXT_FIELD = (label: string, name: string): TextField => {
    return {
        type: "text",

        name,
        label
    }
}

export const TEXT_FIELD_OPTIONS = (
    label: string,
    name: string,

    options: Omit<Partial<TextField>, "type" | "name" | "label" | "hasMany" | "validate" | "maxRows" | "minRows">
): TextField => {
    return {
        type: "text",

        name,
        label,

        ...options
    }
}
