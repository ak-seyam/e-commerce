import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
  name: string;
  price: number;
  id: string;
  amount: number;
  img: string;
}

export enum EditType {
  INCREMENT,
  DECREMENT,
}

export interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

export interface CartActionPayload {
  item: Item;
}

export const editItems = (
  items: Item[],
  productId: string,
  editType: EditType,
  amount: number,
  max: number
) => {
  items = items.map((item) => {
    if (item.id !== productId) {
      return item;
    }
    if (editType === EditType.DECREMENT)
      item.amount = Math.max(0, item.amount - amount);
    if (editType === EditType.INCREMENT)
      item.amount += Math.min(max, item.amount + amount);
    return item;
  });
};

const counterSlice = createSlice({
  name: "counter",
  reducers: {
    editItemAmount: (
      state,
      action: PayloadAction<{
        productId: string;
        editType: EditType;
        amount: number;
        max: number;
      }>
    ) => {
      editItems(
        state.items,
        action.payload.productId,
        action.payload.editType,
        action.payload.amount,
        action.payload.max
      );
    },
    addItem: (state, action: PayloadAction<CartActionPayload>) => {
      const id = state.items.findIndex((element) => {
        return element.id === action.payload.item.id;
      });
      if (id !== -1) {
        state.items[id].amount++;
      } else {
        state.items.push(action.payload.item);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  initialState,
});

export const {
  addItem,
  removeItem,
  setItems,
  editItemAmount,
} = counterSlice.actions;
export default counterSlice.reducer;
