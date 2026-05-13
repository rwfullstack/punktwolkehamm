import path from "path"
import { buildConfig } from "payload"
import sharp from "sharp"
import { fileURLToPath } from "url"

import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { de } from "@payloadcms/translations/languages/de"

import { Messages } from "./collections/Messages"
import { Resources } from "./collections/Resources"
import { Users } from "./collections/Users"
import { AgriculturePageGlobal } from "./globals/AgriculturePage"
import { ImagePageGlobal } from "./globals/ImagePage"
import { InspectionPageGlobal } from "./globals/InspectionPage"
import { LandingPageGlobal } from "./globals/LandingPage"
import { MeasurementPageGlobal } from "./globals/MeasurementPage"
import { OfficePageGlobal } from "./globals/OfficePage"
import { ConditionsPageGlobal } from "./globals/ConditionsPage"
import { AboutPageGlobal } from "./globals/AboutPage"
import { ImprintPageGlobal } from "./globals/ImprintPage"
import { PrivacyPageGlobal } from "./globals/PrivacyPage"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    secret: process.env.PAYLOAD_SECRET || "",

    editor: lexicalEditor(),

    typescript: {
        outputFile: path.resolve(dirname, "payload-types.ts")
    },

    globals: [
        LandingPageGlobal,
        MeasurementPageGlobal,
        InspectionPageGlobal,
        ImagePageGlobal,
        AgriculturePageGlobal,
        OfficePageGlobal,
        ConditionsPageGlobal,
        AboutPageGlobal,
        ImprintPageGlobal,
        PrivacyPageGlobal
    ],

    collections: [Users, Resources, Messages],

    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname)
        }
    },

    db: postgresAdapter({
        idType: "uuid",

        pool: {
            connectionString: process.env.DATABASE_URI || ""
        },

        generateSchemaOutputFile: path.resolve(dirname, "payload-schema.ts")
    }),

    i18n: {
        supportedLanguages: { de },
        fallbackLanguage: "de"
    },

    sharp,

    plugins: []
})
