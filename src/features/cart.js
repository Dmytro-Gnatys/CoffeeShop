import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.cart = action.payload;
//updateCart - это действие (action), которое будет создано автоматически с помощью Redux Toolkit
//принимает параметр payload, который будет использоваться для обновления состояния.
    },
  },
});
// cart - это срез (slice), созданный с помощью функции createSlice. 
// в функцию передается объект с тремя свойствами:
//name: имя среза, которое будет использоваться для генерации имени редьюсера.
//initialState: начальное состояние среза.
//reducers: объект, содержащий редьюсеры для обновления состояния среза.


export const { updateCart } = cart.actions;
//cart.actions - это объект, содержащий все действия (actions), созданные срезом.
//в данном случае, есть только одно действие - updateCart.

export default cart.reducer;
//cart.reducer - это редьюсер, созданный срезом
//он будет обрабатывать все действия среза и обновлять состояние согласно определенным редьюсерам.