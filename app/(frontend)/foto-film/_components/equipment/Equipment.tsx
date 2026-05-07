import { DynamicIcon } from "@/components/DynamicIcon"
import { GetPayload } from "@/payload/utilities/config/GetPayload"

export const Equipment = async () => {
    const payload = await GetPayload()

    const content = await payload.findGlobal({
        slug: "ImagePage"
    })

    return (
        <section className="w-full py-30">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-3">
                <h2 className="font-semibold text-[#2177E8] uppercase">{content?.equipment?.title}</h2>

                <h3 className="text-center text-3xl md:text-4xl">{content?.equipment?.subtitle}</h3>

                <p className="text-md w-full text-center text-[#4A5565] md:w-2/3">{content?.equipment?.text}</p>

                <ol className="mt-10 grid w-full gap-x-10 gap-y-5 md:grid-cols-3">
                    {content?.equipment?.blocks?.map((block) => (
                        <li
                            className="flex flex-col items-center gap-5 rounded-[20px] border border-gray-100 px-8 py-10 shadow-md transition-all duration-300 ease-in-out hover:scale-102 hover:border-[#2177E8]/50 hover:shadow-lg"
                            key={block?.id}
                        >
                            <DynamicIcon
                                icon={block?.icon as string}
                                className="size-12 text-[#2177E8]"
                                strokeWidth={2.5}
                            />

                            <h4 className="text-center text-xl font-semibold">{block?.title}</h4>

                            <p className="text-md text-center text-[#4A5565]">{block?.text}</p>
                        </li>
                    ))}
                </ol>

                <div className="mt-10 flex w-full flex-col gap-5 rounded-xl bg-gray-50 px-8 py-10 md:w-7/10">
                    <h3 className="text-center text-xl font-semibold">{content?.equipment?.heading}</h3>

                    <ol className="mt-5 grid flex-1 grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
                        {content?.equipment?.information?.map((information) => (
                            <li className="flex flex-col gap-1 border-b border-gray-200 pb-3" key={information?.id}>
                                <ol className="flex justify-between gap-1">
                                    <li className="text-md font-medium text-[#4A5565]">{information?.name}</li>
                                    <li className="text-right font-medium text-[#2177E8]/75">{information?.value}</li>
                                </ol>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    )
}
