import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
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

    return NextResponse.json({})
}
