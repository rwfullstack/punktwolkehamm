import { GetPayload } from "../config/GetPayload"

export const GetDrizzle = async () => {
    const payload = await GetPayload()

    return payload.db.drizzle
}
