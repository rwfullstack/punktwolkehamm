import * as Icons from "lucide-react"
import { ComponentType } from "react"

interface Properties {
    className?: string

    icon?: string | null
    strokeWidth?: number
}

const DynamicIcon = ({ icon, className, strokeWidth }: Properties) => {
    const Icon = Icons[icon as keyof typeof Icons] as ComponentType<any>

    if (!Icon) {
        return <Icons.CircleQuestionMark className={className} strokeWidth={strokeWidth} />
    }

    return <Icon className={className} strokeWidth={strokeWidth} />
}

export { DynamicIcon as DynamicIcon }
