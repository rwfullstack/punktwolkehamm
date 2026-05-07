import { HeaderDesktop } from "./desktop/HeaderDesktop"
import { HeaderMobile } from "./mobile/HeaderMobile"

const Header = () => {
    return (
        <>
            <HeaderDesktop />
            <HeaderMobile />
        </>
    )
}

export { Header as Header }
