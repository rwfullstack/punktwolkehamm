import { Metadata } from "next"

import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Datenschutz | PunktWolke Hamm",
    description: "Hier finden Sie alle wichtigen Informationen zum Datenschutz auf unserer Website. ",
    keywords:
        "PunktWolke Hamm, Drohnenservices, Drohnen, Hamm, Drohnenflüge, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme, Drohnenbeobachtung, Drohnenaufnahme",
    openGraph: {
        title: "PunktWolke Hamm - Drohnenservices",
        description: "Hier finden Sie alle wichtigen Informationen zum Datenschutz auf unserer Website. "
    }
}

const Page = async () => {
    return (
        <>
            <Header />

            <main className="w-full bg-linear-to-r from-[#053070] to-[#0D083F] py-40 text-white">
                <ol className="mx-auto flex max-w-7xl flex-col gap-5 px-3">
                    <li className="">
                        <h1 className="text-4xl font-bold">Datenschutz</h1>
                    </li>

                    <li className="flex flex-col gap-3">
                        <h2 className="pt-3 pb-1 text-2xl font-bold">1. Datenschutz auf einen Blick</h2>

                        <h3 className="pt-5 pb-3 text-xl font-bold">Allgemeine Hinweise</h3>

                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
                            sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
                            Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
                            Datenschutzerklärung.
                        </p>

                        <h3 className="mt-2 pt-5 pb-3 text-xl font-bold">Datenerfassung auf dieser Website</h3>

                        <p className="text-md mb-2 font-semibold">
                            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                        </p>

                        <p>
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                            Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>

                        <p className="text-md mt-2 mb-2 font-semibold">Wie erfassen wir Ihre Daten?</p>

                        <p>
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
                            sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden
                            automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
                            technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                        </p>

                        <p className="text-md mt-2 mb-2 font-semibold">Wofür nutzen wir Ihre Daten?</p>

                        <p>
                            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                            gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                        </p>
                    </li>

                    <li className="flex flex-col gap-3">
                        <h2 className="pt-3 pb-1 text-2xl font-bold">
                            2. Allgemeine Hinweise und Pflichtinformationen
                        </h2>

                        <h3 className="pt-5 pb-3 text-xl font-bold">Datenschutz</h3>

                        <p>
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>

                        <h3 className="pt-5 pb-3 text-xl font-bold">Hinweis zur verantwortlichen Stelle</h3>

                        <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>

                        <p>
                            PunktWolke Hamm
                            <br />
                            Steinstraße 76a
                            <br />
                            12307 Berlin
                        </p>

                        <p>
                            Telefon: +49 176 632 99 777
                            <br />
                            E-Mail: info@punktwolkehamm.de
                        </p>
                    </li>

                    <li className="flex flex-col gap-3">
                        <h2 className="pt-3 pb-1 text-2xl font-bold">3. Datenerfassung auf dieser Website</h2>

                        <h3 className="pt-5 pb-3 text-xl font-bold">Server-Log-Dateien</h3>

                        <p>
                            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                        </p>

                        <ol className="mt-3">
                            <li className="list-inside list-disc">Browsertyp und Browserversion</li>
                            <li className="list-inside list-disc">verwendetes Betriebssystem</li>
                            <li className="list-inside list-disc">Referrer URL</li>
                            <li className="list-inside list-disc">Hostname des zugreifenden Rechners</li>
                            <li className="list-inside list-disc">Uhrzeit der Serveranfrage</li>
                            <li className="list-inside list-disc">IP-Adresse</li>
                        </ol>

                        <h3 className="pt-5 pb-3 text-xl font-bold">Kontaktformular</h3>

                        <p>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                            Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
                            nicht ohne Ihre Einwilligung weiter.
                        </p>

                        <h3 className="pt-5 pb-3 text-xl font-bold">Anfrage per E-Mail</h3>

                        <p>
                            Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus
                            hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
                            Anliegens bei uns gespeichert und verarbeitet.
                        </p>
                    </li>

                    <li className="flex flex-col gap-3">
                        <h2 className="pt-3 pb-1 text-2xl font-bold">4. Drohnenflüge und Luftaufnahmen</h2>

                        <p>
                            Bei der Durchführung von Drohnenflügen und der Erstellung von Luftaufnahmen können
                            personenbezogene Daten in Form von Bildmaterial erfasst werden. Wir halten uns dabei strikt
                            an die geltenden Datenschutzvorschriften:
                        </p>

                        <ol className="mt-3">
                            <li className="list-inside list-disc">
                                Vor Flügen über bewohntem Gebiet informieren wir betroffene Personen
                            </li>
                            <li className="list-inside list-disc">verwendetes Betriebssystem</li>
                            <li className="list-inside list-disc">
                                Personenbezogene Aufnahmen werden nur mit Einwilligung der Betroffenen veröffentlicht
                            </li>
                            <li className="list-inside list-disc">
                                Gesichter und Kennzeichen werden auf Wunsch unkenntlich gemacht
                            </li>
                            <li className="list-inside list-disc">
                                Aufnahmen werden sicher gespeichert und nach Projektabschluss gemäß Vereinbarung
                                gelöscht
                            </li>
                        </ol>
                    </li>

                    <li className="flex flex-col gap-3">
                        <h2 className="pt-3 pb-1 text-2xl font-bold">5. Ihre Rechte</h2>

                        <p>Sie haben jederzeit das Recht:</p>

                        <ol className="mt-3">
                            <li className="list-inside list-disc">
                                Auskunft über Ihre bei uns gespeicherten Daten zu erhalten
                            </li>
                            <li className="list-inside list-disc">Berichtigung unrichtiger Daten zu verlangen</li>
                            <li className="list-inside list-disc">Löschung Ihrer Daten zu verlangen</li>
                            <li className="list-inside list-disc">Die Verarbeitung einschränken zu lassen</li>
                            <li className="list-inside list-disc">Der Verarbeitung zu widersprechen</li>
                            <li className="list-inside list-disc">
                                Ihre Daten in einem strukturierten Format zu erhalten (Datenportabilität)
                            </li>
                        </ol>

                        <p>Für die Ausübung dieser Rechte wenden Sie sich bitte an: datenschutz@skyview-drohnen.de</p>
                    </li>

                    <li className="flex flex-col gap-3">
                        <h2 className="pt-3 pb-1 text-2xl font-bold">
                            6. Aktualität und Änderung dieser Datenschutzerklärung
                        </h2>

                        <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025.</p>

                        <p>
                            Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter
                            gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese
                            Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf
                            dieser Website von Ihnen abgerufen und ausgedruckt werden.
                        </p>
                    </li>
                </ol>
            </main>

            <Footer margin={false} />
        </>
    )
}

export default Page
