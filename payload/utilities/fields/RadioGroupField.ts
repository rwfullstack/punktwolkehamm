import { Option, RadioField } from "payload"

export const RADIO_GROUP_FIELD = (label: string, name: string, defaultValue: string, values: Option[]): RadioField => {
    return {
        type: "radio",

        name,
        label,

        options: values,
        defaultValue
    }
}

export const RADIO_GROUP_FIELD_OPTIONS = (
    label: string,
    name: string,

    defaultValue: string,
    values: Option[],

    options: Omit<Partial<RadioField>, "type" | "name" | "label" | "options" | "defaultValue" | "hasMany" | "validate">
): RadioField => {
    return {
        type: "radio",

        name,
        label,

        options: values,
        defaultValue,

        ...options
    }
}
