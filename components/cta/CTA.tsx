import Link from "next/link"

import { HeroBackgroundImage } from "@/components/media/HeroBackgroundImage"
import { Resource } from "@/payload/payload-types"
import { GetPayload } from "@/payload/utilities/config/GetPayload"

import { DynamicIcon } from "../DynamicIcon"
import { ScrollButton } from "../ScrollButton"

export const CTA = async () => {
    const payload = await GetPayload()

    const landingPage = await payload.findGlobal({
        slug: "LandingPage",
        depth: 1
    })

    return (
        <section className="relative flex h-dvh w-full items-center justify-center bg-[#053070]">
            <div className="absolute inset-0">
                <HeroBackgroundImage
                    desktop={landingPage?.cta?.image as Resource}
                    mobile={landingPage?.cta?.imageMobile as Resource}
                    priority
                />
            </div>

            <div className="absolute top-0 left-0 size-full bg-[#001147]/39"></div>

            <div className="z-10001 mx-auto flex w-full max-w-7xl flex-col items-start gap-8 px-3 md:items-center">
                <h1
                    className="text-[36px] leading-[39px] font-semibold text-white md:text-center md:text-[64px] md:leading-[69px]"
                    dangerouslySetInnerHTML={{ __html: landingPage?.cta?.heading ?? "" }}
                ></h1>

                <p className="w-full text-xl leading-[28px] text-white md:w-4/7 md:text-center">
                    {landingPage?.cta?.text}
                </p>

                <div className="flex items-center justify-center gap-3">
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

                    <ScrollButton />
                </div>
            </div>
        </section>
    )
}
