"use client"

import { TextAlignJustify, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export const HeaderMobile = () => {
    const [open, setOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        document.body.style.overflowY = open ? "hidden" : "auto"

        return () => {
            document.body.style.overflowY = "auto"
        }
    }, [open])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 64) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        })
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 z-10005 block w-full transition-all duration-500 ease-in-out md:hidden ${isScrolled ? "bg-white" : ""}`}
        >
            <div className="transparent mx-auto flex h-16 max-w-7xl items-center justify-between px-3">
                <Link
                    className={`flex gap-0.5 transition-transform duration-250 hover:scale-105 ${isScrolled ? "text-black" : "text-white"}`}
                    href="/"
                >
                    <div className="flex flex-col font-light">
                        <span>Punkt</span>
                        <span className="-mt-1">Wolke</span>
                    </div>

                    <span
                        className={`pt-5.5 text-[48px] leading-0 font-bold ${isScrolled ? "text-[#2177E8]" : "text-white"}`}
                    >
                        HAMM
                    </span>
                </Link>

                <div className="relative flex h-full items-center">
                    <button onClick={() => setOpen((v) => !v)} className="relative size-9" aria-label="Toggle menu">
                        <TextAlignJustify
                            className={`absolute inset-0 size-9 ${isScrolled ? "text-black" : "text-white"} transition-opacity duration-300 ease-in-out ${
                                open ? "pointer-events-none opacity-0" : "opacity-100"
                            }`}
                            strokeWidth={1.5}
                        />

                        <X
                            className={`absolute inset-0 size-9 ${isScrolled ? "text-black" : "text-white"} transition-opacity duration-300 ease-in-out ${
                                open ? "opacity-100" : "pointer-events-none opacity-0"
                            }`}
                            strokeWidth={1.5}
                        />
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-16 left-0 z-100000 flex h-[calc(100dvh-64px)] w-full flex-col items-center justify-center gap-2 bg-linear-to-r from-[#053070] to-[#0D083F] text-xl font-medium text-white transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <Link href="/vermessung">Vermessung</Link>
                <Link href="/inspektion">Inspektion</Link>
                <Link href="/foto-film">Foto & Film</Link>
                <Link href="/landwirtschaft">Landwirtschaft</Link>
                <Link href="/behoerden">Behörden</Link>
                <Link href="/ueber-uns">Über uns</Link>
                <Link href="/datenschutz">Datenschutz</Link>
                <Link href="/agb">AGBs</Link>
                <Link href="/impressum">Impressum</Link>
            </div>
        </header>
    )
}
