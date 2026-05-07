import { UploadField } from "payload"

export const UPLOAD_FIELD = (label: string, name: string): UploadField => {
    return {
        type: "upload",
        relationTo: "Resources",

        name,
        label
    }
}
