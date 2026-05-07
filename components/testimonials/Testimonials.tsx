import { Quote, Star, StarHalf } from "lucide-react"

import { GetPayload } from "@/payload/utilities/config/GetPayload"

import { ViewAnimation } from "../ViewAnimation"

export const Testimonials = async () => {
    const payload = await GetPayload()

    const landingPage = await payload.findGlobal({
        slug: "LandingPage"
    })

    return (
        <section className="w-full">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-3 pt-50">
                <ViewAnimation type="Upwards">
                    <h2 className="font-semibold text-[#2177E8] uppercase">{landingPage?.testimonials?.title}</h2>
                </ViewAnimation>

                <h3 className="text-center text-[40px] leading-[44px]">{landingPage?.testimonials?.subtitle}</h3>

                <p className="w-full text-center text-xl leading-[33px] font-medium text-[#4A5565] md:w-12/20">
                    {landingPage?.testimonials?.text}
                </p>

                <div className="mt-20 grid w-full grid-cols-1 gap-x-5 gap-y-2.5 md:grid-cols-3">
                    <ViewAnimation type="Rightwards" delay={400}>
                        <div className="relative row-span-1 flex flex-col gap-8 rounded-[20px] bg-[#F8F9FA] p-7.5 shadow-md transition-all duration-250 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                            <Quote className="absolute top-7.5 right-7.5 size-8 text-[#2177E8]/80" />

                            <div className="flex items-center gap-0.5">
                                {(() => {
                                    const rating = Number(landingPage?.testimonials?.testimonial1?.stars ?? 10)
                                    const fullStars = Math.floor(rating / 2)
                                    const hasHalfStar = rating % 2 === 1

                                    const stars: ("full" | "half")[] = [
                                        ...Array(fullStars).fill("full"),
                                        ...(hasHalfStar ? ["half"] : [])
                                    ]

                                    return stars.map((type, index) => (
                                        <ViewAnimation key={index} type="Leftwards" delay={750 + index * 100}>
                                            {type === "full" ? (
                                                <Star className="size-5 fill-[#2177E8] text-[#2177E8]" />
                                            ) : (
                                                <StarHalf className="size-5 fill-[#2177E8] text-[#2177E8]" />
                                            )}
                                        </ViewAnimation>
                                    ))
                                })()}
                            </div>

                            <q className="text-[#4A5565] italic">{landingPage?.testimonials?.testimonial1?.text}</q>

                            <div className="flex flex-col gap-0.5">
                                <h5 className="font-medium">{landingPage?.testimonials?.testimonial1?.author}</h5>

                                <p className="text-[#4A5565]">{landingPage?.testimonials?.testimonial1?.position}</p>
                            </div>
                        </div>
                    </ViewAnimation>

                    <ViewAnimation type="Rightwards" delay={200}>
                        <div className="relative row-span-1 flex flex-col gap-8 rounded-[20px] bg-[#F8F9FA] p-7.5 shadow-md transition-all duration-250 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                            <Quote className="absolute top-7.5 right-7.5 size-8 text-[#2177E8]/80" />

                            <div className="flex items-center gap-0.5">
                                {(() => {
                                    const rating = Number(landingPage?.testimonials?.testimonial2?.stars ?? 10)
                                    const fullStars = Math.floor(rating / 2)
                                    const hasHalfStar = rating % 2 === 1

                                    const stars: ("full" | "half")[] = [
                                        ...Array(fullStars).fill("full"),
                                        ...(hasHalfStar ? ["half"] : [])
                                    ]

                                    return stars.map((type, index) => (
                                        <ViewAnimation key={index} type="Leftwards" delay={750 + index * 100}>
                                            {type === "full" ? (
                                                <Star className="size-5 fill-[#2177E8] text-[#2177E8]" />
                                            ) : (
                                                <StarHalf className="size-5 fill-[#2177E8] text-[#2177E8]" />
                                            )}
                                        </ViewAnimation>
                                    ))
                                })()}
                            </div>

                            <q className="text-[#4A5565] italic">{landingPage?.testimonials?.testimonial2?.text}</q>

                            <div className="flex flex-col gap-0.5">
                                <h5 className="font-medium">{landingPage?.testimonials?.testimonial2?.author}</h5>

                                <p className="text-[#4A5565]">{landingPage?.testimonials?.testimonial2?.position}</p>
                            </div>
                        </div>
                    </ViewAnimation>

                    <ViewAnimation type="Rightwards" delay={0}>
                        <div className="relative row-span-1 flex flex-col gap-8 rounded-[20px] bg-[#F8F9FA] p-7.5 shadow-md transition-all duration-250 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                            <Quote className="absolute top-7.5 right-7.5 size-8 text-[#2177E8]/80" />

                            <div className="flex items-center gap-0.5">
                                {(() => {
                                    const rating = Number(landingPage?.testimonials?.testimonial3?.stars ?? 10)
                                    const fullStars = Math.floor(rating / 2)
                                    const hasHalfStar = rating % 2 === 1

                                    const stars: ("full" | "half")[] = [
                                        ...Array(fullStars).fill("full"),
                                        ...(hasHalfStar ? ["half"] : [])
                                    ]

                                    return stars.map((type, index) => (
                                        <ViewAnimation key={index} type="Leftwards" delay={750 + index * 100}>
                                            {type === "full" ? (
                                                <Star className="size-5 fill-[#2177E8] text-[#2177E8]" />
                                            ) : (
                                                <StarHalf className="size-5 fill-[#2177E8] text-[#2177E8]" />
                                            )}
                                        </ViewAnimation>
                                    ))
                                })()}
                            </div>

                            <q className="text-[#4A5565] italic">{landingPage?.testimonials?.testimonial3?.text}</q>

                            <div className="flex flex-col gap-0.5">
                                <h5 className="font-medium">{landingPage?.testimonials?.testimonial3?.author}</h5>

                                <p className="text-[#4A5565]">{landingPage?.testimonials?.testimonial3?.position}</p>
                            </div>
                        </div>
                    </ViewAnimation>
                </div>
            </div>
        </section>
    )
}
