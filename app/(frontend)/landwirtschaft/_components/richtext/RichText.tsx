import { GetPayload } from "@/payload/utilities/config/GetPayload"

export const RichText = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "AgriculturePage"
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

                <ol className="mt-10 grid w-full gap-x-10 gap-y-5 md:grid-cols-3">
                    {content?.richtext?.blocks?.map((block) => (
                        <li
                            className="flex flex-col items-center gap-5 rounded-[20px] border border-gray-100 px-8 py-10 shadow-md transition-all duration-300 ease-in-out hover:scale-102 hover:border-[#2177E8]/50 hover:shadow-lg"
                            key={block?.id}
                        >
                            <p className="text-4xl font-semibold text-[#2177E8]">{block?.value}</p>

                            <h4 className="text-center text-xl font-semibold">{block?.title}</h4>

                            <p className="text-md text-center text-[#4A5565]">{block?.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
