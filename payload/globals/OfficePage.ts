import { GlobalConfig } from "payload"

import { ARRAY_FIELD } from "../utilities/fields/ArrayField"
import { COLLAPSIBLE_FIELD } from "../utilities/fields/CollapsibleField"
import { NAMED_GROUP_FIELD } from "../utilities/fields/GroupField"
import { ROW_FIELD } from "../utilities/fields/RowField"
import { TEXT_AREA_FIELD } from "../utilities/fields/TextAreaField"
import { UPLOAD_FIELD } from "../utilities/fields/UploadField"
import { Global_Options } from "../utilities/globals/Global"

export const OfficePageGlobal: GlobalConfig = Global_Options(
    "OfficePage",
    "Behörden",
    {
        admin: {
            group: "Unterseiten"
        }
    },
    [
        NAMED_GROUP_FIELD("Sektion 1", "cta", [
            COLLAPSIBLE_FIELD("Sektion 1", [
                UPLOAD_FIELD("Bild", "image"),
                UPLOAD_FIELD("Bild (Mobile)", "imageMobile"),

                ROW_FIELD([
                    TEXT_AREA_FIELD("Name", "name"),
                    TEXT_AREA_FIELD("Titel", "title"),
                    TEXT_AREA_FIELD("Untertitel", "subtitle")
                ]),

                NAMED_GROUP_FIELD("Termin Button", "appointmentButton", [
                    TEXT_AREA_FIELD("Text", "text"),
                    TEXT_AREA_FIELD("Icon", "icon")
                ])
            ])
        ]),

        NAMED_GROUP_FIELD("Sektion 2", "richtext", [
            COLLAPSIBLE_FIELD("Sektion 2", [
                ROW_FIELD([TEXT_AREA_FIELD("Titel", "title"), TEXT_AREA_FIELD("Untertitel", "subtitle")]),

                ARRAY_FIELD("Texte", "texts", [TEXT_AREA_FIELD("Text", "text")])
            ])
        ]),

        NAMED_GROUP_FIELD("Sektion 3", "gallery", [
            COLLAPSIBLE_FIELD("Sektion 3", [
                ROW_FIELD([
                    TEXT_AREA_FIELD("Titel", "title"),
                    TEXT_AREA_FIELD("Untertitel", "subtitle"),
                    TEXT_AREA_FIELD("Text", "text")
                ]),

                ARRAY_FIELD("Bilder", "images", [
                    UPLOAD_FIELD("Bild", "image"),
                    TEXT_AREA_FIELD("Beschreibung", "description")
                ])
            ])
        ]),

        NAMED_GROUP_FIELD("Sektion 4", "details", [
            COLLAPSIBLE_FIELD("Sektion 4", [
                ROW_FIELD([TEXT_AREA_FIELD("Titel", "title"), TEXT_AREA_FIELD("Untertitel", "subtitle")]),

                ARRAY_FIELD("Details", "details", [
                    ROW_FIELD([TEXT_AREA_FIELD("Icon", "icon"), TEXT_AREA_FIELD("Titel", "title")]),

                    TEXT_AREA_FIELD("Text", "text")
                ])
            ])
        ]),

        NAMED_GROUP_FIELD("Sektion 5", "information", [
            COLLAPSIBLE_FIELD("Sektion 5", [
                ROW_FIELD([TEXT_AREA_FIELD("Titel", "title"), TEXT_AREA_FIELD("Untertitel", "subtitle")]),

                ARRAY_FIELD("Texte", "texts", [TEXT_AREA_FIELD("Text", "text")]),

                ARRAY_FIELD("Details", "details", [TEXT_AREA_FIELD("Name", "name")]),

                NAMED_GROUP_FIELD("Block", "block", [
                    ROW_FIELD([
                        TEXT_AREA_FIELD("Icon", "icon"),
                        TEXT_AREA_FIELD("Titel", "title"),
                        TEXT_AREA_FIELD("Untertitel", "subtitle")
                    ]),

                    ARRAY_FIELD("Liste", "list", [ROW_FIELD([TEXT_AREA_FIELD("Text", "text")])])
                ])
            ])
        ]),

        NAMED_GROUP_FIELD("Sektion 6", "benefits", [
            COLLAPSIBLE_FIELD("Sektion 6", [
                ROW_FIELD([
                    TEXT_AREA_FIELD("Titel", "title"),
                    TEXT_AREA_FIELD("Untertitel", "subtitle"),
                    TEXT_AREA_FIELD("Text", "text")
                ]),

                ARRAY_FIELD("Vorteile", "benefits", [ROW_FIELD([TEXT_AREA_FIELD("Text", "text")])])
            ])
        ]),

        NAMED_GROUP_FIELD("Sektion 7", "contact", [
            COLLAPSIBLE_FIELD("Sektion 7", [
                ROW_FIELD([TEXT_AREA_FIELD("Titel", "title"), TEXT_AREA_FIELD("Untertitel", "subtitle")]),

                NAMED_GROUP_FIELD("Termin Button", "appointmentButton", [
                    TEXT_AREA_FIELD("Text", "text"),
                    TEXT_AREA_FIELD("Icon", "icon")
                ]),

                ROW_FIELD([TEXT_AREA_FIELD("Telefonnummer", "phone"), TEXT_AREA_FIELD("E-Mail", "mail")])
            ])
        ])
    ]
)
