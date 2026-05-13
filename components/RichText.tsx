import { JSXConvertersFunction, RichText as RichTextConverter } from "@payloadcms/richtext-lexical/react"
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"
import { HTMLAttributes } from "react"
import { DefaultNodeTypes } from "@payloadcms/richtext-lexical"

type NodeTypes = DefaultNodeTypes

type Properties = {
    data: SerializedEditorState
    converter?: JSXConvertersFunction<NodeTypes>
} & HTMLAttributes<HTMLDivElement>

export function RichText({ data, className, converter, ...properties }: Properties) {
    return <RichTextConverter {...properties} className={className} converters={converter} data={data} />
}
