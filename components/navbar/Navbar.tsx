import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./navbar.module.css"
import search from "./search"

export default function NavBar() {
    const [searchResults, setSearchResults] = useState([])
    const [navbarActive, setNavbarActive] = useState(false)
    const handleSearchTermTyped = (e) => {
        setSearchResults(search(e.target.value))
        console.log("search results are", searchResults);
    }

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 60) {
                setNavbarActive(true)
            } else {
                setNavbarActive(false)
            }
        })
    },[])


    return (
        <nav className={`${styles["navbar"]} ${navbarActive ? styles["active"] : ""}`}>
            <Image
                className={styles["aligned-element"]}
                src="/logo.png"
                height="70px"
                width="70px"
            />
            <form style={{ width: "100%" }}>
                <div className={styles["search-container"]} >
                    <div className={styles["text-container"]}>
                        <input onChange={handleSearchTermTyped} id="search" type="text" name="search-term" required></input>
                        <div className={`${styles["elements"]}`}>
                            <label htmlFor="search">{"Search"}</label>
                            <div className={`${styles["search-icon"]}`}>
                                <i className={`fas fa-search`}></i>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: searchResults.length ? "16px" : "0px" }} className={`${styles["search-results"]}`}>
                        {searchResults.map(res => {
                            return <div>{res}</div>
                        })}
                    </div>
                </div>
            </form>
            <div style={{ width: "120px" }}>
                <div className={`${styles["aligned-element"]} ${styles["best-deals-container"]} `}>
                    <span className={`${styles["best"]}`}>Best</span>
                    <span className={`${styles["deals"]}`}>Deals</span>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <div className={`${styles["aligned-element"]} ${styles["account"]}`}>
                    <i className="fas fa-user-alt"></i>
                </div>
                <div className={`${styles["account-service"]}`}>
                    <span style={{ fontSize: "12px" }}>Login</span>
                    <b>MyAccount</b>
                </div>
            </div>
            <div className={`${styles["cart-container"]}`}>
                <div className={`${styles["aligned-element"]} ${styles["shopping-cart"]}`}>
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div className={`${styles["cart-items-count"]}`}>
                    0
                </div>
            </div>
        </nav>
    )
}