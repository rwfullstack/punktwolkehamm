import { Metadata } from "next"

import { Contact } from "@/components/contact/Contact"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"

import { CTA } from "./_components/cta/CTA"
import { Details } from "./_components/details/Details"
import { Gallery } from "./_components/gallery/Gallery"
import { RichText } from "./_components/richtext/RichText"
import { Statistics } from "./_components/statistics/Statistics"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Foto & Film | PunktWolke Hamm",
    description:
        "Foto & Film Perspektiven, die bewegen Professionelle Luftaufnahmen für Film, Foto und Marketing mit cineastischer Qualität. Wir setzen Ihre Projekte, Produkte und Veranstaltungen spektakulär in Szene - mit kreativer Vision und technischer Perfektion, die Ihre Zielgruppe begeistert und Ihre Botschaft unvergesslich macht.",
    keywords:
        "PunktWolke Hamm, Drohnenservices, Drohnen, Hamm, Drohnenflüge, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme",
    openGraph: {
        title: "PunktWolke Hamm - Drohnenservices",
        description:
            "Foto & Film Perspektiven, die bewegen Professionelle Luftaufnahmen für Film, Foto und Marketing mit cineastischer Qualität. Wir setzen Ihre Projekte, Produkte und Veranstaltungen spektakulär in Szene - mit kreativer Vision und technischer Perfektion, die Ihre Zielgruppe begeistert und Ihre Botschaft unvergesslich macht."
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
            {/* <Equipment /> */}
            <Statistics />
            <Contact />
            <Footer />
        </>
    )
}

export default Page
