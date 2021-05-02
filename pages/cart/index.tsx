import Image from "next/image"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import NavBar from "../../components/navbar/Navbar"
import { addItem, Item } from "../../features/cart/cartSlice"
import { itemsSelector, itemsSum } from "../../features/cart/selectors"
import { useDeletingProduct } from "../../hooks/cart/DeleteProduct"
import styles from "./cart.module.css"
export default function CartItems() {
    const items: Item[] = useSelector(itemsSelector)
    const totalPrice: number = useSelector(itemsSum)
    const dispatch = useDispatch()
    const deleteProduct = useDeletingProduct()

    useEffect(() => {
        if (!items.length) {
            const itemLocalStorage = JSON.parse(localStorage.getItem('cart-items'))
            itemLocalStorage.forEach(item => {
                dispatch(addItem(
                    { item }
                ))
            });
        }
    }, [])
    return (
        <>
            <NavBar />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px" }}>
                <h1><i className="fas fa-shopping-cart"></i> <span style={{ width: "40px" }}>&nbsp;&nbsp;</span> My Cart</h1>
                <div style={{ marginRight: "32px" }}>
                    <span className={`${styles["total-price"]}`}>Total price: </span>
                    <span className={`${styles["price-tot"]}`}>{totalPrice}$</span> <br />
                </div>
            </div>
            <section className={`${styles["items-container"]}`}>
                {items ?
                    items.map((item) => {
                        return (
                            <div className={`${styles["cart-item"]}`} key={item.id}>
                                <div className={`${styles["product-img"]}`}>
                                    <Image objectFit="scale-down" height="200" width="200" src={item.img} alt={item.name} /> <br />
                                </div>
                                <div className={`${styles["item-info"]}`}>
                                    <div className={`${styles["name"]}`}>{item.name}</div>
                            amount: {item.amount} <br />
                                    <div className={`${styles["price"]}`}>Total price: <strong>{item.price * item.amount}$</strong> </div>
                                    <button className={`button danger`} onClick={() => { deleteProduct(item.id) }}>
                                        <i className={`fas fa-trash`}></i> Delete</button>
                                </div>
                            </div>
                        )
                    })
                    : <div>"loading..."</div>}
            </section>
        </>
    )
}