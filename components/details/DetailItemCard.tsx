import { DynamicIcon } from "@/components/DynamicIcon"
import { ViewAnimation } from "@/components/ViewAnimation"
import { InfoPage } from "@/payload/payload-types"

import { DetailItemLink } from "./DetailItemLink"

export type DetailItem = {
    id?: string | null
    icon?: string | null
    title?: string | null
    text?: string | null
    linkAvailable?: boolean | null
    linkText?: string | null
    linkIcon?: string | null
    infoPage?: (string | null) | InfoPage
}

type DetailItemCardProperties = {
    detail: DetailItem
    delay?: number
}

export const DetailItemCard = ({ detail, delay = 0 }: DetailItemCardProperties) => {
    return (
        <li>
            <ViewAnimation type="Rightwards" delay={delay} className="h-full w-full">
                <div className="flex h-full flex-col gap-5 rounded-[20px] border border-gray-100 px-8 py-10 shadow-md transition-all duration-300 ease-in-out hover:scale-102 hover:border-[#2177E8]/50 hover:shadow-lg">
                    <div className="flex items-center justify-between gap-4">
                        <DynamicIcon
                            icon={detail?.icon as string}
                            className="size-14 shrink-0 rounded-xl bg-[#2177E8]/10 p-4 text-[#2177E8]"
                            strokeWidth={2.5}
                        />

                        <DetailItemLink
                            infoPage={detail?.infoPage}
                            linkAvailable={detail?.linkAvailable}
                            linkIcon={detail?.linkIcon}
                            linkText={detail?.linkText}
                        />
                    </div>

                    <h3 className="text-xl font-semibold">{detail?.title}</h3>

                    <p className="text-md text-[#4A5565]">{detail?.text}</p>
                </div>
            </ViewAnimation>
        </li>
    )
}
