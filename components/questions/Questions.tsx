import { GetPayload } from "@/payload/utilities/config/GetPayload"

import { ViewAnimation } from "../ViewAnimation"
import { QuestionCard } from "./QuestionCard"

export const Questions = async () => {
    const payload = await GetPayload()

    const landingPage = await payload.findGlobal({
        slug: "LandingPage"
    })

    return (
        <section className="w-full">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-3 pt-50">
                <ViewAnimation type="Upwards">
                    <h2 className="font-semibold text-[#2177E8] uppercase">{landingPage?.faq?.title}</h2>
                </ViewAnimation>

                <h3 className="text-center text-[40px] leading-[44px]">{landingPage?.faq?.subtitle}</h3>

                <p className="w-full text-center text-xl leading-[33px] font-medium text-[#4A5565] md:w-12/20">
                    {landingPage?.faq?.text}
                </p>

                <ol className="mt-20 flex w-full flex-col gap-2.5 md:w-2/3">
                    {landingPage?.faq?.faqs?.map((faq) => (
                        <QuestionCard key={faq?.id} question={faq?.question ?? ""} answer={faq?.answer ?? ""} />
                    ))}
                </ol>
            </div>
        </section>
    )
}
