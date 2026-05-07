import { GetPayload } from "@/payload/utilities/config/GetPayload"

import { DynamicIcon } from "../DynamicIcon"
import { ViewAnimation } from "../ViewAnimation"
import { Move3d, Move3dIcon, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Content } from "next/font/google"
import { Resource } from "@/payload/payload-types"

export const Process = async () => {
    const payload = await GetPayload()

    const landingPage = await payload.findGlobal({
        slug: "LandingPage"
    })

    return (
        <>
            <div className="w-full pt-50">
                <div className="mx-auto flex max-w-7xl flex-row justify-between px-3">
                    <div className="flex w-full flex-col gap-5 md:w-1/2">
                        <div className="flex w-max flex-row items-center gap-2 rounded-full border border-[#2177E8]/20 bg-[#2177E8]/20 px-4 py-3">
                            <Move3d className="size-5 text-[#2177E8]" />
                            <p className="font-medium text-[#2177E8]">Virtuelle Touren</p>
                        </div>

                        <h2 className="text-4xl leading-10 font-medium md:text-[60px] md:leading-[60px]">
                            Entdecken Sie die Welt <br />
                            <span className="text-[#2177E8]">aus unserer Perspektive.</span>
                        </h2>
                    </div>
                </div>

                <div className="relative mx-auto mt-15 aspect-video w-full max-w-7xl overflow-hidden rounded-4xl bg-black">
                    <Image
                        className="object-cover"
                        src={
                            "https://punktwolkehamm.de" + ((landingPage?.process?.previewImage as Resource)?.url ?? "")
                        }
                        alt="Logo"
                        width={1920}
                        height={1080}
                    />

                    <div className="absolute top-0 left-0 flex size-full items-center justify-center bg-linear-to-b from-[#053070]/0 via-[#0D083F]/0 to-[#0D083F] px-5 py-1.5">
                        <Link
                            className="flex size-18 items-center justify-center rounded-full bg-[#2177E8] transition-all duration-250 hover:scale-105"
                            href={landingPage?.process?.previewImageLink ?? "/"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Play className="size-10 text-white" strokeWidth={1.5} />
                        </Link>
                    </div>
                </div>
            </div>

            <section className="relative mt-55 min-h-dvh w-full bg-linear-to-r from-[#053070] to-[#0D083F] pt-5">
                <div className="top-0 mt-35 w-full bg-linear-to-r from-[#053070] to-[#0D083F] pt-5 pb-5 md:sticky">
                    <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-3">
                        <ViewAnimation type="Upwards">
                            <h2 className="font-semibold text-[#2177E8] uppercase">{landingPage?.process?.title}</h2>
                        </ViewAnimation>

                        <h3 className="text-center text-[40px] leading-[44px] font-semibold text-white">
                            {landingPage?.process?.subtitle}
                        </h3>

                        <p className="w-full text-center text-xl leading-8 text-white md:w-1/2">
                            {landingPage?.process?.text}
                        </p>
                    </div>
                </div>

                <div className="h-full w-full bg-linear-to-r from-[#053070] to-[#0D083F] pt-30 pb-35">
                    <div className="mx-auto flex max-w-7xl flex-col gap-x-6 gap-y-10 px-10 md:flex-row">
                        <ViewAnimation type="Leftwards" delay={0}>
                            <div className="group/card flex flex-1 flex-col gap-5">
                                <h4 className="text-7xl leading-17 font-bold text-white">01</h4>

                                <div className="flex size-20 items-center justify-center rounded-[20px] bg-[#2177E8]/20 transition-all duration-250 ease-in-out group-hover/card:bg-[#2177E8]/30">
                                    <DynamicIcon
                                        className="size-12 text-[#2177E8]"
                                        icon={landingPage?.process?.step1?.icon ?? ""}
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-white">
                                    {landingPage?.process?.step1?.title}
                                </h3>

                                <p className="leading-6 font-medium text-white">{landingPage?.process?.step1?.text}</p>
                            </div>
                        </ViewAnimation>

                        <ViewAnimation type="Leftwards" delay={200}>
                            <div className="group/card flex flex-1 flex-col gap-5">
                                <h4 className="text-7xl leading-17 font-bold text-white">02</h4>

                                <div className="flex size-20 items-center justify-center rounded-[20px] bg-[#2177E8]/20 transition-all duration-250 ease-in-out group-hover/card:bg-[#2177E8]/30">
                                    <DynamicIcon
                                        className="size-12 text-[#2177E8]"
                                        icon={landingPage?.process?.step2?.icon ?? ""}
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-white">
                                    {landingPage?.process?.step2?.title}
                                </h3>

                                <p className="leading-6 font-medium text-white">{landingPage?.process?.step2?.text}</p>
                            </div>
                        </ViewAnimation>

                        <ViewAnimation type="Leftwards" delay={400}>
                            <div className="group/card flex flex-1 flex-col gap-5">
                                <h4 className="text-7xl leading-17 font-bold text-white">03</h4>

                                <div className="flex size-20 items-center justify-center rounded-[20px] bg-[#2177E8]/20 transition-all duration-250 ease-in-out group-hover/card:bg-[#2177E8]/30">
                                    <DynamicIcon
                                        className="size-12 text-[#2177E8]"
                                        icon={landingPage?.process?.step3?.icon ?? ""}
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-white">
                                    {landingPage?.process?.step3?.title}
                                </h3>

                                <p className="leading-6 font-medium text-white">{landingPage?.process?.step3?.text}</p>
                            </div>
                        </ViewAnimation>

                        <ViewAnimation type="Leftwards" delay={600}>
                            <div className="group/card flex flex-1 flex-col gap-5">
                                <h4 className="text-7xl leading-17 font-bold text-white">04</h4>

                                <div className="flex size-20 items-center justify-center rounded-[20px] bg-[#2177E8]/20 transition-all duration-250 ease-in-out group-hover/card:bg-[#2177E8]/30">
                                    <DynamicIcon
                                        className="size-12 text-[#2177E8]"
                                        icon={landingPage?.process?.step4?.icon ?? ""}
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-white">
                                    {landingPage?.process?.step4?.title}
                                </h3>

                                <p className="leading-6 font-medium text-white">{landingPage?.process?.step4?.text}</p>
                            </div>
                        </ViewAnimation>
                    </div>
                </div>
            </section>
        </>
    )
}
