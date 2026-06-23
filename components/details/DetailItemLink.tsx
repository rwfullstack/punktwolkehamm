import Link from "next/link"

import { DynamicIcon } from "@/components/DynamicIcon"
import { getInfoPageHref } from "@/lib/getInfoPageHref"
import { InfoPage } from "@/payload/payload-types"

type DetailItemLinkProperties = {
    linkAvailable?: boolean | null
    linkText?: string | null
    linkIcon?: string | null
    infoPage?: (string | null) | InfoPage
}

export const DetailItemLink = ({
    linkAvailable,
    linkText,
    linkIcon,
    infoPage
}: DetailItemLinkProperties) => {
    const href = getInfoPageHref(infoPage)

    if (!linkAvailable || !href || !linkText) {
        return null
    }

    return (
        <Link
            className="flex items-center gap-3 rounded-xl bg-[#2177E8] px-5 py-3 text-white shadow-md transition-all duration-250 hover:scale-105 hover:shadow-lg"
            href={href}
        >
            <span>{linkText}</span>

            <DynamicIcon className="size-5" icon={linkIcon ?? "ArrowRight"} strokeWidth={2.5} />
        </Link>
    )
}
