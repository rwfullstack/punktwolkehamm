import { getPayload, Payload } from "payload"

import payloadConfig from "@payload-config"

export const GetPayload = async (): Promise<Payload> => {
    return await getPayload({ config: payloadConfig })
}
