import { Link } from "react-router-dom";

import AppFooter from "../AppFooter/appFooter";
import BuyCoffeeItem from "./BuyCoffeeItem";

import { useSelector } from "react-redux";
import "./main.scss";
import { useEffect } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  //достаем cart из Redux-хранилища и сипользуем в рендере

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * (item.count >= 1 ? item.count : 1);
    });
    return totalPrice.toFixed(2);
  };
  useEffect(() => {
    console.log(1);
  });

  return (
    <section className="section-cart">
      <div className="ourcoffee">
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
                  <BuyCoffeeItem key={item.id} {...item} />
                ))}
              </div>
            ) : (
              <p className="cart-footer-none">No items selected</p>
            )}
            <footer className="cart-footer">
              <div className="cart-footer__count">{cart.length} units</div>
              <div className="cart-footer__price">{calculateTotalPrice()}$</div>
              <div className="cart-footer__btns">
                <Link to="/coffee" className="button button__main">
                  <div className="inner">Acept</div>
                </Link>
              </div>
            </footer>
          </section>
        </div>
      </div>
      <AppFooter />
    </section>
  );
};
export default Cart;
