"use client"

import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { PageAtmosphere } from "@/components/layout/PageAtmosphere"
import { ViewAnimation } from "@/components/ViewAnimation"

import { BasicRequest } from "./_components/BasicRequest"
import { DetailedRequest } from "./_components/DetailedRequest"

const Page = () => {
    return (
        <>
            <Header />

            <PageAtmosphere
                eyebrow="Kontakt"
                title="Lassen Sie uns sprechen"
                subtitle="Fragen, Projekte oder Terminwünsche – wir melden uns schnell und unkompliziert zurück."
            >
                <div className="flex flex-col gap-x-16 gap-y-8 md:flex-row">
                    <div className="flex-3">
                        <ViewAnimation type="Leftwards" delay={100} className="w-full">
                            <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] backdrop-blur-md md:p-8">
                                <BasicRequest />
                                <DetailedRequest />
                            </div>
                        </ViewAnimation>
                    </div>

                    <div className="flex flex-2 flex-col gap-7.5">
                        <ViewAnimation type="Rightwards" delay={120}>
                            <div className="flex gap-5">
                                <MapPin className="size-14 shrink-0 rounded-xl bg-[#2177E8] p-3.5" />

                                <div className="flex flex-col">
                                    <h2 className="mb-2 font-semibold">Adresse</h2>

                                    <p>PunktWolke Hamm</p>
                                    <p>Steinstraße 76a</p>
                                    <p>12307 Berlin</p>
                                </div>
                            </div>
                        </ViewAnimation>

                        <ViewAnimation type="Rightwards" delay={200}>
                            <div className="flex gap-5">
                                <Phone className="size-14 shrink-0 rounded-xl bg-[#2177E8] p-3.5" />

                                <div className="flex flex-col">
                                    <h2 className="mb-2 font-semibold">Telefon</h2>

                                    <p>+49 163 7367 877</p>
                                    <p>Mo-Fr. 08:00 - 17:00</p>
                                </div>
                            </div>
                        </ViewAnimation>

                        <ViewAnimation type="Rightwards" delay={280}>
                            <div className="flex gap-5">
                                <Mail className="size-14 shrink-0 rounded-xl bg-[#2177E8] p-3.5" />

                                <div className="flex flex-col">
                                    <h2 className="mb-2 font-semibold">E-Mail</h2>

                                    <p>info@punktwolkehamm.de</p>
                                    <p>behoerden@punktwolkehamm.de</p>
                                </div>
                            </div>
                        </ViewAnimation>

                        <ViewAnimation type="Rightwards" delay={360}>
                            <div className="flex gap-5">
                                <Clock className="size-14 shrink-0 rounded-xl bg-[#2177E8] p-3.5" />

                                <div className="flex flex-col">
                                    <h2 className="mb-2 font-semibold">Einsatzzeiten</h2>

                                    <p>Flüge: Täglich nach Absprache</p>
                                    <p>Notfall-Hotline: 24/7</p>
                                </div>
                            </div>
                        </ViewAnimation>

                        <ViewAnimation type="Upwards" delay={420}>
                            <iframe
                                className="aspect-video rounded-xl border border-white/10"
                                src="https://www.google.com/maps?q=Steinstraße+76a,+Berlin&output=embed&zoom=15&maptype=roadmap"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </ViewAnimation>
                    </div>
                </div>
            </PageAtmosphere>

            <Footer margin={false} />
        </>
    )
}

export default Page
