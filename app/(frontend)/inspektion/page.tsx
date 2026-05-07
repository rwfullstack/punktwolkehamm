import { Metadata } from "next"

import { Contact } from "@/components/contact/Contact"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"

import { Benefits } from "./_components/benefits/Benefits"
import { CTA } from "./_components/cta/CTA"
import { Details } from "./_components/details/Details"
import { Gallery } from "./_components/gallery/Gallery"
import { Statistics } from "./_components/statistics/Statistics"
import { Usage } from "./_components/usage/Usage"

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

const Page = () => {
    return (
        <>
            <Header />
            <CTA />
            <Statistics />
            <Gallery />
            <Details />
            <Usage />
            <Benefits />
            <Contact />
            <Footer />
        </>
    )
}

export default Page
