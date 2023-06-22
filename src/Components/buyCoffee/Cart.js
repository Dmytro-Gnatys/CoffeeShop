import { Link, useParams } from "react-router-dom";

import AppHeader from "../AppHeader/AppHeader";
import BuyCoffeeList from "./BuyCoffeeList";
import useCart from "../../Hooks/useCart";

import "./main.scss";

const Cart = (props) => {
  const { cartItems, add } = useCart();

  /*     useEffect(() => {
    add(coffeeId, defsultValues);
  }, []);
 */

  //   useEffect(() => {
  //     // Логика фильтрации и проверки наличия элемента
  //     const newItem = defsultValues.filter(coffee => coffee.id === Number(coffeeId));
  //     const coffeeExists = cartItems.find(item => item.id === Number(coffeeId));

  //     // Вызов функции add
  //     if (newItem !== coffeeExists) {
  //         add(newItem);
  //       }

  //     // eslint-disable-next-line
  //   }, [coffeeId]);

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

            {cartItems.length ? (
              <div>
                {cartItems.map((item) => (
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
