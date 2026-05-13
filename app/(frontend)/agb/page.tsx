import { Metadata } from "next"

import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { GetPayload } from "@/payload/utilities/config/GetPayload"
import { RichText } from "@/components/RichText"
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"
import { TextPageContentConverter } from "@/components/converters/TextPageContentConverter"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Inspektion | PunktWolke Hamm",
    description:
        "Professionelle Drohneninspektionen für Infrastruktur, Industrie und Gebäude. Wir prüfen dort, wo Menschen nicht hinkommen sollten - schnell, sicher und kosteneffizient. Mit Thermografie und hochauflösender Bildgebung erkennen wir Probleme, bevor sie zu teuren Schäden werden.",
    keywords:
        "PunktWolke Hamm, Drohnenservices, Drohnen, Hamm, Drohnenflüge, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme",
    openGraph: {
        title: "PunktWolke Hamm - Drohnenservices",
        description:
            "Professionelle Drohneninspektionen für Infrastruktur, Industrie und Gebäude. Wir prüfen dort, wo Menschen nicht hinkommen sollten - schnell, sicher und kosteneffizient. Mit Thermografie und hochauflösender Bildgebung erkennen wir Probleme, bevor sie zu teuren Schäden werden."
    }
}

const Page = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "ConditionsPage"
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
