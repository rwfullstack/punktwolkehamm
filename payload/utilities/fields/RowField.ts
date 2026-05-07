import { Field, RowField } from "payload"

export const ROW_FIELD = (fields: Field[]): RowField => {
    return {
        type: "row",

        fields
    }
}

export const ROW_FIELD_OPTIONS = (options: Omit<Partial<RowField>, "type" | "fields">, fields: Field[]): RowField => {
    return {
        type: "row",

        fields,

        ...options
    }
}
