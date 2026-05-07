import { JSONField } from "payload"

export const JSON_FIELD = (label: string, name: string): JSONField => {
    return {
        type: "json",

        name,
        label
    }
}

export const JSON_FIELD_OPTIONS = (
    label: string,
    name: string,

    options: Omit<Partial<JSONField>, "type" | "name" | "label">
): JSONField => {
    return {
        type: "json",

        name,
        label,

        ...options
    }
}
