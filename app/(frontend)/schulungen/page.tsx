import { Metadata } from "next"

import { Contact } from "@/components/contact/Contact"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"

import { Benefits } from "./_components/benefits/Benefits"
import { CTA } from "./_components/cta/CTA"
import { Details } from "./_components/details/Details"
import { Gallery } from "./_components/gallery/Gallery"
import { RichText } from "./_components/richtext/RichText"

export const metadata: Metadata = {
    title: "Schulungen | PunktWolke Hamm",
    description:
        "Professionelle Drohnenschulungen und Weiterbildungen bei PunktWolke Hamm. Praxisnahe Ausbildung für sicheren und effizienten Drohneneinsatz.",
    keywords:
        "PunktWolke Hamm, Drohnenschulungen, Drohnen Ausbildung, Schulungen Hamm, Drohnenkurs, Drohnenweiterbildung",
    openGraph: {
        title: "Schulungen | PunktWolke Hamm",
        description:
            "Professionelle Drohnenschulungen und Weiterbildungen bei PunktWolke Hamm. Praxisnahe Ausbildung für sicheren und effizienten Drohneneinsatz."
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
            <Contact />
            <Footer />
        </>
    )
}

export default Page
