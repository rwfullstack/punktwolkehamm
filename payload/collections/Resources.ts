import type { CollectionConfig } from "payload"
import { Collection_Options } from "../utilities/collections/Collection"
import { TEXT_FIELD } from "../utilities/fields/TextField"

export const Resources: CollectionConfig = Collection_Options(
    "Resources",
    {
        singular: "Ressource",
        plural: "Ressourcen"
    },
    {
        upload: true,

        access: {
            read: () => true
        }
    },
    [TEXT_FIELD("Alternativer Text", "alt")]
)
