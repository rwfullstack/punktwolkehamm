import { GlobalConfig } from "payload"

import { CONTENT_BLOCKS_FIELD } from "../utilities/fields/ContentBlockFields"
import { TEXT_AREA_FIELD } from "../utilities/fields/TextAreaField"
import { TEXT_FIELD } from "../utilities/fields/TextField"
import { Global_Options } from "../utilities/globals/Global"

export const AboutPageGlobal: GlobalConfig = Global_Options(
    "AboutPage",
    "Über uns",
    {
        admin: {
            group: "Unterseiten"
        }
    },
    [
        TEXT_FIELD("Titel", "title"),
        TEXT_AREA_FIELD("Beschreibung (SEO)", "description"),
        CONTENT_BLOCKS_FIELD
    ]
)
