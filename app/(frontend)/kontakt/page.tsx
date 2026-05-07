"use client"

import { Clock, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"

import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { zodResolver } from "@hookform/resolvers/zod"

import { BasicRequest } from "./_components/BasicRequest"
import { DetailedRequest } from "./_components/DetailedRequest"

const formSchema = z.object({
    firstName: z.string().min(3, "Bitte gebe einen gültigen Vornamen ein."),
    lastName: z.string().min(3, "Bitte gebe einen gültigen Nachnamen ein."),
    email: z.email("Bitte gebe eine gültige E-Mail Adresse ein."),
    message: z.string().min(10, "Bitte gebe eine Nachricht mit mindestens 10 Zeichen ein.")
})

const Page = () => {
    const [messageSent, setMessageSent] = useState(false)

    const form = useForm({
        resolver: zodResolver(formSchema),

        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        },

        mode: "onChange"
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(data)
        })

        if (response.ok) {
            setMessageSent(true)
        }
    }

    return (
        <>
            <Header />

            <main className="w-full bg-linear-to-r from-[#053070] to-[#0D083F] py-40 text-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-x-16 gap-y-8 px-3 md:flex-row">
                    <div className="flex flex-3 flex-col gap-5">
                        <BasicRequest />
                        <DetailedRequest />
                    </div>

                    <div className="flex flex-2 flex-col gap-7.5">
                        <h1 className="text-3xl font-bold">Kontakt</h1>

                        <div className="flex gap-5">
                            <MapPin className="size-14 shrink-0 rounded-xl bg-[#2177E8] p-3.5" />

                            <div className="flex flex-col">
                                <h2 className="mb-2 font-semibold">Adresse</h2>

                                <p>PunktWolke Hamm</p>
                                <p>Steinstraße 76a</p>
                                <p>12307 Berlin</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <Phone className="size-14 shrink-0 rounded-xl bg-[#2177E8] p-3.5" />

                            <div className="flex flex-col">
                                <h2 className="mb-2 font-semibold">Telefon</h2>

                                <p>+49 176 632 99 777</p>
                                <p>Mo-Fr. 08:00 - 17:00</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <Mail className="size-14 shrink-0 rounded-xl bg-[#2177E8] p-3.5" />

                            <div className="flex flex-col">
                                <h2 className="mb-2 font-semibold">E-Mail</h2>

                                <p>info@punktwolkehamm.de</p>
                                <p>behoerden@punktwolkehamm.de</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <Clock className="size-14 shrink-0 rounded-xl bg-[#2177E8] p-3.5" />

                            <div className="flex flex-col">
                                <h2 className="mb-2 font-semibold">Einsatzzeiten</h2>

                                <p>Flüge: Täglich nach Absprache</p>
                                <p>Notfall-Hotline: 24/7</p>
                            </div>
                        </div>

                        <iframe
                            className="aspect-video rounded-xl"
                            src="https://www.google.com/maps?q=Steinstraße+76a,+Berlin&output=embed&zoom=15&maptype=roadmap"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </div>
            </main>

            <Footer margin={false} />
        </>
    )
}

export default Page
