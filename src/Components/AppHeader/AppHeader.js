import { Link } from "react-router-dom";

import coffee from "../assets/icon/Vector.png";
import basket from "../assets/icon/pngwing.png";

import "./appHeader.scss";

const AppHeader = () => {
  return (
    <nav>
      <div className="header_wreapper">
        <ul className="header_menu">
          <img src={coffee} alt="coffee" className="menu_img" />
          <li className="header_menu_item">
            <Link to="/" className="header_menu_link">
              Home
            </Link>
          </li>
          <li className="header_menu_item">
            <Link to="/coffee" className="header_menu_link">
              Our coffee
            </Link>
          </li>
          <li className="header_menu_item">
            <Link to="/coffee/:coffeeId" className="header_menu_link">
              Coffee house
            </Link>
          </li>
        </ul>
        <div className="header_menu_basket">
          <Link to="/coffee/:coffeeId/buy">
            <img src={basket} alt="basket" className="menu_basket__icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
