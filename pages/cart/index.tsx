import Image from "next/image"
import { useSelector } from "react-redux"
import { Item } from "../../features/cart/cartSlice"
import { itemsSelector, itemsSum } from "../../features/cart/selectors"
export default function CartItems() {
    const items: Item[] = useSelector(itemsSelector)
    const totalPrice: number = useSelector(itemsSum)
    return (
        <div>
            total price: {totalPrice}$ <br />
            {items.map(item => {
                return (
                    <>
                        {item.name} <br />
                        {item.price}$ <br />
                        <Image objectFit="scale-down" height="200" width="200" src={item.img} alt={item.name} /> <br />
                        ------------------------- <br />
                    </>
                )
            })}
        </div>
    )
}