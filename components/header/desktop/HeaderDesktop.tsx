"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export const HeaderDesktop = () => {
    const pathname = usePathname()

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        })
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 z-1000000 hidden w-full transition-all duration-500 ease-in-out md:block ${isScrolled ? "h-14 bg-white" : "h-20"}`}
        >
            <div className="group/header mx-auto flex h-full max-w-7xl items-center justify-between gap-1 px-3">
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

                <nav
                    className={`mx-auto flex h-10.5 items-center gap-2 rounded-xl px-4 font-medium ${isScrolled ? "bg-black/20 text-white" : "bg-white/30 text-white"} shadow-md transition-all duration-250 ease-in-out hover:shadow-lg max-xl:absolute max-xl:top-20`}
                >
                    <Link
                        className={`transition-all duration-250 ease-in-out ${pathname === "/vermessung" ? "text-[#2177E8]" : "text-white"} hover:text-[#2177E8]`}
                        href="/vermessung"
                    >
                        Vermessung
                    </Link>

                    <Link
                        className={`transition-all duration-250 ease-in-out ${pathname === "/inspektion" ? "text-[#2177E8]" : "text-white"} hover:text-[#2177E8]`}
                        href="/inspektion"
                    >
                        Inspektion
                    </Link>

                    <Link
                        className={`transition-all duration-250 ease-in-out ${pathname === "/foto-film" ? "text-[#2177E8]" : "text-white"} hover:text-[#2177E8]`}
                        href="/foto-film"
                    >
                        Foto & Film
                    </Link>

                    <Link
                        className={`transition-all duration-250 ease-in-out ${pathname === "/landwirtschaft" ? "text-[#2177E8]" : "text-white"} hover:text-[#2177E8]`}
                        href="/landwirtschaft"
                    >
                        Landwirtschaft
                    </Link>

                    <Link
                        className={`transition-all duration-250 ease-in-out ${pathname === "/behoerden" ? "text-[#2177E8]" : "text-white"} hover:text-[#2177E8]`}
                        href="/behoerden"
                    >
                        Behörden
                    </Link>

                    <Link
                        className={`transition-all duration-250 ease-in-out ${pathname === "/ueber-uns" ? "text-[#2177E8]" : "text-white"} hover:text-[#2177E8]`}
                        href="/ueber-uns"
                    >
                        Über uns
                    </Link>
                </nav>

                <Link href="/kontakt">
                    <button className="flex h-10.5 cursor-pointer items-center gap-2 rounded-xl bg-[#2177E8] px-4 text-white shadow-md transition-all duration-250 ease-in-out hover:scale-105 hover:shadow-lg">
                        <span>Termin anfragen</span>

                        <ArrowRight className="size-4" strokeWidth={2.5} />
                    </button>
                </Link>
            </div>
        </header>
    )
}
