import { Metadata } from "next"

import { Contact } from "@/components/contact/Contact"
import { ContentBlocks } from "@/components/content-blocks/ContentBlocks"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { GetPayload } from "@/payload/utilities/config/GetPayload"
import type { AboutPageContent } from "@/payload/utilities/content-blocks/aboutPageTypes"

export const generateMetadata = async (): Promise<Metadata> => {
    const payload = await GetPayload()

    const content = (await payload.findGlobal({
        slug: "AboutPage"
    })) as AboutPageContent

    const title = content?.title ?? "Über uns"
    const description =
        content?.description ??
        "Hier finden Sie alle wichtigen Informationen zu unserer Firma."

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

            <main className="w-full bg-linear-to-r from-[#053070] to-[#0D083F] py-24 text-white md:py-40">
                <div className="mx-auto flex max-w-7xl flex-col gap-8 px-3">
                    <ContentBlocks blocks={content?.blocks} />
                </div>
            </main>

            <Contact />
            <Footer margin={false} />
        </>
    )
}

export default Page
