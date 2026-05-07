import { GetPayload } from "@/payload/utilities/config/GetPayload"

import { ViewAnimation } from "../ViewAnimation"

export const Statistics = async () => {
    const payload = await GetPayload()

    const landingPage = await payload.findGlobal({
        slug: "LandingPage"
    })

    return (
        <section className="hidden w-full md:block">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-12 px-3 pt-25">
                <ViewAnimation type="Rightwards" delay={600}>
                    <div className="flex h-20 w-60 flex-col items-center gap-1 text-center md:flex-1">
                        <h3 className="leading-lg text-[48px] font-semibold">
                            {landingPage?.statistics?.statistic1?.value}
                        </h3>

                        <h2 className="mb-1 font-semibold">{landingPage?.statistics?.statistic1?.title}</h2>

                        <p className="leading-[28px] font-medium text-[#4A5565]">
                            {landingPage?.statistics?.statistic1?.text}
                        </p>
                    </div>
                </ViewAnimation>

                <ViewAnimation type="Rightwards" delay={400}>
                    <div className="flex h-20 w-60 flex-col items-center gap-1 text-center md:flex-1">
                        <h3 className="leading-lg text-[48px] font-semibold">
                            {landingPage?.statistics?.statistic2?.value}
                        </h3>

                        <h2 className="mb-1 font-semibold">{landingPage?.statistics?.statistic2?.title}</h2>

                        <p className="leading-[28px] font-medium text-[#4A5565]">
                            {landingPage?.statistics?.statistic2?.text}
                        </p>
                    </div>
                </ViewAnimation>

                <ViewAnimation type="Rightwards" delay={200}>
                    <div className="flex h-20 w-60 flex-col items-center gap-1 text-center md:flex-1">
                        <h3 className="leading-lg text-[48px] font-semibold">
                            {landingPage?.statistics?.statistic3?.value}
                        </h3>

                        <h2 className="mb-1 font-semibold">{landingPage?.statistics?.statistic3?.title}</h2>

                        <p className="leading-[28px] font-medium text-[#4A5565]">
                            {landingPage?.statistics?.statistic3?.text}
                        </p>
                    </div>
                </ViewAnimation>

                <ViewAnimation type="Rightwards" delay={0}>
                    <div className="flex h-20 w-60 flex-col items-center gap-1 text-center md:flex-1">
                        <h3 className="leading-lg text-[48px] font-semibold">
                            {landingPage?.statistics?.statistic4?.value}
                        </h3>

                        <h2 className="mb-1 font-semibold">{landingPage?.statistics?.statistic4?.title}</h2>

                        <p className="leading-[28px] font-medium text-[#4A5565]">
                            {landingPage?.statistics?.statistic4?.text}
                        </p>
                    </div>
                </ViewAnimation>
            </div>
        </section>
    )
}
