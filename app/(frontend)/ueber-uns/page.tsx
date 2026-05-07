import { ArrowRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Über uns | PunktWolke Hamm",
    description: "Hier finden Sie alle wichtigen Informationen zu unserer Firma.",
    keywords:
        "PunktWolke Hamm, Drohnenservices, Drohnen, Hamm, Drohnenflüge, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme",
    openGraph: {
        title: "PunktWolke Hamm - Drohnenservices",
        description: "Das Impressum für PunktWolke Hamm. Hier finden Sie alle wichtigen Informationen zu unserer Firma."
    }
}

const Page = async () => {
    return (
        <>
            <Header />

            <main className="w-full bg-linear-to-r from-[#053070] to-[#0D083F] py-40 text-white">
                <ol className="mx-auto flex max-w-7xl flex-col gap-5 px-3">
                    <li className="">
                        <h1 className="text-4xl font-bold">Über uns</h1>
                    </li>

                    <li className="spacing-y-1">
                        <h2 className="pt-3 pb-1 text-xl font-bold">Digitalisierung der gebauten Welt und Umwelt</h2>

                        <p>
                            Mein Name ist Marcus Hamm (Jahrgang 1985). Als Gründer von Punktwolke Hamm treibt mich die
                            Faszination an, die Realität präzise in die digitale Welt zu übersetzen. Ob Gebäude, Gelände
                            oder komplexe Strukturen - ich schaffe digitale Zwillinge, die als verlässliche Grundlage
                            für Planung, Analyse und Dokumentation dienen.
                        </p>

                        <p>
                            Von meinem Standort in Berlin aus bin ich in der gesamten Region und bundesweit im Einsatz.
                            Ich schätze die Dynamik und die speziellen Anforderungen urbaner Projekte in der Stadt
                            ebenso wie die Weitläufigkeit des Berliner Umlands, das mir den idealen Raum für
                            großflächige Vermessungsflüge und spezialisierte Einsätze bietet.
                        </p>
                    </li>

                    <li className="spacing-y-1">
                        <h2 className="pt-3 pb-1 text-xl font-bold">Breit aufgestellt: Technik für alle Fälle</h2>

                        <p>
                            Präzise Vermessung: Georeferenzierte Punktwolken und digitale Geländemodelle als Basis für
                            Bauwesen und Architektur.
                        </p>

                        <p>
                            Thermografie: Einsatz von Wärmebildkameras zur Inspektion von Photovoltaikanlagen oder zur
                            Identifikation von Wärmebrücken an Gebäuden.
                        </p>

                        <p>
                            Behörden & Sicherheit: Unterstützung im Katastrophenschutz sowie die hochpräzise digitale
                            Dokumentation von Unfallstellen zur späteren Nachbearbeitung.
                        </p>

                        <p>
                            Land- & Forstwirtschaft: Einsatz von Multi-Spektralkameras zur Vitalitätsprüfung von
                            Beständen oder für präzise Analysen in der Forstwirtschaft.
                        </p>

                        <p>
                            Durch den Einsatz modernster RTK-Technik und verschiedener Sensoren liefere ich Daten, die
                            genau dort ansetzen, wo Standardlösungen aufhören. Selbstverständlich besitze ich alle
                            notwendigen EU-Fernpilotenzeugnisse für einen verantwortungsbewussten und rechtssicheren
                            Betrieb.
                        </p>

                        <p>
                            Perspektivwechsel: Vom Digitalen Zwilling zum Rundgang Ergänzend zur technischen Vermessung
                            biete ich im Bereich „Fotofinishing“ virtuelle 360°-Rundgänge an.
                        </p>

                        <p>
                            Was ursprünglich aus einem privaten Projekt im Familienkreis entstand, hat sich zu einem
                            professionellen Service entwickelt. Ich mache Räume digital begehbar - eine ideale Lösung
                            für soziale Einrichtungen wie Kitas, aber auch für Gewerbeimmobilien, die sich modern
                            präsentieren möchten.
                        </p>
                    </li>

                    <li className="spacing-y-1">
                        <h2 className="pt-3 pb-1 text-xl font-bold">Mein Versprechen</h2>

                        <p>
                            Ich stehe für eine unkomplizierte, ehrliche Kommunikation und eine gewissenhafte Umsetzung.
                            Mein Ziel ist es nicht nur, Technik in die Luft zu bringen, sondern Ihnen exakt die
                            Datensätze zu liefern, die Sie für Ihre Arbeit brauchen - zentimetergenau und zuverlässig.
                        </p>
                    </li>

                    <h2 className="pt-3 pb-1 text-xl font-bold">Bereit für den digitalen Zwilling Ihres Projekts?</h2>

                    <Link href="/kontakt">
                        <button className="flex h-10.5 cursor-pointer items-center gap-2 rounded-xl bg-[#2177E8] px-4 text-white shadow-md transition-all duration-250 ease-in-out hover:scale-105 hover:shadow-lg">
                            <span>Termin anfragen</span>

                            <ArrowRight className="size-4" strokeWidth={2.5} />
                        </button>
                    </Link>
                </ol>
            </main>

            <Footer margin={false} />
        </>
    )
}

export default Page
