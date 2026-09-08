import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"

import { TextPageContentConverter } from "@/components/converters/TextPageContentConverter"
import { ResourceImage } from "@/components/media/ResourceImage"
import { RichText } from "@/components/RichText"
import { ViewAnimation } from "@/components/ViewAnimation"
import { Resource } from "@/payload/payload-types"
import type { ContentBlock } from "@/payload/utilities/content-blocks/types"

type ContentBlockItemProperties = {
    block: ContentBlock
    index: number
}

const ContentBlockItem = ({ block, index }: ContentBlockItemProperties) => {
    const content = (
        <RichText data={block.content as SerializedEditorState} converter={TextPageContentConverter} />
    )

    if (block.layout === "textOnly") {
        return (
            <ViewAnimation type="Upwards" delay={index * 100} className="w-full">
                <div className="flex flex-col gap-3">{content}</div>
            </ViewAnimation>
        )
    }

    const image = block.image as Resource | null | undefined

    const imageElement = (
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl md:aspect-16/10">
            <ResourceImage resource={image} variant="block" fill className="object-cover" />
        </div>
    )

    if (block.layout === "imageLeft") {
        return (
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-8">
                <ViewAnimation type="Leftwards" delay={index * 100} className="w-full">
                    {imageElement}
                </ViewAnimation>
                <ViewAnimation type="Rightwards" delay={index * 100 + 80} className="w-full">
                    <div className="flex flex-col gap-3">{content}</div>
                </ViewAnimation>
            </div>
        )
    }

    return (
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-8">
            <ViewAnimation type="Leftwards" delay={index * 100} className="w-full">
                <div className="flex flex-col gap-3">{content}</div>
            </ViewAnimation>
            <ViewAnimation type="Rightwards" delay={index * 100 + 80} className="w-full">
                {imageElement}
            </ViewAnimation>
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
        <div className="flex w-full flex-col gap-10 md:gap-12">
            {blocks.map((block, index) => (
                <ContentBlockItem key={block.id ?? undefined} block={block} index={index} />
            ))}
        </div>
    )
}
