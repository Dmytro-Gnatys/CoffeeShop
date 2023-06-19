import { Link } from "react-router-dom";
import "./sliderListItem.scss";

const SliderListItem = (props) => {
    
    return (
        <div className="ourbeens_shop_item">
            <img src={props.images} alt="img" className="ourbeens_shop_item-img"/>
            <div className="ourbeens_shop_item-desc">{props.name}</div>
            <div className="ourbeens_shop_item-country">{props.country}</div>
            <div className="ourbeens_shop_item-price">
                <div className="ourbeens_shop_item-inner">
                    <Link to={{ pathname: `/coffee/${props.id}`}} className="ourbeens_shop_item-inner__link">About</Link>
                </div>
                <div className="ourbeens_shop_item-price">{props.price}$</div>
            </div>
            
        </div>
    )
}

export default SliderListItem;
