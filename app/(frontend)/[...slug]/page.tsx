import { Metadata } from "next"
import { notFound } from "next/navigation"

import { Contact } from "@/components/contact/Contact"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { ContentBlocks } from "@/components/content-blocks/ContentBlocks"
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

            <main className="w-full bg-linear-to-r from-[#053070] to-[#0D083F] py-24 text-white md:py-40">
                <div className="mx-auto flex max-w-7xl flex-col gap-8 px-3">
                    <ContentBlocks blocks={page.blocks} />
                </div>
            </main>

            <Footer margin={false} />
        </>
    )
}

export default Page
