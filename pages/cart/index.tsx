import Image from "next/image"
import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem, Item } from "../../features/cart/cartSlice"
import { itemsSelector, itemsSum } from "../../features/cart/selectors"
import { useDeletingProduct } from "../../hooks/cart/DeleteProduct"
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
        <div>
            total price: {totalPrice}$ <br />
            {items ? items.map((item, i) => {
                return (
                    // TODO : bad fix the ${i}
                    <Fragment key={`${item.id}`}>
                        {item.name} <br />
                        {item.price}$ <br />
                        <Image objectFit="scale-down" height="200" width="200" src={item.img} alt={item.name} /> <br />
                        amount: {item.amount} <br />
                        ------------------------- <br />
                        <button onClick={() => { deleteProduct(item.id) }}>Delete</button>
                    </Fragment>
                )
            }) : "loading..."}
        </div>
    )
}