import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"

import { Resource } from "@/payload/payload-types"

export type ContentBlockLayout = "textOnly" | "imageLeft" | "imageRight"

export type ContentBlock = {
    id?: string | null
    layout?: ContentBlockLayout | null
    content?: SerializedEditorState | null
    image?: (string | null) | Resource
}
