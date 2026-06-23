import { DetailItem, DetailItemCard } from "@/components/details/DetailItemCard"
import { GetPayload } from "@/payload/utilities/config/GetPayload"

export const Details = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "ImagePage",
        depth: 2
    })

    return (
        <section className="w-full py-30">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-3">
                <h2 className="font-semibold text-[#2177E8] uppercase">{content?.details?.title}</h2>

                <h3 className="text-center text-3xl md:w-2/3 md:text-4xl">{content?.details?.subtitle}</h3>

                <ol className="mt-10 grid w-full gap-5 md:grid-cols-2">
                    {content?.details?.details?.map((detail) => (
                        <DetailItemCard key={detail?.id} detail={detail as DetailItem} />
                    ))}
                </ol>
            </div>
        </section>
    )
}
