import { Link, useParams } from "react-router-dom";

import AppHeader from "../AppHeader/AppHeader";
import BuyCoffeeList from "./BuyCoffeeList";
/* import useCart from "../../Hooks/useCart"; */

import "./main.scss";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <section className="section-cart">
      <div className="ourcoffee">
        <AppHeader />
        <h2>Shopping List</h2>
      </div>
      <div className="section-cart__body">
        <div className="container">
          <section className="cart">
            <header className="cart-header">
              <div className="cart-header__title">Title</div>
              <div className="cart-header__count">Quantity</div>
              <div className="cart-header__cost">Price</div>
            </header>

            {cart?.length ? (
              <div>
                {cart?.map((item) => (
                  <BuyCoffeeList key={item.id} {...item} />
                ))}
              </div>
            ) : (
              <p>No items selected</p>
            )}
            <footer className="cart-footer">
              <div className="cart-footer__count">3 units</div>
              <div className="cart-footer__price">$</div>
              <div className="cart-footer__btns">
                <Link to="/coffee" className="button button__main">
                  <div className="inner">Acept</div>
                </Link>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </section>
  );
};
export default Cart;
