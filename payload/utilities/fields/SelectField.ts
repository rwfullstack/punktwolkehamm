import { Option, SelectField } from "payload"

export const SELECT_FIELD = (
    label: string,
    name: string,

    defaultValue: string,
    values: Option[]
): SelectField => {
    return {
        type: "select",

        name,
        label,

        options: values,
        defaultValue: defaultValue ?? undefined
    }
}
