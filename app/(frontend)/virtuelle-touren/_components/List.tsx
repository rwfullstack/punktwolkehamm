"use client"

import { DynamicIcon } from "@/components/DynamicIcon"
import { ToursPage } from "@/payload/payload-types"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export const List = ({ data }: { data: ToursPage }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <div className="flex flex-1 flex-col gap-5 md:flex-row md:gap-5">
            <div className="flex flex-1 flex-col gap-3">
                {data?.tours?.tours?.map((tour, index) => (
                    <button
                        onClick={() => setSelectedIndex(index)}
                        key={index}
                        className={
                            index === selectedIndex
                                ? "flex h-20 w-full flex-row items-center gap-4 rounded-3xl border border-[#2177E8] bg-white px-4 py-3"
                                : "flex h-20 w-full flex-row items-center gap-4 rounded-3xl bg-white/60 px-4 py-3 hover:bg-white/80"
                        }
                    >
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#2177E8] p-4 px-5">
                            <DynamicIcon
                                icon={tour?.icon as string}
                                className="shrink-0 text-white"
                                strokeWidth={2.5}
                            />
                        </div>

                        <div className="flex h-12 flex-col items-start justify-between">
                            <p className="text-gray-500 uppercase">{tour?.type}</p>
                            <p className="font-semibold text-black">{tour?.name}</p>
                        </div>
                    </button>
                ))}
            </div>

            <div className="flex flex-3 flex-col overflow-hidden rounded-3xl bg-white md:flex-1">
                <div className="relative aspect-video">
                    <iframe
                        className="absolute top-0 left-0 size-full"
                        src={data?.tours?.tours?.[selectedIndex]?.link as string}
                        allowFullScreen
                    />

                    <div className="absolute top-5 left-5 flex h-8 flex-row items-center gap-2 rounded-full bg-white/40 px-2.5">
                        <div className="size-2.5 animate-pulse rounded-full bg-blue-300"></div>

                        <p className="text-sm font-medium text-black">360° Live-Demo</p>
                    </div>

                    <div className="absolute top-5 right-5 flex h-8 flex-row items-center gap-2 rounded-full bg-white/40 px-2.5">
                        <p className="text-sm font-medium text-black">8K - HDR</p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 p-6">
                    <p className="text-md/8 text-gray-500">{data?.tours?.tours?.[selectedIndex]?.text as string}</p>

                    <div className="flex flex-row items-center gap-3">
                        <Link
                            href={data?.tours?.tours?.[selectedIndex]?.link as string}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="flex h-12 flex-row items-center justify-center rounded-xl bg-[#2177E8] px-3 text-white">
                                <span>Tour öffnen</span>
                                <ArrowRight className="size-4" strokeWidth={2.5} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
