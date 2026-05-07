import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const POST = async (request: NextRequest) => {
    const { business, firstName, lastName, email, message } = await request.json()

    const transport = nodemailer.createTransport({
        host: "smtp.strato.de",
        port: 465,
        secure: true,
        auth: {
            user: "info@punktwolkehamm.de",
            pass: "SBRYGYX!Zq5MwuV8"
        }
    })

    await transport.sendMail({
        from: "Punktwolke Hamm Bot",
        to: "info@punktwolkehamm.de",
        subject: "Neue Anfrage (nicht detallieret)",
        replyTo: "noreply@punktwolkehamm.de",
        text: message,
        html: `
            <h1>Neue Anfrage (Nicht detalliert)</h1>

            <ol>
                <p>Firmenname: ${business.toString()}</p>
                <p>Vorname: ${firstName.toString()}</p>
                <p>Nachname: ${lastName.toString()}</p>
                <p>E-Mail Adresse: ${email.toString()}</p>
                <p>Nachricht: ${message.toString()}</p>
            </ol>
        `
    })

    return NextResponse.json({ success: true })
}
