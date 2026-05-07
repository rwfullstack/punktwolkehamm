"use client"

import Link from "next/link"

import { DynamicIcon } from "./DynamicIcon"

export const ScrollButton = () => {
    return (
        <button
            className="flex h-12 cursor-pointer items-center gap-2 rounded-xl bg-[#666666]/50 px-5 font-medium text-white shadow-md transition-all duration-250 hover:scale-105 hover:shadow-lg"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        >
            <DynamicIcon className="size-4" icon={"LayoutGrid"} strokeWidth={2.5} />

            <span>Leistungen</span>
        </button>
    )
}
