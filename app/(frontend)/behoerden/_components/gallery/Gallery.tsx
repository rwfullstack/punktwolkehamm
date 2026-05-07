import Image from "next/image"

import { Resource } from "@/payload/payload-types"
import { GetPayload } from "@/payload/utilities/config/GetPayload"

export const Gallery = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "OfficePage"
    })

    return (
        <section className="mt-30 w-full bg-gray-50 py-30">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3">
                <h2 className="font-semibold text-[#2177E8] uppercase">{content?.gallery?.title}</h2>

                <h3 className="text-3xl md:text-4xl">{content?.gallery?.subtitle}</h3>

                <p className="text-md w-full text-[#4A5565] md:w-2/3">{content?.gallery?.text}</p>

                <div className="mt-15 grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
                    <div className="relative overflow-hidden rounded-3xl object-cover shadow-md transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:col-span-2 md:row-span-2">
                        <Image
                            className="rounded-3xl object-cover md:col-span-2 md:row-span-2"
                            src={
                                "https://punktwolkehamm.de" +
                                ((content?.gallery?.images?.[0]?.image as Resource)?.url ?? "")
                            }
                            alt={(content?.gallery?.images?.[0]?.image as Resource)?.alt ?? "Alternative Text"}
                            width={1920}
                            height={1080}
                        />

                        <div className="absolute top-0 left-0 flex size-full items-end justify-start bg-linear-to-b from-[#053070]/5 via-[#0D083F]/5 to-[#0D083F] px-5 py-1.5">
                            <p className="text-white">{content?.gallery?.images?.[0]?.description ?? "Beschreibung"}</p>
                        </div>
                    </div>

                    {content?.gallery?.images?.slice(1).map((image) => (
                        <div className="relative overflow-hidden rounded-3xl object-cover shadow-md transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg">
                            <Image
                                className="rounded-3xl object-cover"
                                src={"https://punktwolkehamm.de" + ((image?.image as Resource)?.url ?? "")}
                                alt={(image?.image as Resource)?.alt ?? "Alternative Text"}
                                width={1920}
                                height={1080}
                            />

                            <div className="absolute top-0 left-0 flex size-full items-end justify-start bg-linear-to-b from-[#053070]/0 via-[#0D083F]/0 to-[#0D083F] px-5 py-1.5">
                                <p className="text-white">{image?.description ?? "Beschreibung"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
