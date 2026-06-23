import { Field, RelationshipField } from "payload"

import { CHECK_BOX_FIELD } from "./CheckBoxField"
import { ROW_FIELD } from "./RowField"
import { TEXT_FIELD } from "./TextField"

const INFO_PAGE_RELATIONSHIP_FIELD = (): RelationshipField => ({
    type: "relationship",
    name: "infoPage",
    label: "Info Seite",
    relationTo: "InfoPages",
    admin: {
        condition: (_, siblingData) => Boolean(siblingData?.linkAvailable)
    }
})

export const INFO_PAGE_LINK_FIELDS: Field[] = [
    CHECK_BOX_FIELD("Verlinkung", "linkAvailable"),

    ROW_FIELD([TEXT_FIELD("Link Text", "linkText"), TEXT_FIELD("Link Icon", "linkIcon")]),

    INFO_PAGE_RELATIONSHIP_FIELD()
]
