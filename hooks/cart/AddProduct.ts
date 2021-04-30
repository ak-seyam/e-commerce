import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import Product from "../../model/Product/Product";

export function useAddingProduct() {
  const dispatch = useDispatch();
  const adder = (product: Product) => {
    dispatch(
      addItem({
        item: {
          name: product.name,
          price: product.price,
          id: product.id,
          img: product.img,
          amount: 1,
        },
      })
    );
    // TODO add it to local storage too
    // first get the items and parse them
    // check if there is any item with similar id
    // increase the amount else add a new item
    let items = JSON.parse(localStorage.getItem("cart-items") ?? "[]");
    const itemIndex = items.findIndex((element) => element.id === product.id);
    if (itemIndex !== -1) {
      items[itemIndex].amount++;
    } else {
      items.push({
        name: product.name,
        price: product.price,
        id: product.id,
        img: product.img,
        amount: 1,
      });
    }
    localStorage.setItem("cart-items", JSON.stringify(items));
  };

  return adder;
}
