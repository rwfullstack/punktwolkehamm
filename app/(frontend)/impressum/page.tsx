import { Metadata } from "next"

import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { GetPayload } from "@/payload/utilities/config/GetPayload"
import { TextPageContentConverter } from "@/components/converters/TextPageContentConverter"
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"
import { RichText } from "@/components/RichText"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Impressum | PunktWolke Hamm",
    description: "Das Impressum für PunktWolke Hamm. Hier finden Sie alle wichtigen Informationen zu unserer Firma.",
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
        slug: "ImprintPage"
    })

    return (
        <>
            <Header />

            <main className="w-full bg-linear-to-r from-[#053070] to-[#0D083F] py-40 text-white">
                <div className="mx-auto max-w-7xl flex-col gap-3 px-3">
                    <RichText data={content?.content as SerializedEditorState} converter={TextPageContentConverter} />
                </div>
            </main>

            <Footer margin={false} />
        </>
    )
}

export default Page
