import { Resource } from "@/payload/payload-types"

import { ResourceImage } from "./ResourceImage"

type HeroBackgroundImageProperties = {
    desktop?: Resource | null
    mobile?: Resource | null
    priority?: boolean
}

export const HeroBackgroundImage = ({
    desktop,
    mobile,
    priority = true
}: HeroBackgroundImageProperties) => {
    const desktopUrl = desktop?.url
    const mobileUrl = mobile?.url

    if (!desktopUrl && !mobileUrl) {
        return null
    }

    if (!mobileUrl || mobileUrl === desktopUrl) {
        return (
            <ResourceImage
                resource={desktop ?? mobile}
                variant="hero"
                fill
                priority={priority}
                className="object-cover"
            />
        )
    }

    return (
        <>
            <ResourceImage
                resource={desktop}
                variant="hero"
                fill
                priority={priority}
                className="absolute inset-0 hidden object-cover md:block"
            />

            <ResourceImage
                resource={mobile}
                variant="hero"
                fill
                className="absolute inset-0 object-cover md:hidden"
            />
        </>
    )
}
