import { randomUUID } from "crypto"
import { mkdir, writeFile } from "fs/promises"
import { NextRequest, NextResponse } from "next/server"
import { extname, join } from "path"

export const POST = async (request: NextRequest) => {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
        return NextResponse.json({ success: false })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const fileName = randomUUID()
    const fileType = extname(file.name)
    const filePath = join(process.cwd(), "public", "uploads")

    await mkdir(filePath, { recursive: true })

    await writeFile(join(filePath, fileName + fileType), buffer)

    return NextResponse.json({ success: true, name: fileName + fileType })
}
