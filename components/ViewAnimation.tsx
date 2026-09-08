"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"

type ViewAnimateProperties = {
    children: ReactNode
    className?: string
    type: "Upwards" | "Downwards" | "Leftwards" | "Rightwards"
    delay?: number
}

const HIDDEN_TRANSFORM: Record<ViewAnimateProperties["type"], string> = {
    Upwards: "translate-y-5",
    Downwards: "-translate-y-5",
    Leftwards: "translate-x-5",
    Rightwards: "-translate-x-5"
}

const isCurrentlyInView = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    const viewHeight = window.innerHeight || document.documentElement.clientHeight
    return rect.top < viewHeight * 0.94 && rect.bottom > viewHeight * 0.06
}

export const ViewAnimation = ({ children, className, type, delay = 0 }: ViewAnimateProperties) => {
    const ref = useRef<HTMLDivElement>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        if (isCurrentlyInView(el)) {
            setInView(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return
                setInView(true)
                observer.disconnect()
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -6% 0px"
            }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            style={{ transitionDelay: inView ? `${delay}ms` : undefined }}
            className={twMerge(
                "will-change-transform motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none",
                inView
                    ? "translate-none opacity-100 transition-all duration-500 ease-out"
                    : `opacity-0 transition-none ${HIDDEN_TRANSFORM[type]}`,
                className
            )}
        >
            {children}
        </div>
    )
}
