import { Link } from "react-router-dom";

import coffee from "../assets/icon/Vector.png";
import basket from "../assets/icon/pngwing.png";

import "./appHeader.scss";

const AppHeader = ({ cartLength }) => {



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
            <Link to="/coffee/:coffeeId/buy" className="header_menu_link">
              Shopping List
            </Link>
          </li>
        </ul>
        <div className="header_menu_basket">
          <div class="header_menu_basket_circle">{ cartLength }</div>
          <Link to="/coffee/:coffeeId/buy">
            <img src={basket} alt="basket" className="menu_basket__icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
