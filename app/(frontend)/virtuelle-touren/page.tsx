import { Metadata } from "next"

import { Contact } from "@/components/contact/Contact"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { PageAtmosphere } from "@/components/layout/PageAtmosphere"
import { GetPayload } from "@/payload/utilities/config/GetPayload"

import { List } from "./_components/List"

export const metadata: Metadata = {
    title: "Virtuelle Touren | PunktWolke Hamm",
    description:
        "Entdecken Sie Orte und Objekte in immersiven 360°-Touren – interaktiv, detailreich und jederzeit erlebbar.",
    keywords: "PunktWolke Hamm, Virtuelle Touren, 360°-Ansicht, Drohnen, Immersive Tour",
    openGraph: {
        title: "Virtuelle Touren | PunktWolke Hamm",
        description:
            "Entdecken Sie Orte und Objekte in immersiven 360°-Touren – interaktiv, detailreich und jederzeit erlebbar."
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

            <PageAtmosphere
                eyebrow="360° Erlebnisse"
                title="Virtuelle Touren aus der Luft"
                subtitle="Immersive Rundgänge, die Räume, Gebäude und Areale erlebbar machen – interaktiv, präzise und jederzeit teilbar."
            >
                <List data={content} />
            </PageAtmosphere>

            <Contact />
            <Footer />
        </>
    )
}

export default Page
