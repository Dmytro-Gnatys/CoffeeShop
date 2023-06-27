import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart.js";

// используем configureStore для создания хранилища Redux. 
// функция принимает объект конфигурации, в котором мы указываем редьюсеры и другие настройки (middleware)
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});


