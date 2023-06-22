import { createContext, useEffect, useReducer } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

// передается пустой объект в качестве значения контекста по умолчанию
// он будет заменен внутри CartProvider
export const CartContext = createContext({});

// Определение редюсера
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return [action.payload];

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const { children } = props;
  const [cartData, setCartData] = useLocalStorage("cartData", []);
  //хук useLocalStorage для получения и управления данными корзины (cartData) в localStorage
  //хук возвращает значение cartData (selectedCoffee) и функцию setCartData для установки нового значения
  //мы передаем строку 'cartData' в качестве ключа для сохранения данных в localStorage
  //пустой массив [] в качестве значения по умолчанию
  // [] будет использоваться, если в localStorage нет данных для ключа 'cartData'.

  // Использование useReducer для управления состоянием cartItems (BuyCofeeList)
  const [cartItems, dispatch] = useReducer(cartReducer, cartData);

  // устанавливается эффект, который будет срабатывать при изменении длины массива cartItems
  // функция setCartData для обновления данных в localStorage с новым значением cartItems.
  useEffect(() => {
    setCartData(cartItems);
  }, [cartItems.length]);

  //объект ctxData содержит данные контекста
  const ctxData = {
    cartItems,
    add: (newItem) => {
      dispatch({ type: "ADD_ITEM", payload: newItem });
    },
    edit: (id, count) => void 0,
    remove: (RemovedArray) => {
      dispatch({ type: "REMOVE_ITEM", payload: RemovedArray });
    },
  };

  return (
    <CartContext.Provider value={ctxData}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
//CartProvider предоставляет контекст CartContext со значениями cartItems и функциями для изменения состояния корзины
// которые могут быть использованы во всех компонентах, находящихся внутри CartProvider
