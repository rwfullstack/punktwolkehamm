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
import { List } from "./_components/List"
import { GetPayload } from "@/payload/utilities/config/GetPayload"

export const metadata: Metadata = {
    title: "Virtuelle Touren | PunktWolke Hamm",
    description: "Entdecken Sie die Welt aus unserer Perspektive. Virtuelle Touren mit 360°-Ansichten und 8K-Qualität.",
    keywords: "PunktWolke Hamm, Virtuelle Touren, 360°-Ansicht, 8K-Qualität",
    openGraph: {
        title: "Virtuelle Touren | PunktWolke Hamm",
        description:
            "Entdecken Sie die Welt aus unserer Perspektive. Virtuelle Touren mit 360°-Ansichten und 8K-Qualität."
    }
}

const Page = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "ToursPage"
    })

    return (
        <>
            <Header />

            <main className="w-full bg-linear-to-r from-[#053070] to-[#0D083F] py-40 text-white">
                <div className="mx-auto flex max-w-7xl gap-16 gap-y-8 px-3">
                    <List data={content} />
                </div>
            </main>

            <Contact />
            <Footer />
        </>
    )
}

export default Page
