import { Metadata } from "next"

import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { GetPayload } from "@/payload/utilities/config/GetPayload"
import { TextPageContentConverter } from "@/components/converters/TextPageContentConverter"
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"
import { RichText } from "@/components/RichText"

export const metadata: Metadata = {
    title: "Datenschutz | PunktWolke Hamm",
    description: "Hier finden Sie alle wichtigen Informationen zum Datenschutz auf unserer Website. ",
    keywords:
        "PunktWolke Hamm, Drohnenservices, Drohnen, Hamm, Drohnenflüge, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme",
    openGraph: {
        title: "PunktWolke Hamm - Drohnenservices",
        description: "Hier finden Sie alle wichtigen Informationen zum Datenschutz auf unserer Website. "
    }
}

const Page = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "PrivacyPage"
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
