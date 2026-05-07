import { CodeField } from "payload"

export const CODE_FIELD = (label: string, name: string): CodeField => {
    return {
        type: "code",

        name,
        label
    }
}

export const CODE_FIELD_OPTIONS = (
    label: string,
    name: string,

    options: Omit<Partial<CodeField>, "type" | "name" | "label">
): CodeField => {
    return {
        type: "code",

        name,
        label,

        ...options
    }
}
