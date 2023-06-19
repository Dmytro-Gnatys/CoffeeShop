import black from "../assets/icon/Vector_bl.png";

import './coffeeLine.scss';

const CoffeeLine = () => {

    return (
        <div className="coffeeline_wrapper">
            <div className="coffeeline_border"></div>
            <img src={black} alt="coffee" className="coffeeline_img" />
        <div className="coffeeline_border"></div>
    </div>
    )
}

export default CoffeeLine;