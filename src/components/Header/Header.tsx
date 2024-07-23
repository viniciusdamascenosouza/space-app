import Search from "../Search/Search"
import { HeaderStyled } from "./style"

const Header = () => {
    return (
        <HeaderStyled>
            <img src="/src/assets/Logo.png" alt="" />
            <Search />
        </HeaderStyled>
    )
}

export default Header