import { createSelector } from "reselect";

export const itemsSelector = (state) => state.cart.items;

export const itemsSum = createSelector(itemsSelector, (items) =>
  items.reduce((subtotal, item) => subtotal + item.price * item.amount, 0)
);

export const itemsCount = createSelector(
  itemsSelector,
  (items) => items.length
);
