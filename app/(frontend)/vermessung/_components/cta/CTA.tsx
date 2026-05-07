import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/components/DynamicIcon"
import { Resource } from "@/payload/payload-types"
import { GetPayload } from "@/payload/utilities/config/GetPayload"

export const CTA = async () => {
    const payload = await GetPayload()

    const landingPage = await payload.findGlobal({
        slug: "MeasurementPage"
    })

    return (
        <section className="relative flex h-dvh w-full items-center">
            <Image
                className="absolute top-0 left-0 hidden size-full object-cover md:block"
                src={"https://punktwolkehamm.de" + ((landingPage?.cta?.image as Resource)?.url ?? "")}
                alt={(landingPage?.cta?.image as Resource)?.alt ?? "Alternative Text"}
                width={1920}
                height={1080}
            />

            <Image
                className="absolute top-0 left-0 block size-full object-cover md:hidden"
                src={"https://punktwolkehamm.de" + ((landingPage?.cta?.imageMobile as Resource)?.url ?? "")}
                alt={(landingPage?.cta?.imageMobile as Resource)?.alt ?? "Alternative Text"}
                width={1920}
                height={1080}
            />

            <div className="absolute top-0 left-0 size-full bg-[#001147]/39"></div>

            <div className="z-10001 mx-auto flex max-w-7xl flex-1 flex-col justify-center gap-4 px-3 md:gap-8">
                <div className="w-max rounded-full bg-[#2177E8]/50 px-5 py-2.5 font-medium text-white">
                    <h1>{landingPage?.cta?.name}</h1>
                </div>

                <h2 className="w-2/3 text-[36px] leading-[39px] font-semibold text-white md:w-full md:text-[54px] md:leading-[54px]">
                    {landingPage?.cta?.title}
                </h2>

                <p className="w-full text-lg leading-[28px] font-medium text-white md:w-2/3 md:text-xl md:leading-[33px]">
                    {landingPage?.cta?.subtitle}
                </p>

                <div className="flex items-center gap-3">
                    <Link href="/kontakt">
                        <button className="flex h-12 cursor-pointer items-center gap-2 rounded-xl bg-[#2177E8] px-5 font-medium text-white shadow-md transition-all duration-250 hover:scale-105 hover:shadow-lg">
                            <span>{landingPage?.cta?.appointmentButton?.text}</span>

                            <DynamicIcon
                                className="size-4"
                                icon={landingPage?.cta?.appointmentButton?.icon}
                                strokeWidth={2.5}
                            />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
