import "@/app/(frontend)/globals.css"

import { Montserrat } from "next/font/google"
import { ReactNode } from "react"

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["300", "400", "500", "600", "700", "800", "900"]
})

interface LayoutProperties {
    children?: ReactNode
}

const Layout = ({ children }: LayoutProperties) => {
    return (
        <html lang="de" suppressHydrationWarning>
            <body className={`${montserrat.variable} overflow-x-hidden antialiased`}>{children}</body>
        </html>
    )
}

export default Layout
