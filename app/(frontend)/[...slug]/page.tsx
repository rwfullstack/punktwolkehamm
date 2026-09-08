import { Metadata } from "next"
import { notFound } from "next/navigation"

import { ContentBlocks } from "@/components/content-blocks/ContentBlocks"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { PageAtmosphere } from "@/components/layout/PageAtmosphere"
import { getAllInfoPagePaths, getInfoPage } from "@/payload/utilities/info-pages/getInfoPage"

type PageProperties = {
    params: Promise<{
        slug: string[]
    }>
}

const getPathFromSlug = (slug: string[]) => slug.join("/")

export const generateStaticParams = async () => {
    const paths = await getAllInfoPagePaths()

    return paths.map((path) => ({
        slug: path.split("/").filter(Boolean)
    }))
}

export const generateMetadata = async ({ params }: PageProperties): Promise<Metadata> => {
    const { slug } = await params
    const page = await getInfoPage(getPathFromSlug(slug))

    if (!page) {
        return {}
    }

    return {
        title: `${page.title} | PunktWolke Hamm`,
        description: page.description ?? undefined,
        openGraph: {
            title: `${page.title} | PunktWolke Hamm`,
            description: page.description ?? undefined
        }
    }
}

const Page = async ({ params }: PageProperties) => {
    const { slug } = await params
    const page = await getInfoPage(getPathFromSlug(slug))

    if (!page) {
        notFound()
    }

    return (
        <>
            <Header />

            <PageAtmosphere eyebrow="Info" title={page.title} subtitle={page.description ?? undefined}>
                <div className="w-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] backdrop-blur-md md:p-10">
                    <ContentBlocks blocks={page.blocks} />
                </div>
            </PageAtmosphere>

            <Footer margin={false} />
        </>
    )
}

export default Page
