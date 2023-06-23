import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

/* setupListeners(store.dispatch); */
