export type { ContentBlock, ContentBlockLayout } from "../content-blocks/types"

export type InfoPageLayout = import("../content-blocks/types").ContentBlockLayout

export type InfoPageBlock = import("../content-blocks/types").ContentBlock

export type InfoPage = {
    id: string
    title?: string | null
    path: string
    description?: string | null
    blocks?: InfoPageBlock[] | null
    updatedAt: string
    createdAt: string
}
