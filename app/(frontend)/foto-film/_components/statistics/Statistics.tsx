import { CheckCircle } from "lucide-react"

import { DynamicIcon } from "@/components/DynamicIcon"
import { GetPayload } from "@/payload/utilities/config/GetPayload"

export const Statistics = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "ImagePage"
    })

    return (
        <section className="w-full py-30">
            <div className="mx-auto flex max-w-7xl flex-col gap-x-10 gap-y-5 px-3 md:flex-row">
                <div className="flex flex-3 flex-col gap-5">
                    <h2 className="font-semibold text-[#2177E8] uppercase">{content?.usages?.title}</h2>

                    <h3 className="text-3xl md:text-4xl">{content?.usages?.subtitle}</h3>

                    <p className="text-md text-[#4A5565]">{content?.usages?.text}</p>

                    <ol className="mt-3 flex flex-col gap-4">
                        {content?.usages?.benefits?.map((benefit) => (
                            <li className="flex items-center gap-3" key={benefit?.id}>
                                <CheckCircle className="size-6 shrink-0 text-[#2177E8]" />

                                <p className="text-md">{benefit?.benefit}</p>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="flex flex-2 flex-col gap-5 self-start">
                    <ol className="grid gap-5">
                        {content?.usages?.blocks?.map((block) => (
                            <li
                                className="flex flex-col gap-5 rounded-[20px] border border-gray-100 px-8 py-10 shadow-md transition-all duration-300 ease-in-out hover:scale-102 hover:border-[#2177E8]/50 hover:shadow-lg"
                                key={block?.id}
                            >
                                <DynamicIcon
                                    icon={block?.icon as string}
                                    className="size-14 rounded-xl bg-[#2177E8]/10 p-4 text-[#2177E8]"
                                    strokeWidth={2.5}
                                />

                                <h3 className="text-xl font-semibold">{block?.title}</h3>

                                <p className="text-md text-[#4A5565]">{block?.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    )
}
