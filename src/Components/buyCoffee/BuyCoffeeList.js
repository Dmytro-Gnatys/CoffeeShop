import { useState } from "react";
import "./main.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../features/cart";

const BuyCoffeeList = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const removedItems = cart.filter((el) => el.id !== props.id);

    localStorage.setItem("cartData", JSON.stringify(removedItems));
    dispatch(updateCart(removedItems));
  };

  // const handleCountUp = () => {
  //     props.onCountUp(props.id);
  //   };

  //   const handleCountDown = () => {
  //     props.onCountDown(props.id);
  //   };

  // функция для работы счетчика
  const [count, setCount] = useState(1);

  const handleCountUp = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleCountDown = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
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
              max="100" /* value={count} */
              defaultValue={1}
              onChange={(e) => setCount(e.target.value)}
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

export default BuyCoffeeList;
