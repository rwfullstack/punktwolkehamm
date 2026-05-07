import { CheckboxField } from "payload"

export const CHECK_BOX_FIELD = (label: string, name: string): CheckboxField => {
    return {
        type: "checkbox",

        name,
        label
    }
}

export const CHECK_BOX_FIELD_OPTIONS = (
    label: string,
    name: string,

    options: Omit<Partial<CheckboxField>, "type" | "name" | "label">
): CheckboxField => {
    return {
        type: "checkbox",

        name,
        label,

        ...options
    }
}
