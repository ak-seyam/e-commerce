import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      state.items.push(action.payload.item);
    },
    removeItem: (state, action: PayloadAction<CartActionPayload>) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.item.id
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
