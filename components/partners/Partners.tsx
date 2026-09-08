"use client"

import Image from "next/image"
import Marquee from "react-fast-marquee"

const LOGOS = [
    {
        src: "/Gemini_Generated_Image_fmz13lfmz13lfmz1-removebg.png",
        alt: "Partner Logo"
    },
    {
        src: "/csm_Logo_BTB_600px_0d2d5f9b71.png",
        alt: "BTB Logo"
    },
    {
        src: "/cropped-Logo-removebgnnn.png",
        alt: "Partner Logo"
    },
    {
        src: "/nanane.jpg.jpeg",
        alt: "Partner Logo"
    }
]

export const Partners = () => {
    return (
        <section className="w-full bg-transparent pt-14 pb-6 md:pt-20">
            <Marquee className="w-full" speed={35} gradient={false} pauseOnHover autoFill>
                {LOGOS.map((logo) => (
                    <div key={logo.src} className="mx-10 flex h-14 items-center justify-center md:mx-14 md:h-16">
                        <Image
                            className="h-full w-auto max-w-36 object-contain opacity-80 md:max-w-44"
                            src={logo.src}
                            alt={logo.alt}
                            width={200}
                            height={80}
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    )
}
