import { ARRAY_FIELD_OPTIONS } from "./ArrayField"
import { SELECT_FIELD } from "./SelectField"
import { UPLOAD_FIELD } from "./UploadField"

export const CONTENT_BLOCKS_FIELD = ARRAY_FIELD_OPTIONS(
    "Blöcke",
    "blocks",
    {
        labels: {
            singular: "Block",
            plural: "Blöcke"
        }
    },
    [
        SELECT_FIELD("Layout", "layout", "textOnly", [
            { label: "Nur Text", value: "textOnly" },
            { label: "Bild links, Text rechts", value: "imageLeft" },
            { label: "Text links, Bild rechts", value: "imageRight" }
        ]),

        {
            type: "richText",
            name: "content",
            label: "Inhalt"
        },

        {
            ...UPLOAD_FIELD("Bild", "image"),
            admin: {
                condition: (_, siblingData) => siblingData?.layout !== "textOnly"
            }
        }
    ]
)
