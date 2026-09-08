import { CheckCircle } from "lucide-react"

import { ViewAnimation } from "@/components/ViewAnimation"
import { GetPayload } from "@/payload/utilities/config/GetPayload"

export const Statistics = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "MeasurementPage"
    })

    return (
        <section className="w-full py-30">
            <div className="mx-auto flex max-w-7xl flex-col gap-x-20 gap-y-5 px-3 md:flex-row">
                <div className="flex flex-3 flex-col gap-5">
                    <h2 className="font-semibold text-[#2177E8] uppercase">{content?.information?.title}</h2>

                    <h3 className="text-3xl md:text-4xl">{content?.information?.subtitle}</h3>

                    {content?.information?.texts?.map((text) => (
                        <p key={text?.id} className="text-md text-[#4A5565]">
                            {text?.text}
                        </p>
                    ))}

                    <ol className="mt-10 flex flex-col gap-7.5">
                        {content?.information?.details?.map((detail, index) => (
                            <li key={detail?.id}>
                                <ViewAnimation type="Rightwards" delay={index * 80} className="h-full w-full">
                                    <div className="flex justify-between gap-3 border-b border-gray-200 pb-2">
                                        <p className="font-medium text-[#4A5565]">{detail?.name}</p>
                                        <p className="font-semibold text-[#2177E8]">{detail?.value}</p>
                                    </div>
                                </ViewAnimation>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="mt-10 flex flex-2 flex-col gap-5 self-start">
                    <ViewAnimation type="Leftwards" delay={100} className="h-full w-full">
                        <div className="flex flex-col gap-5 rounded-[20px] border border-gray-100 px-7 py-8 shadow-md transition-all duration-300 ease-in-out hover:scale-102 hover:border-[#2177E8]/50 hover:shadow-lg">
                            <h4 className="text-xl font-semibold">{content?.information?.block?.title}</h4>

                            <p className="text-md text-[#4A5565]">{content?.information?.block?.subtitle}</p>

                            <ol className="mt-5 flex flex-col gap-5">
                                {content?.information?.block?.list?.map((list, index) => (
                                    <li key={list?.id}>
                                        <ViewAnimation type="Rightwards" delay={index * 80} className="h-full w-full">
                                            <div className="flex gap-2.5">
                                                <CheckCircle className="size-5 shrink-0 text-[#2177E8]" />
                                                <p>{list?.text}</p>
                                            </div>
                                        </ViewAnimation>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </ViewAnimation>
                </div>
            </div>
        </section>
    )
}
