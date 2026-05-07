import { CheckCircle, Heart } from "lucide-react"

import { GetPayload } from "@/payload/utilities/config/GetPayload"

export const Statistics = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "AgriculturePage"
    })

    return (
        <section className="w-full py-30">
            <div className="mx-auto flex max-w-7xl flex-col gap-x-10 gap-y-5 px-3 md:flex-row">
                <div className="flex flex-3 flex-col gap-5">
                    <h2 className="font-semibold text-[#2177E8] uppercase">{content?.information?.title}</h2>

                    <h3 className="text-3xl md:text-4xl">{content?.information?.subtitle}</h3>

                    {content?.information?.texts?.map((text) => (
                        <p className="text-md text-[#4A5565]" key={text?.id}>
                            {text?.text}
                        </p>
                    ))}

                    <ol className="mt-5 flex flex-col gap-4">
                        {content?.information?.details?.map((detail) => (
                            <li className="flex items-center gap-3" key={detail?.id}>
                                <CheckCircle className="size-6 shrink-0 text-[#2177E8]" />

                                <p className="text-md">{detail?.detail}</p>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="flex flex-2 flex-col gap-5 self-start rounded-3xl border border-gray-100 bg-[#2177E8]/20 p-5 px-8 py-12 shadow-md transition-all duration-300 ease-in-out hover:scale-102 hover:border-[#2177E8]/50 hover:shadow-lg">
                    <Heart className="size-18 rounded-xl bg-[#2177E8]/10 p-4 text-[#2177E8]" />

                    <h3 className="text-xl font-semibold">{content?.information?.block?.title}</h3>

                    <p className="text-md text-[#4A5565]">{content?.information?.block?.subtitle}</p>

                    <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
                        <div className="flex flex-col items-center gap-1 rounded-xl bg-white py-4">
                            <h4 className="text-3xl font-semibold text-[#2177E8]">
                                {content?.information?.block?.statistic1?.name}
                            </h4>

                            <p className="font-medium text-[#4A5565]">
                                {content?.information?.block?.statistic1?.value}
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-1 rounded-xl bg-white py-4">
                            <h4 className="text-3xl font-semibold text-[#2177E8]">
                                {content?.information?.block?.statistic2?.name}
                            </h4>

                            <p className="font-medium text-[#4A5565]">
                                {content?.information?.block?.statistic2?.value}
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-1 rounded-xl bg-white py-4">
                            <h4 className="text-3xl font-semibold text-[#2177E8]">
                                {content?.information?.block?.statistic3?.name}
                            </h4>

                            <p className="font-medium text-[#4A5565]">
                                {content?.information?.block?.statistic3?.value}
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-1 rounded-xl bg-white py-4">
                            <h4 className="text-3xl font-semibold text-[#2177E8]">
                                {content?.information?.block?.statistic4?.name}
                            </h4>

                            <p className="font-medium text-[#4A5565]">
                                {content?.information?.block?.statistic4?.value}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
