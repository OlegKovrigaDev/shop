import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types";

interface CartState {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const cartItem = state.cart.find((item) => item.id === product.id);

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      state.totalItems += 1;
      state.totalPrice += product.price;
    },
    removeFromCart(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const index = state.cart.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        state.totalItems -= state.cart[index].quantity;
        state.totalPrice -=
          state.cart[index].quantity * state.cart[index].price;
        state.cart.splice(index, 1);
      }
    },
    clearCart(state) {
      state.cart = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
