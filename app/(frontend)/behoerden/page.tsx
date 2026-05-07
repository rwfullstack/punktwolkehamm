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
    title: "Behörden | PunktWolke Hamm",
    description:
        "Professionelle Drohnendienstleistungen für Behörden, Blaulichtorganisationen und öffentliche Einrichtungen. Von der Einsatzunterstützung über Personensuche bis zum Katastrophenschutz - schnell, zuverlässig, rechtssicher und mit höchsten Datenschutzstandards.",
    keywords:
        "PunktWolke Hamm, Drohnenservices, Drohnen, Hamm, Drohnenflüge, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme",
    openGraph: {
        title: "PunktWolke Hamm - Drohnenservices",
        description:
            "Professionelle Drohnendienstleistungen für Behörden, Blaulichtorganisationen und öffentliche Einrichtungen. Von der Einsatzunterstützung über Personensuche bis zum Katastrophenschutz - schnell, zuverlässig, rechtssicher und mit höchsten Datenschutzstandards."
    }
}

const Page = () => {
    return (
        <>
            <Header />
            <CTA />
            <RichText />
            <Gallery />
            <Details />
            {/* <Statistics /> */}
            <Benefits />
            <Contact />
            <Footer />
        </>
    )
}

export default Page
