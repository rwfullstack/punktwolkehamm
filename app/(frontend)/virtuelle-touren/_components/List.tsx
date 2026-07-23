"use client"

import { ToursPage } from "@/payload/payload-types"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const List = ({ data }: { data: ToursPage }) => {
    return (
        <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2">
            {data?.tours?.tours?.map((tour, index) => (
                <div
                    key={index}
                    className="flex flex-col overflow-hidden rounded-3xl bg-white"
                >
                    <div className="relative aspect-video">
                        <iframe
                            className="absolute top-0 left-0 size-full"
                            src={tour?.link as string}
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

                    <div className="flex flex-row items-center gap-3 p-6">
                        <Link
                            href={tour?.link as string}
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
            ))}
        </div>
    )
}
