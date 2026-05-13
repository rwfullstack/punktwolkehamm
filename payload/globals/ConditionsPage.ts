import { GlobalConfig } from "payload"

import { ARRAY_FIELD } from "../utilities/fields/ArrayField"
import { COLLAPSIBLE_FIELD } from "../utilities/fields/CollapsibleField"
import { NAMED_GROUP_FIELD } from "../utilities/fields/GroupField"
import { ROW_FIELD } from "../utilities/fields/RowField"
import { TEXT_AREA_FIELD } from "../utilities/fields/TextAreaField"
import { UPLOAD_FIELD } from "../utilities/fields/UploadField"
import { Global_Options } from "../utilities/globals/Global"
import { CHECK_BOX_FIELD } from "../utilities/fields/CheckBoxField"

export const ConditionsPageGlobal: GlobalConfig = Global_Options(
    "ConditionsPage",
    "Allgemeine Geschäftsbedingungen",
    {
        admin: {
            group: "Unterseiten"
        }
    },
    [{ type: "richText", name: "content", label: "Inhalt" }]
)
