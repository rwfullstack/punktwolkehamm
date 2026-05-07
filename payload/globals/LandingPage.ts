import { GlobalConfig } from "payload"

import { ARRAY_FIELD } from "../utilities/fields/ArrayField"
import { COLLAPSIBLE_FIELD } from "../utilities/fields/CollapsibleField"
import { NAMED_GROUP_FIELD } from "../utilities/fields/GroupField"
import { ROW_FIELD } from "../utilities/fields/RowField"
import { SELECT_FIELD } from "../utilities/fields/SelectField"
import { TEXT_AREA_FIELD } from "../utilities/fields/TextAreaField"
import { UPLOAD_FIELD } from "../utilities/fields/UploadField"
import { Global_Options } from "../utilities/globals/Global"

export const LandingPageGlobal: GlobalConfig = Global_Options(
    "LandingPage",
    "Startseite",
    {
        admin: {
            group: "Startseite"
        }
    },
    [
        NAMED_GROUP_FIELD("Sektion 1", "cta", [
            COLLAPSIBLE_FIELD("Sektion 1", [
                UPLOAD_FIELD("Bild", "image"),
                UPLOAD_FIELD("Bild (Mobile)", "imageMobile"),

                ROW_FIELD([TEXT_AREA_FIELD("Überschrift", "heading"), TEXT_AREA_FIELD("Text", "text")]),

                ROW_FIELD([
                    NAMED_GROUP_FIELD("Termin Button", "appointmentButton", [
                        TEXT_AREA_FIELD("Text", "text"),
                        TEXT_AREA_FIELD("Icon", "icon")
                    ]),

                    NAMED_GROUP_FIELD("Leistungen Button", "servicesButton", [
                        TEXT_AREA_FIELD("Text", "text"),
                        TEXT_AREA_FIELD("Icon", "icon")
                    ])
                ])
            ])
        ]),

        NAMED_GROUP_FIELD("Sektion 2", "statistics", [
            COLLAPSIBLE_FIELD("Sektion 2", [
                NAMED_GROUP_FIELD("Statistik 1", "statistic1", [
                    TEXT_AREA_FIELD("Wert", "value"),
                    TEXT_AREA_FIELD("Titel", "title"),
                    TEXT_AREA_FIELD("Text", "text")
                ]),

                NAMED_GROUP_FIELD("Statistik 2", "statistic2", [
                    TEXT_AREA_FIELD("Wert", "value"),
                    TEXT_AREA_FIELD("Titel", "title"),
                    TEXT_AREA_FIELD("Text", "text")
                ]),

                NAMED_GROUP_FIELD("Statistik 3", "statistic3", [
                    TEXT_AREA_FIELD("Wert", "value"),
                    TEXT_AREA_FIELD("Titel", "title"),
                    TEXT_AREA_FIELD("Text", "text")
                ]),

                NAMED_GROUP_FIELD("Statistik 4", "statistic4", [
                    TEXT_AREA_FIELD("Wert", "value"),
                    TEXT_AREA_FIELD("Titel", "title"),
                    TEXT_AREA_FIELD("Text", "text")
                ])
            ])
        ]),

        NAMED_GROUP_FIELD("Sektion 3", "services", [
            COLLAPSIBLE_FIELD("Sektion 3", [
                ROW_FIELD([
                    TEXT_AREA_FIELD("Titel", "title"),
                    TEXT_AREA_FIELD("Untertitel", "subtitle"),
                    TEXT_AREA_FIELD("Text", "text")
                ]),

                NAMED_GROUP_FIELD("Dienstleistungen 1", "service1", [
                    UPLOAD_FIELD("Bild", "image"),

                    ROW_FIELD([
                        TEXT_AREA_FIELD("Name", "name"),
                        TEXT_AREA_FIELD("Text", "text"),
                        TEXT_AREA_FIELD("Icon", "icon")
                    ]),

                    ARRAY_FIELD("Leistungen", "services", [TEXT_AREA_FIELD("Leistung", "name")])
                ]),

                NAMED_GROUP_FIELD("Dienstleistungen 2", "service2", [
                    UPLOAD_FIELD("Bild", "image"),

                    ROW_FIELD([
                        TEXT_AREA_FIELD("Name", "name"),
                        TEXT_AREA_FIELD("Text", "text"),
                        TEXT_AREA_FIELD("Icon", "icon")
                    ]),

                    ARRAY_FIELD("Leistungen", "services", [TEXT_AREA_FIELD("Leistung", "name")])
                ]),

                NAMED_GROUP_FIELD("Dienstleistungen 3", "service3", [
                    UPLOAD_FIELD("Bild", "image"),

                    ROW_FIELD([
                        TEXT_AREA_FIELD("Name", "name"),
                        TEXT_AREA_FIELD("Text", "text"),
                        TEXT_AREA_FIELD("Icon", "icon")
                    ]),

                    ARRAY_FIELD("Leistungen", "services", [TEXT_AREA_FIELD("Leistung", "name")])
                ]),

                NAMED_GROUP_FIELD("Dienstleistungen 4", "service4", [
                    UPLOAD_FIELD("Bild", "image"),

                    ROW_FIELD([
                        TEXT_AREA_FIELD("Name", "name"),
                        TEXT_AREA_FIELD("Text", "text"),
                        TEXT_AREA_FIELD("Icon", "icon")
                    ]),

                    ARRAY_FIELD("Leistungen", "services", [TEXT_AREA_FIELD("Leistung", "name")])
                ]),

                NAMED_GROUP_FIELD("Dienstleistungen 5", "service5", [
                    UPLOAD_FIELD("Bild", "image"),

                    ROW_FIELD([
                        TEXT_AREA_FIELD("Name", "name"),
                        TEXT_AREA_FIELD("Text", "text"),
                        TEXT_AREA_FIELD("Icon", "icon")
                    ]),

                    ARRAY_FIELD("Leistungen", "services", [TEXT_AREA_FIELD("Leistung", "name")])
                ])
            ])
        ]),

        NAMED_GROUP_FIELD("Sektion 4", "about", [
            COLLAPSIBLE_FIELD("Sektion 4", [
                ROW_FIELD([
                    TEXT_AREA_FIELD("Titel", "title"),
                    TEXT_AREA_FIELD("Untertitel", "subtitle"),
                    TEXT_AREA_FIELD("Text", "text")
                ]),

                ARRAY_FIELD("Vorteile", "benefits", [TEXT_AREA_FIELD("Text", "text")]),

                ARRAY_FIELD("Daten", "data", [
                    ROW_FIELD([
                        TEXT_AREA_FIELD("Icon", "icon"),
                        TEXT_AREA_FIELD("Titel", "title"),
                        TEXT_AREA_FIELD("Text", "text")
                    ])
                ])
            ])
        ]),

        NAMED_GROUP_FIELD("Sektion 5", "process", [
            COLLAPSIBLE_FIELD("Sektion 5", [
                UPLOAD_FIELD("Bild", "previewImage"),
                TEXT_AREA_FIELD("Bild Link", "previewImageLink"),

                ROW_FIELD([
                    TEXT_AREA_FIELD("Titel", "title"),
                    TEXT_AREA_FIELD("Untertitel", "subtitle"),
                    TEXT_AREA_FIELD("Text", "text")
                ]),

                NAMED_GROUP_FIELD("Schritt 1", "step1", [
                    ROW_FIELD([
                        TEXT_AREA_FIELD("Icon", "icon"),
                        TEXT_AREA_FIELD("Titel", "title"),
                        TEXT_AREA_FIELD("Text", "text")
                    ])
                ]),

                NAMED_GROUP_FIELD("Schritt 2", "step2", [
                    ROW_FIELD([
                        TEXT_AREA_FIELD("Icon", "icon"),
                        TEXT_AREA_FIELD("Titel", "title"),
                        TEXT_AREA_FIELD("Text", "text")
                    ])
                ]),

                NAMED_GROUP_FIELD("Schritt 3", "step3", [
                    ROW_FIELD([
                        TEXT_AREA_FIELD("Icon", "icon"),
                        TEXT_AREA_FIELD("Titel", "title"),
                        TEXT_AREA_FIELD("Text", "text")
                    ])
                ]),

                NAMED_GROUP_FIELD("Schritt 4", "step4", [
                    ROW_FIELD([
                        TEXT_AREA_FIELD("Icon", "icon"),
                        TEXT_AREA_FIELD("Titel", "title"),
                        TEXT_AREA_FIELD("Text", "text")
                    ])
                ])
            ])
        ]),

        NAMED_GROUP_FIELD("Sektion 6", "testimonials", [
            COLLAPSIBLE_FIELD("Sektion 6", [
                ROW_FIELD([
                    TEXT_AREA_FIELD("Titel", "title"),
                    TEXT_AREA_FIELD("Untertitel", "subtitle"),
                    TEXT_AREA_FIELD("Text", "text")
                ]),

                NAMED_GROUP_FIELD("Bewertung 1", "testimonial1", [
                    ROW_FIELD([TEXT_AREA_FIELD("Verfasser", "author"), TEXT_AREA_FIELD("Position", "position")]),

                    TEXT_AREA_FIELD("Text", "text"),

                    SELECT_FIELD("Sterne", "stars", "1", [
                        {
                            label: "1",
                            value: "1"
                        },
                        {
                            label: "2",
                            value: "2"
                        },
                        {
                            label: "3",
                            value: "3"
                        },
                        {
                            label: "4",
                            value: "4"
                        },
                        {
                            label: "5",
                            value: "5"
                        },
                        {
                            label: "6",
                            value: "6"
                        },
                        {
                            label: "7",
                            value: "7"
                        },
                        {
                            label: "8",
                            value: "8"
                        },
                        {
                            label: "9",
                            value: "9"
                        },
                        {
                            label: "10",
                            value: "10"
                        }
                    ])
                ]),

                NAMED_GROUP_FIELD("Bewertung 2", "testimonial2", [
                    ROW_FIELD([TEXT_AREA_FIELD("Verfasser", "author"), TEXT_AREA_FIELD("Position", "position")]),

                    TEXT_AREA_FIELD("Text", "text"),

                    SELECT_FIELD("Sterne", "stars", "1", [
                        {
                            label: "1",
                            value: "1"
                        },
                        {
                            label: "2",
                            value: "2"
                        },
                        {
                            label: "3",
                            value: "3"
                        },
                        {
                            label: "4",
                            value: "4"
                        },
                        {
                            label: "5",
                            value: "5"
                        },
                        {
                            label: "6",
                            value: "6"
                        },
                        {
                            label: "7",
                            value: "7"
                        },
                        {
                            label: "8",
                            value: "8"
                        },
                        {
                            label: "9",
                            value: "9"
                        },
                        {
                            label: "10",
                            value: "10"
                        }
                    ])
                ]),

                NAMED_GROUP_FIELD("Bewertung 3", "testimonial3", [
                    ROW_FIELD([TEXT_AREA_FIELD("Verfasser", "author"), TEXT_AREA_FIELD("Position", "position")]),

                    TEXT_AREA_FIELD("Text", "text"),

                    SELECT_FIELD("Sterne", "stars", "1", [
                        {
                            label: "1",
                            value: "1"
                        },
                        {
                            label: "2",
                            value: "2"
                        },
                        {
                            label: "3",
                            value: "3"
                        },
                        {
                            label: "4",
                            value: "4"
                        },
                        {
                            label: "5",
                            value: "5"
                        },
                        {
                            label: "6",
                            value: "6"
                        },
                        {
                            label: "7",
                            value: "7"
                        },
                        {
                            label: "8",
                            value: "8"
                        },
                        {
                            label: "9",
                            value: "9"
                        },
                        {
                            label: "10",
                            value: "10"
                        }
                    ])
                ])
            ])
        ]),

        NAMED_GROUP_FIELD("Sektion 7", "faq", [
            COLLAPSIBLE_FIELD("Sektion 7", [
                ROW_FIELD([
                    TEXT_AREA_FIELD("Titel", "title"),
                    TEXT_AREA_FIELD("Untertitel", "subtitle"),
                    TEXT_AREA_FIELD("Text", "text")
                ]),

                ARRAY_FIELD("Fragen und Antworten", "faqs", [
                    ROW_FIELD([TEXT_AREA_FIELD("Frage", "question"), TEXT_AREA_FIELD("Antwort", "answer")])
                ])
            ])
        ]),

        NAMED_GROUP_FIELD("Sektion 8", "contact", [
            COLLAPSIBLE_FIELD("Sektion 8", [
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
