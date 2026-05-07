import Image from "next/image"

import { DynamicIcon } from "@/components/DynamicIcon"
import { GetPayload } from "@/payload/utilities/config/GetPayload"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

export const Details = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "ImagePage"
    })

    return (
        <section className="w-full py-30">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-3">
                <h2 className="font-semibold text-[#2177E8] uppercase">{content?.details?.title}</h2>

                <h3 className="text-center text-3xl md:w-2/3 md:text-4xl">{content?.details?.subtitle}</h3>

                <ol className="mt-10 grid w-full gap-5 md:grid-cols-2">
                    {content?.details?.details?.map((detail) => (
                        <li
                            className="flex flex-col gap-5 rounded-[20px] border border-gray-100 px-8 py-10 shadow-md transition-all duration-300 ease-in-out hover:scale-102 hover:border-[#2177E8]/50 hover:shadow-lg"
                            key={detail?.id}
                        >
                            <div className="flex items-center justify-between">
                                <DynamicIcon
                                    icon={detail?.icon as string}
                                    className="size-14 rounded-xl bg-[#2177E8]/10 p-4 text-[#2177E8]"
                                    strokeWidth={2.5}
                                />

                                {detail?.linkAvailable && (
                                    <Link
                                        className="flex items-center gap-3 rounded-xl bg-[#2177E8] px-5 py-3 text-white shadow-md transition-all duration-250 hover:scale-105 hover:shadow-lg"
                                        href={detail?.link ?? ""}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {detail?.linkText}
                                        <ArrowRight />
                                    </Link>
                                )}
                            </div>

                            <h3 className="text-xl font-semibold">{detail?.title}</h3>

                            <p className="text-md text-[#4A5565]">{detail?.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
