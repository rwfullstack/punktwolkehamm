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
    title: "Datenschutz | PunktWolke Hamm",
    description: "Hier finden Sie alle wichtigen Informationen zum Datenschutz auf unserer Website.",
    keywords:
        "PunktWolke Hamm, Datenschutz, Drohnenservices, Privacy",
    openGraph: {
        title: "Datenschutz | PunktWolke Hamm",
        description: "Hier finden Sie alle wichtigen Informationen zum Datenschutz auf unserer Website."
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

            <PageAtmosphere
                eyebrow="Rechtliches"
                title="Datenschutz"
                subtitle="Wie wir mit Ihren Daten umgehen – klar, nachvollziehbar und DSGVO-konform."
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
