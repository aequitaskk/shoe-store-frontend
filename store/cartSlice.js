import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    favorites: [],
  },
  reducers: {
    

    addToCart: (state, action) => {
      const item = state.cartItems.find(
          (p) => p.id === action.payload.id
      );
      if (item) {
          item.quantity++;
          item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
          state.cartItems.push({ ...action.payload, quantity: 1 });
      }
  },

    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            item.attributes.price = item.oneQuantityPrice * action.payload.val;
          }
          return { ...item, [action.payload.key]: action.payload.val };
        }
        return item;
      });
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    //add item to favorites list
    addToFavorites: (state, action) => {
      const item = state.favorites.find(
        (p) => p.id === action.payload.id
      );
      if (!item) {
        state.favorites.push({ ...action.payload });
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart, addToFavorites } = cartSlice.actions;

export default cartSlice.reducer;
