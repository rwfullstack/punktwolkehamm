import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"

import { TextPageContentConverter } from "@/components/converters/TextPageContentConverter"
import { ResourceImage } from "@/components/media/ResourceImage"
import { RichText } from "@/components/RichText"
import { Resource } from "@/payload/payload-types"
import type { ContentBlock } from "@/payload/utilities/content-blocks/types"

type ContentBlockItemProperties = {
    block: ContentBlock
}

const ContentBlockItem = ({ block }: ContentBlockItemProperties) => {
    const content = (
        <RichText
            data={block.content as SerializedEditorState}
            converter={TextPageContentConverter}
        />
    )

    if (block.layout === "textOnly") {
        return <div className="flex flex-col gap-3">{content}</div>
    }

    const image = block.image as Resource | null | undefined

    const imageElement = (
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl md:aspect-16/10">
            <ResourceImage resource={image} variant="block" fill className="object-cover" />
        </div>
    )

    if (block.layout === "imageLeft") {
        return (
            <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:items-center md:gap-8">
                {imageElement}
                <div className="flex flex-col gap-3">{content}</div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:items-center md:gap-8">
            <div className="flex flex-col gap-3">{content}</div>
            {imageElement}
        </div>
    )
}

type ContentBlocksProperties = {
    blocks?: ContentBlock[] | null
}

export const ContentBlocks = ({ blocks }: ContentBlocksProperties) => {
    if (!blocks?.length) {
        return null
    }

    return (
        <div className="flex flex-col gap-10 md:gap-12">
            {blocks.map((block) => (
                <ContentBlockItem key={block.id ?? undefined} block={block} />
            ))}
        </div>
    )
}
