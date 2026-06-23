import type { ContentBlock } from "./types"

export type AboutPageContent = {
    title?: string | null
    description?: string | null
    blocks?: ContentBlock[] | null
}
