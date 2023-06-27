import { Link } from "react-router-dom";

import coffee from "../assets/icon/Vector3.png";
import isla from "../assets/img/isla.jpeg";
import itierra from "../assets/img/itierra.jpeg";
import lavazza from "../assets/img/lavazza.jpeg";
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/appFooter';
import CoffeeLine from "../CoffeeLine/CoffeeLine";

import './mainPage.scss';

const MainPage = () => {
   
    return (
        <div className="main">
           <AppHeader/> 
            <h1>Everything You Love About Coffee</h1>
            <div className="main_wrapper">
                <div className="main_border"></div>
                <div className="main_img">
                    <img src={coffee} alt="coffee" className="main_img__coffee" />
                </div>
                <div className="main_border"></div>
            </div>
            <div className="main_descr">
                <p>We makes every day full of energy and taste</p>
                <p>Want to try our beans?</p>
            </div>
            <div className="main_button">
                <Link to="/coffee" className="main_button__link">More</Link>
            </div>
            <div className="about">
                <h3 className="about_title">About us</h3>
                   <CoffeeLine/>
                    <div className="content">
                    <div className="about_descr">
                        <p>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br></br>
                        </p>
                        <p>
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ourbest">
                <div className="ourbest_title">Our best</div>
                <div className="ourbest_wrapper">
                    <div className="ourbest_item">
                        <div className="ourbest_item-img">
                            <img src={isla} alt="imgbest1" className="our_best-img" />
                            <div className="ourbest_item-descr">Arabica Brazil 1 kg</div>
                            <div className="ourbest_item-price">6.99$</div>
                        </div>
                    </div>
                    <div className="ourbest_item">
                        <div className="ourbest_item-img">
                            <img src={itierra} alt="imgbest1" className="our_best-img" />
                            <div className="ourbest_item-descr">Robusta Columbia 1 kg</div>
                            <div className="ourbest_item-price">10.99$</div>
                        </div>
                    </div>
                    <div className="ourbest_item">
                        <div className="ourbest_item-img">
                            <img src={lavazza} alt="imgbest1" className="our_best-img" />
                            <div className="ourbest_item-descr">Lavazza Kenya 1 kg</div>
                            <div className="ourbest_item-price">11.34$</div>
                        </div>
                    </div>
                </div>
            </div>
            <AppFooter/>
        </div>
        
    )
}

export default MainPage;