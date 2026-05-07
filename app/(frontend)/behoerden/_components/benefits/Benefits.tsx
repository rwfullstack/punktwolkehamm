import { CheckCircle } from "lucide-react"

import { GetPayload } from "@/payload/utilities/config/GetPayload"

export const Benefits = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "OfficePage"
    })

    return (
        <section className="w-full py-30">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-3">
                <h2 className="font-semibold text-[#2177E8] uppercase">{content?.benefits?.title}</h2>

                <h3 className="w-full text-center text-3xl md:w-2/3 md:text-4xl">{content?.benefits?.subtitle}</h3>

                <p className="text-md w-full text-center text-[#4A5565] md:w-2/3">{content?.benefits?.text}</p>

                <ol className="mt-15 grid w-full grid-cols-1 gap-5 md:w-4/5 md:grid-cols-2">
                    {content?.benefits?.benefits?.map((benefit) => (
                        <li className="flex gap-3 rounded-[20px] border border-gray-100 px-5 py-7 shadow-md transition-all duration-300 ease-in-out hover:scale-102 hover:border-[#2177E8]/50 hover:shadow-lg">
                            <CheckCircle className="size-6 shrink-0 text-[#2177E8]" />

                            <p>{benefit?.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
