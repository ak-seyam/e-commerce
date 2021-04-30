import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "node:fs";

export interface Item {
  name: string;
  price: number;
  id: string;
  amount: number;
  img: string;
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

const counterSlice = createSlice({
  name: "counter",
  reducers: {
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
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  initialState,
});

export const { addItem, removeItem, setItems } = counterSlice.actions;
export default counterSlice.reducer;
