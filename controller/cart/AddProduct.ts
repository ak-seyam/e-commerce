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
    localStorage.setItem(
      "cart-items",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("cart-items") ?? "[]"),
        product,
      ])
    );
  };

  return adder;
}
