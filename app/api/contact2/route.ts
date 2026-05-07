import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const POST = async (request: NextRequest) => {
    const { business, firstName, street, zip, city, service, images, lastName, email, message } = await request.json()

    const transport = nodemailer.createTransport({
        host: "smtp.strato.de",
        port: 465,
        secure: true,
        auth: {
            user: "info@punktwolkehamm.de",
            pass: "SBRYGYX!Zq5MwuV8"
        }
    })

    const attachments = (images || []).map((url: string, index: number) => ({
        filename: "Bild-" + (index + 1) + "." + url.split(".").pop(),
        path: process.cwd() + "/public/uploads/" + url
    }))

    await transport.sendMail({
        from: "Punktwolke Hamm Bot",
        to: "info@punktwolkehamm.de",
        subject: "Neue Anfrage (detallieret)",
        replyTo: "noreply@punktwolkehamm.de",
        text: message,
        html: `
            <h1>Neue Anfrage (detalliert)</h1>

            <ol>
                <p>Firmenname: ${business.toString()}</p>
                <p>Vorname: ${firstName.toString()}</p>
                <p>Nachname: ${lastName.toString()}</p>
                <p>Telefonnummer: ${lastName.toString()}</p>
                <p>E-Mail Adresse: ${email.toString()}</p>

                <p>Adresse: ${street.toString()}</p>
                <p>Postleitzahl: ${zip.toString()}</p>
                <p>Stadt: ${city.toString()}</p>

                <p>Dienstleistung: ${service.toString()}</p>

                <pre>Nachricht: ${message.toString()}</pre>
            </ol>
        `,
        attachments
    })

    return NextResponse.json({ success: true })
}
