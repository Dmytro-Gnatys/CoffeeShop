import { Link } from "react-router-dom";
import coffee from "../assets/icon/Vector_footer.png";
import CoffeeLine from "../CoffeeLine/CoffeeLine";

import './appFooter.scss';

const AppFooter = () => {

    return (
        <div className="footer">
            <div className="wreapper">
                <ul className="footer_menu">
                    <img src={coffee} alt="coffee" className="menu_img" />
                    <li className="footer_menu_item">
                        <Link to="/" className="menu_link">Home</Link>
                    </li>
                    <li className="footer_menu_item">
                        <Link to="/coffee" className="menu_link">Our coffee</Link>
                    </li>
                    <li className="footer_menu_item">
                        <Link to="/coffee/:coffeeId" className="menu_link">Coffee house</Link>
                    </li>
                </ul>
            </div>
               <CoffeeLine/>
        </div>
        
    )
}

export default AppFooter;