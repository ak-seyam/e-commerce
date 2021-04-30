import { useDispatch } from "react-redux";
import { removeItem } from "../../features/cart/cartSlice";
import Product from "../../model/Product/Product";

export const useDeletingProduct = () => {
  const dispatch = useDispatch();
  const deleter = (productId: string) => {
    dispatch(removeItem(productId));
    let items = JSON.parse(localStorage.getItem("cart-items"));
    items = items.filter((item) => item.id !== productId);
    localStorage.setItem("cart-items", JSON.stringify(items));
  };
  return deleter;
};
