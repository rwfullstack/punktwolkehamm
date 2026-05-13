import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "../DynamicIcon"
import { ViewAnimation } from "../ViewAnimation"

type Properties = {
    name: string
    text: string
    image: string
    alt: string
    icon: string
    href: string
    services: string[]
}

export const ServiceCard = ({ name, text, image, alt, icon, href, services }: Properties) => {
    return (
        <ViewAnimation className="max-md:px-1 max-md:pb-3" type="Rightwards">
            <Link href={href} className="block">
                <div className="group/card relative flex-col overflow-hidden rounded-[20px] shadow-md transition-all duration-250 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                    <div className="absolute top-5 left-6 z-1999 flex size-12 items-center justify-center rounded-xl bg-[#2177E8]/70 text-white">
                        <DynamicIcon icon={icon} />
                    </div>

                    <Image
                        className="h-55 w-full object-center transition-transform duration-250 ease-in-out group-hover/card:scale-105"
                        src={image}
                        alt={alt}
                        width={1920}
                        height={1080}
                    />

                    <div className="flex flex-col gap-3 bg-[#F9FAFB] px-6 py-5">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold">{name}</h3>

                            <Link href={href} className="hidden">
                                <button className="flex size-6 cursor-pointer items-center justify-center transition-transform duration-250 ease-in-out group-hover/card:text-[#2177E8]">
                                    <ArrowUpRight />
                                </button>
                            </Link>
                        </div>

                        <p className="leading-[25px] font-medium text-[#4A5565]">{text}</p>

                        <ol className="flex w-max flex-col gap-1.5">
                            {services.map((service) => (
                                <li key={service} className="w-max rounded-lg bg-[#2177E8]/20 px-2 py-1 text-[#2177E8]">
                                    {service}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </Link>
        </ViewAnimation>
    )
}
