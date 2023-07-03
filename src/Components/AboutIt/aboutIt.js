import { Link, useNavigate, useParams } from "react-router-dom";

import AppFooter from "../AppFooter/appFooter";
import CoffeeLine from "../CoffeeLine/CoffeeLine";
import basket from "../assets/icon/pngwing.png";
import { updateCart } from "../../features/cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "./aboutIt.scss";

const AboutIt = ({ defsultValues, cart }) => {
  const { coffeeId } = useParams();

  //достаем cart из Redux-хранилища. Значение cart получается из свойства cart объекта состояния state.cart.
  const navigate = useNavigate();

  const dispatch = useDispatch();
  //dispatch будет использоваться для отправки действия updateCart в Redux-хранилище.
  const selected = defsultValues.find((item) => item.id === Number(coffeeId));

  useEffect(() => {
    if (!selected) navigate("/");
  }, []);

  const addToCart = () => {
    const coffeeExists = cart.find((item) => item.id === Number(coffeeId));
    if (!coffeeExists) {
      const newCartItems = [...cart, selected];
      localStorage.setItem("cartData", JSON.stringify(newCartItems));
      dispatch(updateCart(newCartItems));
    }
  };
  //addToCart выполняется при нажатии на кнопку "Buy"
  //внутри функции создается новый массив newCartItems, который содержит текущий cart и выбранный товар selected
  //затем новый массив newCartItems сохраняется в локальное хранилище localStorage
  //и отправляется в Redux-хранилище с помощью функции dispatch(updateCart(newCartItems))

  return (
    <div className="ourcoffee">
      <h2>Our Coffee</h2>
      <div className="about">
        <div className="about_wrapper">
          <div className="about_item_img">
            <img src={selected ? selected.images : ""} alt="foto_aroma" />
          </div>
          <div className="about_item_text">
            <div className="about_item_text-title">About It</div>
            <CoffeeLine />
            <div className="about_item_text-country">
              Country: {selected ? selected.country : ""}
            </div>
            <div className="about_item_text-descr">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="about_item_text-buy">
              <div className="about_item_text-price">
                Price: {selected ? selected.price : ""}$
              </div>
              <div className="about_item_text-btn">
                <Link
                  onClick={addToCart}
                  to={`/coffee/${selected ? selected.id : ""}/buy`}
                  className="about_item_text-btn-link"
                >
                  Buy
                </Link>
                <img src={basket} alt="basket" className="menu_basket__icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default AboutIt;
