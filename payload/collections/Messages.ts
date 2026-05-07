import type { CollectionConfig } from "payload"
import { Collection_Options } from "../utilities/collections/Collection"
import { ROW_FIELD } from "../utilities/fields/RowField"
import { TEXT_AREA_FIELD } from "../utilities/fields/TextAreaField"
import { TEXT_FIELD } from "../utilities/fields/TextField"

export const Messages: CollectionConfig = Collection_Options(
    "Messages",
    {
        singular: "Nachricht",
        plural: "Nachrichten"
    },
    {
        admin: {
            useAsTitle: "id",
            defaultColumns: ["id", "firstName", "lastName", "createdAt", "updatedAt"],
            group: "Kontakt"
        }
    },
    [
        ROW_FIELD([TEXT_FIELD("Vorname", "firstName"), TEXT_FIELD("Nachname", "lastName")]),

        TEXT_FIELD("E-Mail Adresse", "email"),

        TEXT_AREA_FIELD("Nachricht", "message")
    ]
)
