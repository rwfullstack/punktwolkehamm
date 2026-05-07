import { Tab, TabsField } from "payload"

export const TABS_FIELD = (label: string, tabs: Tab[]): TabsField => {
    return {
        type: "tabs",

        label,

        tabs
    }
}

export const TABS_FIELD_OPTIONS = (
    label: string,

    options: Omit<Partial<TabsField>, "type" | "label" | "tabs">,

    tabs: Tab[]
): TabsField => {
    return {
        type: "tabs",

        label,

        tabs,

        ...options
    }
}
