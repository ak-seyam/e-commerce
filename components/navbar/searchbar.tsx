import { useState } from "react"
import styles from "./navbar.module.css"
import search from "./search"

type searchProps = {
    ref?: any,
    zIndex?: number
}

const SearchBar = ({ ref, zIndex }: searchProps) => {
    const [searchResults, setSearchResults] = useState([])

    const handleSearchTermTyped = (e) => {
        setSearchResults(search(e.target.value))
    }

    return (
        <form id="search-bar" style={{ width: "100%", zIndex }}>
            <div className={styles["search-container"]} >
                <div className={styles["text-container"]}>
                    <input onChange={handleSearchTermTyped} id="search" type="text" name="search-term" required autoComplete="off"></input>
                    <div className={`${styles["elements"]}`}>
                        <label htmlFor="search">{"Search"}</label>
                        <div className={`${styles["search-icon"]}`}>
                            <i className={`fas fa-search`}></i>
                        </div>
                    </div>
                </div>
                <div style={{ padding: searchResults.length ? "16px" : "0px" }} className={`${styles["search-results"]}`}>
                    {searchResults.map(res => {
                        return <div key={res}>{res}</div>
                    })}
                </div>
            </div>
        </form>
    )
}

export default SearchBar;