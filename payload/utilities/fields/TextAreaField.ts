import { TextareaField } from "payload"

export const TEXT_AREA_FIELD = (label: string, name: string): TextareaField => {
    return {
        type: "textarea",

        name,
        label
    }
}

export const TEXT_AREA_FIELD_OPTIONS = (
    label: string,
    name: string,

    options: Omit<Partial<TextareaField>, "type" | "name" | "label" | "hasMany" | "validate" | "maxRows" | "minRows">
): TextareaField => {
    return {
        type: "textarea",

        name,
        label,

        ...options
    }
}
