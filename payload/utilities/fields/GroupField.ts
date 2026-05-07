import { Field, GroupField, UnnamedGroupField } from "payload"

export const GROUP_FIELD = (label: string, fields: Field[]): GroupField => {
    return {
        type: "group",

        label,

        fields
    }
}

export const GROUP_FIELD_OPTIONS = (
    label: string,

    options: Omit<Partial<UnnamedGroupField>, "type" | "label" | "fields">,

    fields: Field[]
): UnnamedGroupField => {
    return {
        type: "group",

        label,

        fields,

        ...options
    }
}

export const NAMED_GROUP_FIELD = (label: string, name: string, fields: Field[]): GroupField => {
    return {
        type: "group",

        name,
        label,

        fields
    }
}

export const NAMED_GROUP_FIELD_OPTIONS = (
    label: string,
    name: string,

    options: Omit<Partial<GroupField>, "type" | "name" | "label" | "fields">,

    fields: Field[]
): GroupField => {
    return {
        type: "group",

        name,
        label,

        fields,

        ...options
    }
}
