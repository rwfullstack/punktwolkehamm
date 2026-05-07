"use client"

import { ChevronDown } from "lucide-react"
import { useRef, useState } from "react"

import { ViewAnimation } from "../ViewAnimation"

type Properties = {
    question: string
    answer: string
}

export const QuestionCard = ({ question, answer }: Properties) => {
    const [collapsed, setCollapsed] = useState(true)

    const answerRef = useRef<HTMLDivElement>(null)

    return (
        <ViewAnimation type="Rightwards">
            <li className="flex min-h-20 w-full flex-col rounded-[20px] bg-[#F3F4F6] px-5 md:px-8">
                <div className="flex h-20 items-center justify-between gap-3">
                    <h4 className="font-medium">{question}</h4>

                    <button
                        className="flex size-12 cursor-pointer items-center justify-center"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <ChevronDown
                            className={`${!collapsed ? "rotate-180" : ""} text-black transition-transform duration-500`}
                        />
                    </button>
                </div>

                <div
                    className="overflow-hidden transition-[height] duration-500"
                    style={{ height: collapsed ? 0 : answerRef.current?.scrollHeight }}
                    ref={answerRef}
                >
                    <p className="pb-8 text-[#4A5565]">{answer}</p>
                </div>
            </li>
        </ViewAnimation>
    )
}
