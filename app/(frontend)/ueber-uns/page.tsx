import { ArrowRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { GetPayload } from "@/payload/utilities/config/GetPayload"
import { TextPageContentConverter } from "@/components/converters/TextPageContentConverter"
import { RichText } from "@/components/RichText"
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Über uns | PunktWolke Hamm",
    description: "Hier finden Sie alle wichtigen Informationen zu unserer Firma.",
    keywords:
        "PunktWolke Hamm, Drohnenservices, Drohnen, Hamm, Drohnenflüge, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme",
    openGraph: {
        title: "PunktWolke Hamm - Drohnenservices",
        description: "Das Impressum für PunktWolke Hamm. Hier finden Sie alle wichtigen Informationen zu unserer Firma."
    }
}

const Page = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "AboutPage"
    })

    return (
        <>
            <Header />

            <main className="w-full bg-linear-to-r from-[#053070] to-[#0D083F] py-40 text-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3">
                    <RichText data={content?.content as SerializedEditorState} converter={TextPageContentConverter} />
                </div>
            </main>

            <Footer margin={false} />
        </>
    )
}

export default Page
