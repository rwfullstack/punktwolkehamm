import type { CollectionConfig } from "payload"

import { Collection_Options } from "../utilities/collections/Collection"
import { CONTENT_BLOCKS_FIELD } from "../utilities/fields/ContentBlockFields"
import { TEXT_AREA_FIELD } from "../utilities/fields/TextAreaField"
import { TEXT_FIELD, TEXT_FIELD_OPTIONS } from "../utilities/fields/TextField"
import { revalidateSite } from "../utilities/revalidate"

export const InfoPages: CollectionConfig = Collection_Options(
    "InfoPages",
    {
        singular: "Info Seite",
        plural: "InfoSeiten"
    },
    {
        admin: {
            useAsTitle: "title",
            defaultColumns: ["title", "path", "updatedAt"],
            group: "Unterseiten"
        },

        access: {
            read: () => true
        },

        hooks: {
            beforeValidate: [
                ({ data }) => {
                    if (data?.path && typeof data.path === "string") {
                        data.path = data.path.replace(/^\/+|\/+$/g, "")
                    }

                    return data
                }
            ],

            afterChange: [
                async ({ doc }) => {
                    if (doc?.path) {
                        await revalidateSite(`/${doc.path}`)
                    }
                }
            ],

            afterDelete: [
                async ({ doc }) => {
                    if (doc?.path) {
                        await revalidateSite(`/${doc.path}`)
                    }
                }
            ]
        }
    },
    [
        TEXT_FIELD("Titel", "title"),

        TEXT_FIELD_OPTIONS("Pfad", "path", {
            required: true,
            unique: true,
            admin: {
                description: "URL-Pfad ohne führenden Slash, z. B. meine-seite oder info/ueber-uns"
            }
        }),

        TEXT_AREA_FIELD("Beschreibung (SEO)", "description"),

        CONTENT_BLOCKS_FIELD
    ]
)
