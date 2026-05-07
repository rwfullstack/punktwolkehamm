import { Metadata } from "next"

import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Impressum | PunktWolke Hamm",
    description: "Das Impressum für PunktWolke Hamm. Hier finden Sie alle wichtigen Informationen zu unserer Firma.",
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
                        <h1 className="text-4xl font-bold">Impressum</h1>
                    </li>

                    <li className="spacing-y-1">
                        <h2 className="pt-3 pb-1 text-xl font-bold">Angaben gemäß § 5 TMG</h2>

                        <p>PunktWolke Hamm</p>
                        <p>Inhaber: Marcus Hamm</p>
                        <p>Steinstraße 76a</p>
                        <p>12307 Berlin</p>
                    </li>

                    <li className="spacing-y-1">
                        <h2 className="pt-3 pb-1 text-xl font-bold">Kontakt</h2>

                        <p>Telefon: +49 176 632 99 777</p>
                        <p>E-Mail: info@punktwolkehamm.de</p>
                        <p>Website: www.punktwolkehamm.de</p>
                    </li>

                    <li className="spacing-y-1">
                        <h2 className="pt-3 pb-1 text-xl font-bold">Umsatzsteuer</h2>

                        <p>Steuernummer: 21/329/00617</p>
                    </li>

                    <li className="spacing-y-1">
                        <h2 className="pt-3 pb-1 text-xl font-bold">Berufshaftpflichtversicherung</h2>

                        <p>
                            Versichert durch die degenia Versicherungsdienst AG 63-63a in 55545 Bad Kreuznach. Der
                            räumliche Geltungsbereich der Versicherung umfasst den Betrieb von unbemannten
                            Luftfahrtsystemen (Drohnen) auf unserem Planeten (ausgenommen USA/US-Territorien, Kanada und
                            Mittelerde)
                        </p>

                        <p>
                            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV Marcus Hamm, Steinstraße 76a, 12307
                            Berlin.
                        </p>
                    </li>

                    <li className="spacing-y-1">
                        <h2 className="pt-3 pb-1 text-xl font-bold">Haftung für Inhalte</h2>

                        <p>
                            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
                            den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich jedoch nicht
                            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                            Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                            hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                            einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender
                            Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
                        </p>
                    </li>

                    <li className="spacing-y-1">
                        <h2 className="pt-3 pb-1 text-xl font-bold">Haftung für Links</h2>

                        <p>
                            Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
                            Einfluss habe. Deshalb kann ich für diese fremden Inhalte keine Gewähr übernehmen. Für
                            Inhalte verlinkter Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                            Bei Verlinkung wurden die Seiten auf mögliche Rechtsverstöße überprüft; rechtswidrige
                            Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle
                            verlinkter Seiten ist jedoch ohne konkrete Anhaltspunkte nicht zumutbar. Bei Bekanntwerden
                            von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
                        </p>
                    </li>

                    <li className="spacing-y-1">
                        <h2 className="pt-3 pb-1 text-xl font-bold">Urheberrecht</h2>

                        <p>
                            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen
                            dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die
                            Vervielfältigung, Bearbeitung, Verbreitung sowie jede Art der Verwertung außerhalb der
                            Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                            Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                            Gebrauch gestattet.
                        </p>
                    </li>
                </ol>
            </main>

            <Footer margin={false} />
        </>
    )
}

export default Page
