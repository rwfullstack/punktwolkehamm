import { ReactNode } from "react"

type TextPagePanelProperties = {
    children: ReactNode
}

export const TextPagePanel = ({ children }: TextPagePanelProperties) => {
    return (
        <div className="w-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] backdrop-blur-md md:p-10">
            <div className="prose-invert max-w-none">{children}</div>
        </div>
    )
}
