import { useDispatch } from "react-redux";
import {
  editItemAmount,
  editItems,
  EditType,
} from "../../features/cart/cartSlice";

export function useEditProduct() {
  const dispatch = useDispatch();
  const editor = (
    productId: string,
    editType: EditType,
    amount: number,
    max: number
  ) => {
    dispatch(editItemAmount({ productId, editType, amount, max }));
    let items = JSON.parse(localStorage.getItem("cart-items"));
    editItems(items, productId, editType, amount, max);
    localStorage.setItem("cart-items", JSON.stringify(items));
  };
  return editor;
}
