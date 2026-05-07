"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"

type ViewAnimateProperties = {
    children: ReactNode
    className?: string

    type: "Upwards" | "Downwards" | "Leftwards" | "Rightwards"
    delay?: number
}

export const ViewAnimation = ({ children, className, type, delay = 0 }: ViewAnimateProperties) => {
    const ref = useRef<HTMLDivElement>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting)
            },
            {
                rootMargin: "10000px 0px -20px 0px"
            }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    const upwardsClassName = type === "Upwards" ? "translate-y-full" : ""
    const downwardsClassName = type === "Downwards" ? "-translate-y-full" : ""
    const leftwardsClassName = type === "Leftwards" ? "translate-x-full" : ""
    const rightwardsClassName = type === "Rightwards" ? "-translate-x-full" : ""

    const typeClassName = twMerge(upwardsClassName, downwardsClassName, leftwardsClassName, rightwardsClassName)

    return (
        <div className="max-md:overflow-hidden">
            <div
                ref={ref}
                style={{ transitionDelay: `${delay}ms` }}
                className={twMerge(
                    `motion-reduce:transform-none motion-reduce:transition-none ${
                        inView
                            ? `translate-none opacity-100 transition-all duration-500 ease-out`
                            : `opacity-0 transition-none ${typeClassName} `
                    } `,
                    className
                )}
            >
                {children}
            </div>
        </div>
    )
}
