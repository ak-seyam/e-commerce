import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCategories from "../../controller/category/getCategories";
import { itemsCount } from "../../features/cart/selectors";
import SigninForm from "../forms/singInForm";
import Modal from "../Modal/Modal";
import BestDeals from "./BestDeals";
import styles from "./navbar.module.css";
import SearchBar from "./searchbar";
import { setItems } from "../../features/cart/cartSlice"

export default function NavBar() {
  const [navbarActive, setNavbarActive] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [menuFocused, setMenuFocused] = useState(false);
  const fabRef = useRef(null);
  const fabContentRef = useRef(null);
  const bestRef = useRef(null);
  const [myModalShow, setMyModalShow] = useState(false);
  const count = useSelector(itemsCount)
  const dispatch = useDispatch()
  // const searchbarRef = useRef(null)

  const [localStorageProdsStr, setLocalStorageProdsStr] = useState("")
  const [countFromLocalStorage, setCountFromLocalStorage] = useState(0)

  useEffect(() => {
    if (localStorage)
      setLocalStorageProdsStr(localStorage.getItem("cart-items"))
  }, [])

  useEffect(() => {

    if (localStorageProdsStr !== "") {
      const products = JSON.parse(localStorageProdsStr)
      setCountFromLocalStorage(products.length)
      dispatch(setItems(products))
    }
  }, [localStorageProdsStr])

  const handleFabFocus = () => {
    setMenuFocused(true);
    console.log("clicked focus");
    fabRef.current.className = `${styles["fab"]} ${styles["focused"]}`;
    fabContentRef.current.className = `${styles["fab-content"]} ${styles["focused"]}`;
  };

  const handleFabBlur = () => {
    setMenuFocused(false);
    const sb = document.getElementById("search-bar");
    if (document.activeElement !== sb) {
      fabRef.current.className = `${styles["fab"]} ${styles["blurred"]}`;
      fabContentRef.current.className = `${styles["fab-content"]} ${styles["blurred"]}`;
    }
  };
  // TODO add cart state
  useEffect(() => {
    if (!window.matchMedia("(max-width: 700px)").matches) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
          setNavbarActive(true);
          if (bestRef.current) bestRef.current.style.color = "#F4F1BB";
        } else {
          setNavbarActive(false);
          if (bestRef.current) bestRef.current.style.color = "#000000";
        }
      });
    }
    const _getCategories = async () => {
      setCategories(await getCategories());
      setLoadingCategories(false);
    };
    _getCategories();
  }, []);

  function handleMouseOver(categoryName: string) {
    const _listItem = categories
      .filter((category) => {
        if (category.name === categoryName) {
          return true;
        }
      })
      .map((item) => item.listItems);
    setCategoryItems(_listItem[0]);
    handleCategoryMouseOver(categoryName);
  }

  function handleCategoryMouseOver(id: string) {
    const categoriesContainer = document.querySelector("#categories");
    const _categories = Array.from(categoriesContainer.children);

    _categories.forEach((cat) => {
      console.log("categories", cat.id, id);

      if (cat.id === id) {
        cat.className = `${styles["category-button"]} ${styles["hovered"]}`;
      } else {
        cat.className = `${styles["category-button"]}`;
      }
    });
    // const cat = document.querySelector(`#${id}`)
  }

  function handleCategoryItemsMouseLeave() {
    setCategoryItems([]);
    handleCategoryMouseOver(undefined);
  }

  return (
    <nav className={`${styles["container"]}`}>
      <section
        className={`${styles["navbar"]} ${navbarActive ? styles["active"] : ""
          }`}
      >
        <Image
          className={styles["aligned-element"]}
          src="/logo.png"
          height="70px"
          width="70px"
        />
        <SearchBar />
        <div style={{ width: "120px" }}>
          <a style={{ textDecoration: "none" }} href="#best-deals">
            <BestDeals ref={bestRef} />
          </a>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <div
            className={`${styles["aligned-element"]} ${styles["account"]}`}
            onClick={() => {
              setMyModalShow(true);
            }}
          >
            <i className="fas fa-user-alt"></i>
          </div>
          <div className={`${styles["account-service"]}`}
            onClick={() => {
              setMyModalShow(true);
            }}
          >
            <span style={{ fontSize: "12px" }}>Login</span>
            <b>MyAccount</b>
          </div>
          <Modal
            show={myModalShow}
            onHide={() => setMyModalShow(false)}
          >
            <SigninForm />
          </Modal>
        </div>
        <Link href="/cart">
          <div className={`${styles["cart-container"]}`}>
            <div
              className={`${styles["aligned-element"]} ${styles["shopping-cart"]}`}
            >
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className={`${styles["cart-items-count"]}`}>{count == 0 ? countFromLocalStorage : count}</div>
          </div>
        </Link>
      </section>
      <section id={"categories"} className={`${styles["categories"]}`}>
        {loadingCategories
          ? "loading"
          : categories.map((category) => {
            return (
              <div
                key={category.name}
                id={category.name}
                className={`${styles["category-button"]}`}
                onMouseOver={() => handleMouseOver(category.name)}
              >
                {category.name}
              </div>
            );
          })}
      </section>
      <div
        style={{ display: categoryItems.length ? "block" : "none" }}
        className={`${styles["categories-items"]}`}
        onMouseLeave={() => handleCategoryItemsMouseLeave()}
        onMouseOver={() =>
          handleCategoryMouseOver(
            categories.filter((category) => {
              return (
                JSON.stringify(category.listItems) ===
                JSON.stringify(categoryItems)
              );
            })[0].name
          )
        }
      >
        {categoryItems.map((item) => {
          console.log("item is", item);
          return <div key={item}>{item}</div>;
        })}
      </div>
      <div className={`${styles["nav-mob"]}`}>
        <Image width="50" height="50" src="/logo.png" />
        <div
          ref={fabRef}
          tabIndex={0}
          onClick={handleFabFocus}
          onMouseLeave={handleFabBlur}
          className={`${styles["fab"]}`}
        >
          <div
            style={{
              fontSize: "18px",
              display: menuFocused ? "none" : "inline",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <i className="fas fa-bars"></i>
          </div>
          <div ref={fabContentRef} className={`${styles["fab-content"]}`}>
            <SearchBar zIndex={1500} />
            <div className={styles["fab-menu"]}>
              {loadingCategories ? "Loading..." : ""}
              {categories.map((cat) => {
                return <div key={cat.name}>{cat.name}</div>;
              })}
            </div>
            <div className={`${styles["bottom"]}`}>
              <div className={`${styles["account-service"]}`}>
                <span style={{ fontSize: "12px" }}>Login</span>
                <b>MyAccount</b>
              </div>
              <div className={`${styles["account-service"]}`}>
                <span style={{ fontSize: "12px" }}>Your Cart</span>
                <b>Items</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
