import { Metadata } from "next"

import { Contact } from "@/components/contact/Contact"
import { ContentBlocks } from "@/components/content-blocks/ContentBlocks"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { PageAtmosphere } from "@/components/layout/PageAtmosphere"
import { GetPayload } from "@/payload/utilities/config/GetPayload"
import type { AboutPageContent } from "@/payload/utilities/content-blocks/aboutPageTypes"

export const generateMetadata = async (): Promise<Metadata> => {
    const payload = await GetPayload()

    const content = (await payload.findGlobal({
        slug: "AboutPage"
    })) as AboutPageContent

    const title = content?.title ?? "Über uns"
    const description =
        content?.description ?? "Hier finden Sie alle wichtigen Informationen zu unserer Firma."

    return {
        title: `${title} | PunktWolke Hamm`,
        description,
        openGraph: {
            title: `${title} | PunktWolke Hamm`,
            description
        }
    }
}

const Page = async () => {
    const payload = await GetPayload()

    const content = (await payload.findGlobal({
        slug: "AboutPage",
        depth: 1
    })) as AboutPageContent

    return (
        <>
            <Header />

            <PageAtmosphere
                eyebrow="Unternehmen"
                title={content?.title ?? "Über uns"}
                subtitle={
                    content?.description ??
                    "Wer wir sind, wie wir arbeiten und warum PunktWolke Hamm Ihr Partner in der Luft ist."
                }
            >
                <div className="w-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] backdrop-blur-md md:p-10">
                    <ContentBlocks blocks={content?.blocks} />
                </div>
            </PageAtmosphere>

            <Contact />
            <Footer margin={false} />
        </>
    )
}

export default Page
