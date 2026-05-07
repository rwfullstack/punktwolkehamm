"use client"

import { ArrowRight, Check, Loader2, Plus, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ChangeEvent, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"

const services = ["Allgemein", "Vermessung", "Inspektion", "Foto & Film", "Landwirtschaft"]

const formSchema = z.object({
    business: z.string().min(3, "Bitte gib einen gültigen Firmennamen ein.").trim(),
    firstName: z.string().min(3, "Bitte gib einen gültigen Vornamen ein.").trim(),
    lastName: z.string().min(3, "Bitte gib einen gültigen Nachnamen ein.").trim(),

    email: z.email("Bitte gib eine gültige E-Mail Adresse ein.").trim(),
    phone: z
        .string()
        .regex(/^(\+49|0)[1-9]\d{1,4}\d{3,}$/, "Bitte gib eine gültige Telefonnummer ein.")
        .trim(),

    street: z.string().min(5, "Bitte gib eine gültige Adresse ein.").trim(),
    zip: z
        .string()
        .regex(/^\d{5}$/, "Bitte gib eine gültige Postleitzahl ein.")
        .trim(),
    city: z.string().min(3, "Bitte gib eine gültige Stadt ein.").trim(),

    service: z.enum(services),

    images: z.array(z.string()).max(10),

    message: z.string().min(10, "Bitte gib eine Nachricht mit mindestens 10 Zeichen ein.").trim()
})

export const DetailedRequest = () => {
    const [messageSent, setMessageSent] = useState(false)

    const form = useForm({
        resolver: zodResolver(formSchema),

        defaultValues: {
            business: "",
            firstName: "",
            lastName: "",

            email: "",
            phone: "",

            street: "",
            zip: "",
            city: "",

            service: "Allgemein",

            images: [],

            message: ""
        },

        mode: "onChange"
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const response = await fetch("/api/contact2", {
            method: "POST",
            body: JSON.stringify(data)
        })

        if (response.ok) {
            setMessageSent(true)
        }
    }

    const selectedService = form.watch("service")
    const images = form.watch("images")

    const uploadFile = async (file: File) => {
        const formData = new FormData()

        formData.append("file", file)

        const response = await fetch("/api/abcdef", {
            method: "POST",
            body: formData
        })

        const data = await response.json()

        return data.name
    }

    return (
        <div className="flex flex-col gap-5 pt-10">
            <h1 className="text-3xl font-bold">Detallierte Anfrage senden</h1>

            <FormProvider {...form}>
                <form className="flex flex-col gap-3" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-x-3 gap-y-3 md:flex-row">
                        <div className="flex flex-1 flex-col gap-1.5">
                            <label>Firmenname *</label>

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
                    </div>

                    <div className="flex flex-col gap-x-3 gap-y-3 md:flex-row">
                        <div className="flex flex-1 flex-col gap-1.5">
                            <label>Vorname *</label>

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
                            <label>Nachname *</label>

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

                    <div className="flex flex-col gap-x-3 gap-y-3 md:flex-row">
                        <div className="flex flex-1 flex-col gap-1.5">
                            <label>Telefonnummer *</label>

                            <input
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-black outline-none"
                                type="text"
                                placeholder="Ihre Telefonnummer"
                                disabled={messageSent}
                                {...form.register("phone")}
                            />

                            {form.formState.errors.phone && (
                                <p className="text-red-500">{form.formState.errors.phone.message}</p>
                            )}
                        </div>

                        <div className="flex flex-1 flex-col gap-1.5">
                            <label>E-Mail Adresse *</label>

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

                    <div className="b-2 my-5 w-full border border-white"></div>

                    <p className="text-md font-medium">Standortdaten</p>

                    <div className="flex flex-col gap-x-3 gap-y-3 md:flex-row">
                        <div className="flex flex-1 flex-col gap-1.5">
                            <label>Adresse *</label>

                            <input
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-black outline-none"
                                type="text"
                                placeholder="Ihre Adresse (Straße u. Hausnummer)"
                                disabled={messageSent}
                                {...form.register("street")}
                            />

                            {form.formState.errors.email && (
                                <p className="text-red-500">{form.formState.errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-x-3 gap-y-3 md:flex-row">
                        <div className="flex flex-1 flex-col gap-1.5">
                            <label>Postleitzahl *</label>

                            <input
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-black outline-none"
                                type="text"
                                placeholder="Ihre Postleitzahl"
                                disabled={messageSent}
                                {...form.register("zip")}
                            />

                            {form.formState.errors.zip && (
                                <p className="text-red-500">{form.formState.errors.zip.message}</p>
                            )}
                        </div>

                        <div className="flex flex-1 flex-col gap-1.5">
                            <label>Stadt *</label>

                            <input
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-black outline-none"
                                type="text"
                                placeholder="Ihre Stadt"
                                disabled={messageSent}
                                {...form.register("city")}
                            />

                            {form.formState.errors.city && (
                                <p className="text-red-500">{form.formState.errors.city.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="b-2 my-5 w-full border border-white"></div>

                    <div className="flex flex-col gap-2">
                        <p className="text-md font-medium">Wähle eine Dienstleistung aus</p>

                        <div className="flex flex-wrap gap-2">
                            {services.map((service, index) => (
                                <button
                                    className={`${service === selectedService ? "bg-[#2177E8]" : "bg-white text-black"} rounded-full px-4 py-2`}
                                    type="button"
                                    onClick={() => form.setValue("service", service)}
                                    disabled={service === selectedService}
                                    key={index}
                                >
                                    {service}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-5">
                        <p className="text-md font-medium">
                            Lade Fotos hoch, damit wir dein Anliegen einschätzen können
                        </p>

                        <input
                            id="upload"
                            className="hidden"
                            type="file"
                            disabled={images.length >= 10}
                            accept="image/*,application/pdf"
                            onChange={async (event: ChangeEvent<HTMLInputElement>) => {
                                const files = event.target.files

                                if (!files) return

                                for (const file of Array.from(files)) {
                                    const url = await uploadFile(file)

                                    if (!url) continue

                                    const currentImages = form.getValues("images")
                                    form.setValue("images", [...currentImages, url])
                                }

                                event.target.value = ""
                            }}
                        />

                        <label
                            className="flex w-max items-center gap-1.5 rounded-xl bg-[#2177E8] px-3.5 py-2 font-medium text-white"
                            htmlFor="upload"
                        >
                            <span>Daten hinzufügen ({images.length} / 10)</span>
                            <Plus />
                        </label>

                        <div className="flex flex-wrap gap-2">
                            {images.map((image, index) => (
                                <div className="relative h-80 max-w-full" key={index}>
                                    <button
                                        className="absolute top-3 left-3 flex size-8 items-center justify-center bg-black/10"
                                        type="button"
                                        onClick={() =>
                                            form.setValue(
                                                "images",
                                                images.filter((_, _i) => _i !== index)
                                            )
                                        }
                                    >
                                        <X className="text-white" />
                                    </button>

                                    <Image
                                        className="size-full max-w-full object-cover"
                                        src={"/uploads/" + image}
                                        alt="Alternativer Text"
                                        width={1920}
                                        height={1080}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5 pt-5">
                        <label>Ihre Nachricht *</label>

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

                    <p className="text-center text-sm">
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
