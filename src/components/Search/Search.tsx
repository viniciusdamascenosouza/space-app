import { SearchInput } from "./style"

const Search = () => {
    return (
        <SearchInput>
            <input type="text" placeholder="O que você procura?"  />
            <img src="/src/assets/search.png" alt="pesquisa" />
        </SearchInput>
    )
}
export default Search