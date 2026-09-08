import { ReactNode } from "react"

import { ViewAnimation } from "@/components/ViewAnimation"

type PageAtmosphereProperties = {
    children: ReactNode
    eyebrow?: string
    title?: string
    subtitle?: string
    className?: string
}

export const PageAtmosphere = ({ children, eyebrow, title, subtitle, className }: PageAtmosphereProperties) => {
    return (
        <main className={`relative w-full overflow-hidden text-white ${className ?? ""}`}>
            <div className="absolute inset-0 bg-[#071428]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(33,119,232,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.16),transparent_50%),radial-gradient(ellipse_at_center,rgba(5,48,112,0.45),transparent_70%)]" />
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
                    backgroundSize: "48px 48px"
                }}
            />
            <div className="absolute top-1/5 -left-24 size-72 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute right-0 bottom-1/4 size-96 rounded-full bg-[#2177E8]/20 blur-3xl" />

            <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-3 pt-32 pb-24 md:gap-12 md:pt-40 md:pb-32">
                {(eyebrow || title || subtitle) && (
                    <div className="flex max-w-3xl flex-col gap-4">
                        {eyebrow ? (
                            <ViewAnimation type="Upwards">
                                <p className="w-max rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium tracking-wide text-cyan-100 uppercase backdrop-blur-sm">
                                    {eyebrow}
                                </p>
                            </ViewAnimation>
                        ) : null}

                        {title ? (
                            <ViewAnimation type="Upwards" delay={60}>
                                <h1 className="text-4xl leading-tight font-semibold text-white md:text-5xl md:leading-[1.1]">
                                    {title}
                                </h1>
                            </ViewAnimation>
                        ) : null}

                        {subtitle ? (
                            <ViewAnimation type="Upwards" delay={120}>
                                <p className="text-lg leading-relaxed font-medium text-slate-300 md:text-xl">
                                    {subtitle}
                                </p>
                            </ViewAnimation>
                        ) : null}
                    </div>
                )}

                {children}
            </div>
        </main>
    )
}
