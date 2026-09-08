import { Metadata } from "next"

import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { PageAtmosphere } from "@/components/layout/PageAtmosphere"
import { TextPagePanel } from "@/components/layout/TextPagePanel"
import { TextPageContentConverter } from "@/components/converters/TextPageContentConverter"
import { RichText } from "@/components/RichText"
import { GetPayload } from "@/payload/utilities/config/GetPayload"
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"

export const metadata: Metadata = {
    title: "Impressum | PunktWolke Hamm",
    description: "Das Impressum für PunktWolke Hamm. Hier finden Sie alle wichtigen Informationen zu unserer Firma.",
    keywords:
        "PunktWolke Hamm, Drohnenservices, Drohnen, Hamm, Drohnenflüge, Drohnenbeobachtung, Drohnenaufnahme",
    openGraph: {
        title: "Impressum | PunktWolke Hamm",
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

            <PageAtmosphere
                eyebrow="Rechtliches"
                title="Impressum"
                subtitle="Angaben gemäß gesetzlicher Pflicht – transparent und auf einen Blick."
            >
                <TextPagePanel>
                    <RichText data={content?.content as SerializedEditorState} converter={TextPageContentConverter} />
                </TextPagePanel>
            </PageAtmosphere>

            <Footer margin={false} />
        </>
    )
}

export default Page
