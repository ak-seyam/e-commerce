import Image from "next/image"
import { useEffect, useState } from "react"
import getCategories from "../../controller/category/getCategories"
import styles from "./navbar.module.css"
import search from "./search"

export default function NavBar() {
    const [searchResults, setSearchResults] = useState([])
    const [navbarActive, setNavbarActive] = useState(false)
    const [loadingCategories, setLoadingCategories] = useState(false)
    const [categories, setCategories] = useState([])
    const [categoryItems, setCategoryItems] = useState([])

    // TODO add cart state

    const handleSearchTermTyped = (e) => {
        setSearchResults(search(e.target.value))
        console.log("search results are", searchResults);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 60) {
                setNavbarActive(true)
            } else {
                setNavbarActive(false)
            }
        })
        const _getCategories = async () => {
            setCategories(await getCategories())
            setLoadingCategories(false)
        }
        _getCategories()
    }, [])

    function handleMouseOver(categoryName: string) {
        const _listItem = categories.filter(category => {
            if (category.name === categoryName) {
                return true
            }
        }).map(item => item.listItems)
        setCategoryItems(_listItem[0])
        handleCategoryMouseOver(categoryName)
    }

    function handleCategoryMouseOver(id: string) {
        const categoriesContainer = document.querySelector('#categories')
        const _categories = Array.from(categoriesContainer.children)

        _categories.forEach(cat => {
            console.log('categories', cat.id, id);

            if (cat.id === id) {
                cat.className = `${styles["category-button"]} ${styles["hovered"]}`
            } else {
                cat.className = `${styles["category-button"]}`
            }
        })
        // const cat = document.querySelector(`#${id}`)
    }

    function handleCategoryItemsMouseLeave() {
        setCategoryItems([])
        handleCategoryMouseOver(undefined)
    }

    return (
        <nav className={`${styles["container"]}`}>
            <section className={`${styles["navbar"]} ${navbarActive ? styles["active"] : ""}`}>
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
            </section>
            <section id={"categories"} className={`${styles["categories"]}`}>
                {loadingCategories ? "loading" : categories.map(category => {
                    return (<>
                        <div key={category.name} id={category.name} className={`${styles["category-button"]}`}
                            onMouseOver={() => handleMouseOver(category.name)}>
                            {category.name}
                        </div>
                    </>)
                })}
            </section>
            <div style={{ display: categoryItems.length ? "block" : "none" }}
                className={`${styles["categories-items"]}`}
                onMouseLeave={() => handleCategoryItemsMouseLeave()} onMouseOver={() => handleCategoryMouseOver(
                    categories.filter(category => {
                        return JSON.stringify(category.listItems) === JSON.stringify(categoryItems)
                    })[0].name)}>
                {categoryItems.map(item => {
                    console.log('item is', item);
                    return (<div key={item}>{item}</div>)
                })}
            </div>
        </nav>)
}
