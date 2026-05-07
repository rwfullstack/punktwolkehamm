"use client"

import { ArrowRight, Check, Loader2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
    business: z.string().min(3, "Bitte gib einen gültige Firmennamen ein."),
    email: z.email("Bitte gib eine gültige E-Mail Adresse ein."),
    firstName: z.string().min(3, "Bitte gib einen gültigen Vornamen ein."),
    lastName: z.string().min(3, "Bitte gib einen gültigen Nachnamen ein."),
    message: z.string().min(10, "Bitte gib eine Nachricht mit mindestens 10 Zeichen ein.")
})

export const BasicRequest = () => {
    const [messageSent, setMessageSent] = useState(false)

    const form = useForm({
        resolver: zodResolver(formSchema),

        defaultValues: {
            business: "",
            email: "",
            firstName: "",
            lastName: "",
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
        <div className="flex flex-col gap-5 rounded-2xl bg-white px-5 py-8">
            <h1 className="text-3xl font-bold text-[#2177E8]">Anfrage senden</h1>

            <FormProvider {...form}>
                <form className="flex flex-col gap-3" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-x-3 gap-y-3 md:flex-row">
                        <div className="flex flex-1 flex-col gap-1.5">
                            <label className="text-black">Firmenname</label>

                            <input
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-black outline-none"
                                type="text"
                                placeholder="Ihr Firmenname"
                                disabled={messageSent}
                                {...form.register("business")}
                            />

                            {form.formState.errors.business && (
                                <p className="text-red-500">{form.formState.errors.business.message}</p>
                            )}
                        </div>

                        <div className="flex flex-1 flex-col gap-1.5">
                            <label className="text-black">E-Mail Adresse *</label>

                            <input
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-black outline-none"
                                type="text"
                                placeholder="Ihre E-Mail Adresse"
                                disabled={messageSent}
                                {...form.register("email")}
                            />

                            {form.formState.errors.email && (
                                <p className="text-red-500">{form.formState.errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-x-3 gap-y-3 md:flex-row">
                        <div className="flex flex-1 flex-col gap-1.5">
                            <label className="text-black">Vorname *</label>

                            <input
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-black outline-none"
                                type="text"
                                placeholder="Ihr Vorname"
                                disabled={messageSent}
                                {...form.register("firstName")}
                            />

                            {form.formState.errors.firstName && (
                                <p className="text-red-500">{form.formState.errors.firstName.message}</p>
                            )}
                        </div>

                        <div className="flex flex-1 flex-col gap-1.5">
                            <label className="text-black">Nachname *</label>

                            <input
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-black outline-none"
                                type="text"
                                placeholder="Ihr Nachname"
                                disabled={messageSent}
                                {...form.register("lastName")}
                            />

                            {form.formState.errors.lastName && (
                                <p className="text-red-500">{form.formState.errors.lastName.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-black">Ihre Nachricht *</label>

                        <textarea
                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-black outline-none"
                            rows={10}
                            placeholder="Erwähnen Sie bitte um welche Leistung es sich handelt und was Sie erreichen möchten."
                            disabled={messageSent}
                            {...form.register("message")}
                        ></textarea>

                        {form.formState.errors.message && (
                            <p className="text-red-500">{form.formState.errors.message.message}</p>
                        )}
                    </div>

                    <button
                        className="flex h-12 w-full items-center justify-center gap-3 rounded-md bg-[#2177E8] text-white outline-none"
                        disabled={form.formState.isSubmitting || messageSent}
                    >
                        <span>{messageSent ? "Anfrage erfolgreich gesendet" : "Anfrage abschicken"}</span>

                        {form.formState.isSubmitting ? (
                            <Loader2 className="size-4 animate-spin" />
                        ) : messageSent ? (
                            <Check className="size-4" strokeWidth={2.5} />
                        ) : (
                            <ArrowRight className="size-4" strokeWidth={2.5} />
                        )}
                    </button>

                    <p className="text-center text-sm text-black">
                        Mit dem Absenden stimmen Sie unserer{" "}
                        <Link className="font-medium text-[#2177E8]" href="">
                            Datenschutzerklärung
                        </Link>{" "}
                        zu.
                    </p>
                </form>
            </FormProvider>
        </div>
    )
}
