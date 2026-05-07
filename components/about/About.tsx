import { Check } from "lucide-react"

import { GetPayload } from "@/payload/utilities/config/GetPayload"

import { DynamicIcon } from "../DynamicIcon"
import { ViewAnimation } from "../ViewAnimation"

export const About = async () => {
    const payload = await GetPayload()

    const landingPage = await payload.findGlobal({
        slug: "LandingPage"
    })

    return (
        <section className="w-full pt-50">
            <div className="mx-auto flex max-w-7xl flex-col px-3 md:flex-row">
                <div className="flex flex-1 flex-col gap-5 pr-12">
                    <ViewAnimation type="Upwards">
                        <h2 className="font-semibold text-[#2177E8] uppercase">{landingPage?.about?.title}</h2>
                    </ViewAnimation>

                    <h3 className="text-[40px] leading-[44px]">{landingPage?.about?.subtitle}</h3>

                    <p className="text-lg leading-8 font-medium text-[#4A5565]">{landingPage?.about?.text}</p>

                    <ol className="mt-5 flex flex-col gap-5">
                        {landingPage?.about?.benefits?.map((benefit) => (
                            <ViewAnimation type="Rightwards" key={benefit?.id}>
                                <li className="flex items-center gap-2.5">
                                    <Check
                                        className="size-7 shrink-0 self-start rounded-full bg-[#2177E8]/80 p-1 text-white"
                                        strokeWidth={1.5}
                                    />

                                    <p className="text-lg font-medium">{benefit?.text}</p>
                                </li>
                            </ViewAnimation>
                        ))}
                    </ol>
                </div>

                <div className="flex flex-1 shrink-0 flex-col justify-center gap-5 pt-10 md:pt-0">
                    {landingPage?.about?.data?.map((data) => (
                        <ViewAnimation className="max-md:px-1 max-md:pb-3" type="Leftwards" key={data?.id}>
                            <div className="flex items-center gap-4 rounded-[20px] bg-[#F9FAFB] px-3 py-4.5 shadow-md transition-all duration-250 ease-in-out hover:-translate-y-1 hover:shadow-lg md:gap-6 md:px-7.5">
                                <div className="flex size-16 shrink-0 items-center justify-center rounded-[20px] bg-[#2177E8]/20">
                                    <DynamicIcon
                                        className="size-8 text-[#2177E8]"
                                        icon={data?.icon ?? ""}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <div className="flex-1 flex-col gap-1">
                                    <h3 className="font-semibold">{data?.title}</h3>

                                    <p className="leading-4.5 font-medium text-[#4A5565]">{data?.text}</p>
                                </div>
                            </div>
                        </ViewAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}
