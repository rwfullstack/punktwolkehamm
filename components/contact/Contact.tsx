import { ArrowRight, AtSign, Phone } from "lucide-react"
import Link from "next/link"

export const Contact = () => {
    return (
        <section className="w-full px-3 pt-15 md:px-0 md:pt-40">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 rounded-4xl bg-linear-to-r from-[#053070] to-[#0D083F] px-3 py-20">
                <h3 className="text-center text-[40px] leading-[44px] text-white">Bereit für den nächsten Schritt?</h3>

                <p className="w-full text-center text-[20px] leading-[33px] font-light text-white md:w-1/2">
                    Lassen Sie uns gemeinsam Ihr Projekt aus einer neuen Perspektive betrachten. Kontaktieren Sie uns
                    für eine unverbindliche Beratung.
                </p>

                <Link href="/kontakt">
                    <button className="flex h-12 cursor-pointer items-center gap-2 rounded-xl bg-[#2177E8] px-5 font-medium text-white shadow-md transition-all duration-250 hover:scale-105 hover:shadow-lg">
                        <span>Termin anfragen</span>

                        <ArrowRight className="size-4" strokeWidth={2.5} />
                    </button>
                </Link>

                <div className="mt-10 flex flex-col items-center gap-x-5 gap-y-2.5 md:flex-row">
                    <Link className="transition-transform duration-250 hover:scale-105" href="tel:+4917663299777">
                        <p className="flex items-center gap-2 text-white">
                            <Phone className="size-4" />
                            <span>+49 176 632 99 777</span>
                        </p>
                    </Link>

                    <Link
                        className="transition-transform duration-250 hover:scale-105"
                        href="mailto:info@punktwolkehamm.de"
                    >
                        <p className="flex items-center gap-2 text-white">
                            <AtSign className="size-4" />
                            <span>info@punktwolkehamm.de</span>
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    )
}
