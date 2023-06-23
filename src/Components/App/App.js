import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import dalmar from "../assets/img/dalmar.jpeg";
import gimoka from "../assets/img/gimoka.jpeg";
import illy from "../assets/img/illy.jpeg";
import isla from "../assets/img/isla.jpeg";
import itierra from "../assets/img/itierra.jpeg";
import lavazza from "../assets/img/lavazza.jpeg";
import lavazzaCrema from "../assets/img/lavazzaCrema.jpeg";
import melitta from "../assets/img/melitta.jpeg";
import merilld from "../assets/img/merilld.jpeg";
import paulig from "../assets/img/paulig.jpeg";
import starbucks from "../assets/img/starbucks.jpeg";
import thibo from "../assets/img/thibo.jpeg";
import MainPage from "../MainPage/MainPage";
import OurCoffee from "../OurCoffeePage/OurCoffee";
import AboutIt from "../AboutIt/aboutIt";
import Cart from "../buyCoffee/Cart";

import "../../style/style.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../../features/cart";
import AppHeader from "../AppHeader/AppHeader";

const Page404 = lazy(() => import("../Page404/404"));

const App = () => {
  const dispatch = useDispatch();
  const checkLocalStorrage = () => {
    const storedValue = JSON.parse(localStorage.getItem("cartData"));
    if (storedValue) dispatch(updateCart(storedValue));
  };

  useEffect(() => {
    checkLocalStorrage();
  }, []);

  const defsultValues = [
    {
      name: "Dallmayr",
      country: "Columbia",
      price: "5.99",
      images: dalmar,
      id: 1,
    },
    { name: "Gimoka", country: "Kenya", price: "6.79", images: gimoka, id: 2 },
    { name: "Illy", country: "Columbia", price: "8.99", images: illy, id: 3 },
    { name: "Isla", country: "Brazil", price: "6.99", images: isla, id: 4 },
    {
      name: "Itierra",
      country: "Columbia",
      price: "10.69",
      images: itierra,
      id: 5,
    },
    {
      name: "Lavazza",
      country: "Kenya",
      price: "11.34",
      images: lavazza,
      id: 6,
    },
    {
      name: "LavazzaCrema",
      country: "Brazil",
      price: "8.99",
      images: lavazzaCrema,
      id: 7,
    },
    {
      name: "Melitta",
      country: "Columbia",
      price: "9.99",
      images: melitta,
      id: 8,
    },
    {
      name: "Merrild",
      country: "Kenya",
      price: "5.99",
      images: merilld,
      id: 9,
    },
    {
      name: "Paullig",
      country: "Brazil",
      price: "8.99",
      images: paulig,
      id: 10,
    },
    {
      name: "Starbucks",
      country: "Columbia",
      price: "9.99",
      images: starbucks,
      id: 11,
    },
    { name: "Thibo", country: "Kenya", price: "5.99", images: thibo, id: 12 },
  ];

  return (
    <Router>
      <main className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/coffee"
            element={<OurCoffee defsultValues={defsultValues} />}
          />
          <Route
            path="/coffee/:coffeeId"
            element={<AboutIt defsultValues={defsultValues} />}
          />
          <Route
            path="/coffee/:coffeeId/buy"
            element={<Cart defsultValues={defsultValues} />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
