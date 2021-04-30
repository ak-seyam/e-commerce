import { createSelector } from "reselect";
import { Item } from "./cartSlice";

export const itemsSelector = (state) => state.cart.items;

export const itemsSum = createSelector(itemsSelector, (items) =>
  items.reduce((subtotal, item: Item) => {
    return subtotal + item.price * (item.amount || 1);
  }, 0)
);

export const itemsCount = createSelector(itemsSelector, (items) => {
  let total = 0;
  console.log("items are", items);
  items.forEach((item) => {
    total += item.amount;
  });
  return total;
});
