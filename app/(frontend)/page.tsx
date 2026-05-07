import { Metadata } from "next"

import { About } from "@/components/about/About"
import { Contact } from "@/components/contact/Contact"
import { CTA } from "@/components/cta/CTA"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { Process } from "@/components/process/Process"
import { Questions } from "@/components/questions/Questions"
import { Services } from "@/components/services/Services"
import Marquee from "react-fast-marquee"
import Link from "next/link"
import Image from "next/image"
import { Move3d, Move3dIcon, Play } from "lucide-react"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "PunktWolke Hamm - Drohnenservices",
    description:
        "Von Vermessung über Inspektion bis hin zu atemberaubenden Luftaufnahmen - wir liefern präzise Daten und beeindruckende Bilder aus der Vogelperspektive.",
    keywords:
        "PunktWolke Hamm, Drohnenservices, Drohnen, Hamm, Drohnenflüge, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme",
    openGraph: {
        title: "PunktWolke Hamm - Drohnenservices",
        description: "PunktWolke Hamm - Drohnenservices"
    }
}

const Page = async () => {
    return (
        <>
            <Header />
            <CTA />

            {/*<Marquee className="mt-10 h-32 w-full overflow-hidden" pauseOnHover speed={100} autoFill>
                <Link className="flex h-full items-center justify-center px-8" href="https://www.btb-berlin.de/">
                    <Image className="size-32 object-contain" src="/BTB_SVG.svg" alt="Logo" width={300} height={300} />
                </Link>

                <Link className="flex h-full items-center justify-center px-8" href="/">
                    <Image
                        className="size-32 object-contain"
                        src="/Copter_Transparent.png"
                        alt="Logo"
                        width={300}
                        height={300}
                    />
                </Link>
            </Marquee>
            */}

            <Services />
            <About />

            <Process />
            {/* <Testimonials /> */}
            <Questions />
            {/* <Statistics /> */}
            <Contact />
            <Footer />
        </>
    )
}

export default Page
