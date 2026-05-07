import { GetPayload } from "@/payload/utilities/config/GetPayload"

export const RichText = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "ImagePage"
    })

    return (
        <section className="w-full pt-30">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-3 text-center">
                <h2 className="font-semibold text-[#2177E8] uppercase">{content?.richtext?.title}</h2>

                <h3 className="text-3xl md:text-4xl">{content?.richtext?.subtitle}</h3>

                {content?.richtext?.texts?.map((text) => (
                    <p className="text-md w-full text-[#4A5565] md:w-2/3" key={text?.id}>
                        {text?.text}
                    </p>
                ))}
            </div>
        </section>
    )
}
