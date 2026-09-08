"use client"

import { ToursPage } from "@/payload/payload-types"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { ViewAnimation } from "@/components/ViewAnimation"

export const List = ({ data }: { data: ToursPage }) => {
    return (
        <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
            {data?.tours?.tours?.map((tour, index) => (
                <ViewAnimation key={tour?.id ?? index} type="Upwards" delay={index * 80} className="h-full w-full">
                    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/95 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_28px_60px_-18px_rgba(33,119,232,0.45)]">
                        <div className="relative aspect-video overflow-hidden bg-[#0B1A33]">
                            <iframe
                                className="absolute top-0 left-0 size-full"
                                src={tour?.link as string}
                                allowFullScreen
                                title={tour?.name ?? "Virtuelle Tour"}
                            />

                            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#071428]/55 to-transparent" />

                            <div className="absolute top-4 left-4 flex h-8 flex-row items-center gap-2 rounded-full border border-white/20 bg-[#071428]/55 px-2.5 backdrop-blur-md">
                                <div className="size-2.5 animate-pulse rounded-full bg-cyan-300" />
                                <p className="text-sm font-medium text-white">360° Live-Demo</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-between gap-3 border-t border-slate-100 bg-linear-to-r from-slate-50 via-white to-cyan-50/40 px-4 py-3">
                            <div className="min-w-0 flex-1">
                                {tour?.name ? (
                                    <p className="truncate text-sm font-semibold text-[#0B1A33]">{tour.name}</p>
                                ) : null}
                                <p className="line-clamp-2 text-sm leading-snug text-[#4A5565]">
                                    {tour?.text || "Virtuelle 360°-Tour öffnen"}
                                </p>
                            </div>

                            <Link
                                href={tour?.link as string}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0"
                            >
                                <button className="flex h-10 flex-row items-center justify-center gap-2 rounded-xl bg-[#2177E8] px-3.5 text-sm font-medium text-white transition-colors duration-200 group-hover:bg-[#1a66cc]">
                                    <span>Tour öffnen</span>
                                    <ArrowRight className="size-4 text-white" strokeWidth={2.5} />
                                </button>
                            </Link>
                        </div>
                    </article>
                </ViewAnimation>
            ))}
        </div>
    )
}
