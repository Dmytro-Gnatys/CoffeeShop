import { Link, useParams } from "react-router-dom";

import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/appFooter";
import CoffeeLine from "../CoffeeLine/CoffeeLine";
import basket from "../assets/icon/pngwing.png";

import "./aboutIt.scss";
import useCart from "../../Hooks/useCart";

const AboutIt = ({ defsultValues }) => {
  const { coffeeId } = useParams();
  const { cartItems, add } = useCart();

  // мы достаем именно переменную defsultValues из пропсов, это должна быть реальная переменная

  const selected = defsultValues.find((item) => item.id === Number(coffeeId));
  console.log("RENDER");

  return (
    <div className="ourcoffee">
      <AppHeader />
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
                  onClick={() => {
                    add(selected, defsultValues);
                  }}
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
