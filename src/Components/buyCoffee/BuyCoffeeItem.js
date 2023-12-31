import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateCart } from "../../features/cart";

import "./main.scss";

const BuyCoffeeItem = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const removedItems = cart.filter((el) => el.id !== props.id);

    localStorage.setItem("cartData", JSON.stringify(removedItems));
    dispatch(updateCart(removedItems));
  };

  const [count, setCount] = useState(props.count || 1);
  // Используем useState для управления состоянием поля ввода

  const handleCountChange = (e) => {
    const newCount = parseInt(e.target.value, 10);
    setCount(newCount); // Обновляем состояние поля ввода при изменении значения
  };

  const handleCountUp = () => {
    const updatedCartUp = cart.map((item) => {
      if (item.id === props.id) {
        return { ...item, count: (item.count || 0) + 1 };
      }
      return item;
    });

    localStorage.setItem("cartData", JSON.stringify(updatedCartUp));
    dispatch(updateCart(updatedCartUp));
    setCount(count + 1); // Обновляем состояние поля ввода
  };

  const handleCountDown = () => {
    if (props.count <= 1) {
      return;
    }
    const updatedCartDown = cart.map((item) => {
      if (item.id === props.id) {
        return { ...item, count: (item.count || 0) - 1 };
      }
      return item;
    });

    localStorage.setItem("cartData", JSON.stringify(updatedCartDown));
    dispatch(updateCart(updatedCartDown));
    setCount(count - 1); // Обновляем состояние поля ввода
  };

  return (
    <section className="product">
      <div className="product__img">
        <img src={props.images} alt="img" />
      </div>
      <div className="product__title">
        {props.name} : {props.country}
      </div>
      <div className="product__count">
        <div className="count">
          <div className="count__box">
            <input
              type="number"
              className="count__input"
              min="1"
              max="100"
              value={count}
              onChange={handleCountChange}
            />
          </div>
          <div className="count__controls">
            <button type="button" className="count__up" onClick={handleCountUp}>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7L7 1L1 7"
                  stroke="#A0BBCC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  alt="Increase"
                />
              </svg>
            </button>
            <button
              type="button"
              className="count__down"
              onClick={handleCountDown}
            >
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#A0BBCC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  alt="Decrease"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="product__price">{props.price}$</div>
      <div className="product__controls">
        <button type="button" onClick={handleDelete}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#7E9BBD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#7E9BBD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              alt="Delete"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default BuyCoffeeItem;
