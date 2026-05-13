import { Resource } from "@/payload/payload-types"
import { DefaultNodeTypes, SerializedBlockNode } from "@payloadcms/richtext-lexical"
import { JSXConvertersFunction, LinkJSXConverter } from "@payloadcms/richtext-lexical/react"
import Image from "next/image"

type NodeTypes = DefaultNodeTypes

export const TextPageContentConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
    ...defaultConverters,

    heading: ({ node, nodesToJSX }) => {
        const text = nodesToJSX({ nodes: node.children })

        if (node.tag === "h1") {
            return <h1 className="mb-5 text-4xl font-bold">{text}</h1>
        }

        if (node.tag === "h2") {
            return <h2 className="pt-8 pb-1 text-xl font-bold">{text}</h2>
        }

        if (node.tag === "h3") {
            return <h3 className="pt-5 pb-1 text-lg font-bold">{text}</h3>
        }

        return <h4 className="pt-3 pb-1 text-base font-semibold">{text}</h4>
    },

    paragraph: ({ node, nodesToJSX }) => {
        const text = nodesToJSX({ nodes: node.children })

        return <p className="pt-1">{text}</p>
    },

    list: ({ node, nodesToJSX }) => {
        return <ol className="pt-5">{nodesToJSX({ nodes: node.children })}</ol>
    },

    listitem: ({ node, nodesToJSX }) => {
        const text = nodesToJSX({ nodes: node.children })

        return <li className="list-inside list-disc pt-1">{text}</li>
    },

    upload: ({ node, nodesToJSX }) => {
        const image = node.value as Resource

        if (!image?.url) return undefined

        return (
            <Image
                className="rounded-3xl"
                src={"https://punktwolkehamm.de" + image.url}
                alt={image.alt ?? "Alternative Text"}
                width={image.width ?? 1920}
                height={image.height ?? 1080}
            />
        )
    },

    horizontalrule: () => {
        return <hr className="my-4 bg-white" />
    }
})
