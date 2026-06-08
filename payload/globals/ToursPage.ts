import { GlobalConfig } from "payload"

import { ARRAY_FIELD } from "../utilities/fields/ArrayField"
import { COLLAPSIBLE_FIELD } from "../utilities/fields/CollapsibleField"
import { NAMED_GROUP_FIELD } from "../utilities/fields/GroupField"
import { ROW_FIELD } from "../utilities/fields/RowField"
import { SELECT_FIELD } from "../utilities/fields/SelectField"
import { TEXT_AREA_FIELD } from "../utilities/fields/TextAreaField"
import { UPLOAD_FIELD } from "../utilities/fields/UploadField"
import { Global_Options } from "../utilities/globals/Global"

export const ToursPageGlobal: GlobalConfig = Global_Options(
    "ToursPage",
    "Virtuelle Touren",
    {
        admin: {
            group: "Unterseiten"
        }
    },
    [
        NAMED_GROUP_FIELD("Touren", "tours", [
            ARRAY_FIELD("Tour", "tours", [
                ROW_FIELD([
                    TEXT_AREA_FIELD("Tour Typ", "type"),
                    TEXT_AREA_FIELD("Tour Name", "name"),
                    TEXT_AREA_FIELD("Tour Icon", "icon")
                ]),

                TEXT_AREA_FIELD("Tour Beschreibung", "text"),
                TEXT_AREA_FIELD("Tour Link", "link")
            ])
        ])
    ]
)
