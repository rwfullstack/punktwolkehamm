import type { CollectionConfig } from "payload"
import { Collection_Options } from "../utilities/collections/Collection"
import { ROW_FIELD } from "../utilities/fields/RowField"
import { TEXT_FIELD } from "../utilities/fields/TextField"

export const Users: CollectionConfig = Collection_Options(
    "Users",
    {
        singular: "Benutzer",
        plural: "Benutzer"
    },
    {
        admin: {
            useAsTitle: "email",
            defaultColumns: ["email", "firstName", "lastName", "role"]
        },

        auth: true
    },
    [ROW_FIELD([TEXT_FIELD("Vorname", "firstName"), TEXT_FIELD("Nachname", "lastName")])]
)
