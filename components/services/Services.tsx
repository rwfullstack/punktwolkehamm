import Image from "next/image"
import Link from "next/link"

import { Resource } from "@/payload/payload-types"
import { GetPayload } from "@/payload/utilities/config/GetPayload"

import { ViewAnimation } from "../ViewAnimation"
import { ServiceCard } from "./ServiceCard"

export const Services = async () => {
    const payload = await GetPayload()

    const landingPage = await payload.findGlobal({
        slug: "LandingPage"
    })

    return (
        <section className="w-full pt-30">
            <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-3" id="services">
                <div className="top-0 bottom-3 z-2000 flex w-full flex-col items-center gap-5 bg-white py-5 md:sticky">
                    <ViewAnimation type="Upwards">
                        <h2 className="font-semibold text-[#2177E8] uppercase">{landingPage?.services?.title}</h2>
                    </ViewAnimation>

                    <h3 className="w-full text-center text-[40px] leading-[44px] md:w-1/2">
                        {landingPage?.services?.subtitle}
                    </h3>

                    <p className="w-full text-center text-xl leading-[33px] font-medium text-[#4A5565] md:w-12/20">
                        {landingPage?.services?.text}
                    </p>
                </div>

                <div className="grid w-full grid-cols-1 gap-x-5 gap-y-7.5 px-2 pb-3 md:grid-cols-3">
                    <ServiceCard
                        name={landingPage?.services?.service1?.name ?? ""}
                        text={landingPage?.services?.service1?.text ?? ""}
                        image={
                            "https://punktwolkehamm.de" +
                            ((landingPage?.services?.service1?.image as Resource)?.url ?? "")
                        }
                        alt={(landingPage?.services?.service1?.image as Resource)?.alt ?? "Alternative Text"}
                        icon={landingPage?.services?.service1?.icon ?? ""}
                        href={"/vermessung"}
                        services={landingPage?.services?.service1?.services?.map((service) => service.name ?? "") ?? []}
                    />

                    <ServiceCard
                        name={landingPage?.services?.service2?.name ?? ""}
                        text={landingPage?.services?.service2?.text ?? ""}
                        image={
                            "https://punktwolkehamm.de" +
                            ((landingPage?.services?.service2?.image as Resource)?.url ?? "")
                        }
                        alt={(landingPage?.services?.service2?.image as Resource)?.alt ?? "Alternative Text"}
                        icon={landingPage?.services?.service2?.icon ?? ""}
                        href={"/inspektion"}
                        services={landingPage?.services?.service2?.services?.map((service) => service.name ?? "") ?? []}
                    />

                    <ServiceCard
                        name={landingPage?.services?.service3?.name ?? ""}
                        text={landingPage?.services?.service3?.text ?? ""}
                        image={
                            "https://punktwolkehamm.de" +
                            ((landingPage?.services?.service3?.image as Resource)?.url ?? "")
                        }
                        alt={(landingPage?.services?.service3?.image as Resource)?.alt ?? "Alternative Text"}
                        icon={landingPage?.services?.service3?.icon ?? ""}
                        href={"/foto-film"}
                        services={landingPage?.services?.service3?.services?.map((service) => service.name ?? "") ?? []}
                    />

                    <ServiceCard
                        name={landingPage?.services?.service4?.name ?? ""}
                        text={landingPage?.services?.service4?.text ?? ""}
                        image={
                            "https://punktwolkehamm.de" +
                            ((landingPage?.services?.service4?.image as Resource)?.url ?? "")
                        }
                        alt={(landingPage?.services?.service4?.image as Resource)?.alt ?? "Alternative Text"}
                        icon={landingPage?.services?.service4?.icon ?? ""}
                        href={"/landwirtschaft"}
                        services={landingPage?.services?.service4?.services?.map((service) => service.name ?? "") ?? []}
                    />

                    <ServiceCard
                        name={landingPage?.services?.service5?.name ?? ""}
                        text={landingPage?.services?.service5?.text ?? ""}
                        image={
                            "https://punktwolkehamm.de" +
                            ((landingPage?.services?.service5?.image as Resource)?.url ?? "")
                        }
                        alt={(landingPage?.services?.service5?.image as Resource)?.alt ?? "Alternative Text"}
                        icon={landingPage?.services?.service5?.icon ?? ""}
                        href={"/behoerden"}
                        services={landingPage?.services?.service5?.services?.map((service) => service.name ?? "") ?? []}
                    />
                </div>
            </div>
        </section>
    )
}
