import { AtSign, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Properties = {
    margin?: boolean
}

export const Footer = ({ margin = true }: Properties) => {
    return (
        <footer className={`w-full bg-linear-to-r from-[#053070] to-[#0D083F] py-20 ${margin ? "mt-40" : "mt-0"}`}>
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3">
                <div className="flex flex-col gap-25 pb-10 md:flex-row">
                    <div className="flex flex-1 shrink-0 flex-col gap-5">
                        <Link
                            className="flex gap-0.5 text-white transition-transform duration-250 hover:scale-105"
                            href="/"
                        >
                            <div className="flex h-16 flex-col font-light">
                                <span>Punkt</span>
                                <span className="-mt-1">Wolke</span>
                            </div>

                            <span className="text-[48px] leading-11 font-bold">HAMM</span>
                        </Link>

                        <p className="font-light text-white">
                            Ihr zuverlässiger Partner für professionelle Drohnendienstleistungen in Deutschland.
                            Präzision, Innovation und Sicherheit aus der Luft.
                        </p>

                        <div className="mt-5 flex flex-col gap-2">
                            <p className="flex gap-2 text-white">
                                <MapPin strokeWidth={1.5} className="size-5" />
                                <span>Steinstraße 76a, 12307 Berlin</span>
                            </p>

                            <Link className="flex gap-2 text-white" href="tel:+4917663299777">
                                <Phone strokeWidth={1.5} className="size-5" />
                                <span>+49 176 632 99 777</span>
                            </Link>

                            <Link className="flex gap-2 text-white" href="mailto:info@punktwolkehamm.de">
                                <AtSign strokeWidth={1.5} className="size-5" />
                                <span>info@punktwolkehamm.de</span>
                            </Link>
                        </div>
                    </div>

                    <ol className="flex flex-2">
                        <li className="flex flex-1 flex-col gap-2">
                            <h4 className="font-semibold text-white">Leistungen</h4>

                            <ol className="flex flex-col gap-1 text-white">
                                <li>
                                    <Link href="/vermessung">Vermessung</Link>
                                </li>

                                <li>
                                    <Link href="/inspektion">Inspektion</Link>
                                </li>

                                <li>
                                    <Link href="/foto-film">Foto & Film</Link>
                                </li>

                                <li>
                                    <Link href="/landwirtschaft">Landwirtschaft</Link>
                                </li>

                                <li>
                                    <Link href="/behoerden">Behörden</Link>
                                </li>
                            </ol>
                        </li>

                        <li className="flex flex-1 flex-col gap-2">
                            <h4 className="font-semibold text-white">Unternehmen</h4>

                            <ol className="flex flex-col gap-1 text-white">
                                <li>
                                    <Link href="/ueber-uns">Über uns</Link>
                                </li>

                                <li>
                                    <Link href="/kontakt">Kontakt</Link>
                                </li>
                            </ol>
                        </li>

                        <li className="flex flex-1 flex-col justify-between">
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold text-white">Rechtliches</h4>

                                <ol className="flex flex-col gap-1 text-white">
                                    <li>
                                        <Link href="/impressum">Impressum</Link>
                                    </li>

                                    <li>
                                        <Link href="/datenschutz">Datenschutz</Link>
                                    </li>

                                    <li>
                                        <Link href="/agb">AGBs</Link>
                                    </li>
                                </ol>
                            </div>

                            <Link href="https://bvcp.de/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="size-30 object-contain object-left"
                                    src="/Copter_Transparent.png"
                                    alt="Coopter"
                                    width={1920}
                                    height={1080}
                                />
                            </Link>
                        </li>
                    </ol>
                </div>

                <div className="flex justify-start border-t border-white pt-12">
                    <p className="text-center text-[16px] leading-[24px] font-medium text-white">
                        &copy; {new Date().getFullYear()} Punktwolke Hamm. Alle Rechte vorbehalten.
                    </p>
                </div>
            </div>
        </footer>
    )
}
