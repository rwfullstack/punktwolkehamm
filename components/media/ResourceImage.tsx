import Image from "next/image"

import { getResourceUrl } from "@/lib/getResourceUrl"
import { Resource } from "@/payload/payload-types"

const VARIANT_SIZES = {
    hero: "100vw",
    block: "(max-width: 768px) 100vw, 50vw",
    gallery: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    card: "(max-width: 768px) 100vw, 33vw",
    inline: "(max-width: 768px) 100vw, 80vw"
} as const

export type ResourceImageVariant = keyof typeof VARIANT_SIZES

type ResourceImageProperties = {
    resource?: Resource | null
    url?: string | null
    alt?: string
    variant?: ResourceImageVariant
    priority?: boolean
    fill?: boolean
    className?: string
    width?: number
    height?: number
}

const isDevelopment = process.env.NODE_ENV === "development"

export const ResourceImage = ({
    resource,
    url,
    alt,
    variant = "inline",
    priority = false,
    fill = false,
    className,
    width,
    height
}: ResourceImageProperties) => {
    const src = getResourceUrl(url ?? resource?.url)

    if (!src) {
        return null
    }

    const resolvedAlt = alt ?? resource?.alt ?? "Alternative Text"
    const resolvedWidth = width ?? resource?.width ?? 1920
    const resolvedHeight = height ?? resource?.height ?? 1080
    const sizes = VARIANT_SIZES[variant]

    if (fill) {
        return (
            <Image
                src={src}
                alt={resolvedAlt}
                fill
                sizes={sizes}
                priority={priority}
                unoptimized={isDevelopment}
                className={className}
            />
        )
    }

    return (
        <Image
            src={src}
            alt={resolvedAlt}
            width={resolvedWidth}
            height={resolvedHeight}
            sizes={sizes}
            priority={priority}
            unoptimized={isDevelopment}
            className={className}
        />
    )
}
