import { Metadata } from "next"

import { Contact } from "@/components/contact/Contact"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"

import { Benefits } from "./_components/benefits/Benefits"
import { CTA } from "./_components/cta/CTA"
import { Details } from "./_components/details/Details"
import { Gallery } from "./_components/gallery/Gallery"
import { RichText } from "./_components/richtext/RichText"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Landwirtschaft | PunktWolke Hamm",
    description:
        "Innovative Drohnentechnologie im Dienst von Landwirtschaft, Tierschutz und nachhaltiger Forstwirtschaft. Von der lebensrettenden Kitzsuche über Präzisionslandwirtschaft bis zur Waldbestandsanalyse - wir verbinden modernste Technik mit ökologischer Verantwortung.",
    keywords:
        "PunktWolke Hamm, Drohnenservices, Drohnen, Hamm, Drohnenflüge, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme",
    openGraph: {
        title: "PunktWolke Hamm - Drohnenservices",
        description:
            "Innovative Drohnentechnologie im Dienst von Landwirtschaft, Tierschutz und nachhaltiger Forstwirtschaft. Von der lebensrettenden Kitzsuche über Präzisionslandwirtschaft bis zur Waldbestandsanalyse - wir verbinden modernste Technik mit ökologischer Verantwortung."
    }
}

const Page = () => {
    return (
        <>
            <Header />
            <CTA />
            <Details />
            <Gallery />
            <RichText />
            <Benefits />
            {/* <Statistics /> */}
            <Contact />
            <Footer />
        </>
    )
}

export default Page
