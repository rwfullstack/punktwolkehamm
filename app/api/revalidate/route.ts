import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

import { getAllInfoPagePaths } from "@/payload/utilities/info-pages/getInfoPage"

export const GET = async (request: NextRequest) => {
    const path = request.nextUrl.searchParams.get("path")

    if (path) {
        revalidatePath(path)

        return NextResponse.json({ revalidated: path })
    }

    revalidatePath("/")
    revalidatePath("/agb")
    revalidatePath("/datenschutz")
    revalidatePath("/foto-film")
    revalidatePath("/impressum")
    revalidatePath("/inspektion")
    revalidatePath("/kontakt")
    revalidatePath("/landwirtschaft")
    revalidatePath("/ueber-uns")
    revalidatePath("/vermessung")
    revalidatePath("/virtuelle-touren")

    const infoPagePaths = await getAllInfoPagePaths()

    for (const infoPagePath of infoPagePaths) {
        revalidatePath(`/${infoPagePath}`)
    }

    return NextResponse.json({})
}
