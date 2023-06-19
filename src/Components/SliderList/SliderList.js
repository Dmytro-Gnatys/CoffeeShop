import {useState } from 'react';
import SliderListItem from '../SliderListItem/sliderlistItem';

import left from "../assets/icon/left-solid.png";
import right from "../assets/icon/right-solid.png";

import "./sliderList.scss";

const SliderList = (props) => {
    // получаем массив coffeeItems через props. 
    
    const [slide, setSlide] = useState(1);

    const handleLeftClick = () => {
      setSlide(slide === 1 ? 2 : 1);
    };
  
    const handleRightClick = () => {
      setSlide(slide === 1 ? 2 : 1);
    };

const slide1Items = props.data.slice(0, 6); // Первые 6 элементов из props.data
const slide2Items = props.data.slice(6, 12); // Оставшиеся элементы из props.data

// Проверяем количество элементов в каждом слайде
const slide1ItemCount = slide1Items.filter(item => item != null).length;
const slide2ItemCount = slide2Items.filter(item => item != null).length;

// Дополняем слайды, если элементов менее 6
if (slide1ItemCount < 6) {
  const additionalItems = slide2Items.slice(0, 6 - slide1ItemCount);
  slide1Items.push(...additionalItems);
}

if (slide2ItemCount < 6) {
  const additionalItems = slide1Items.slice(0, 6 - slide2ItemCount);
  slide2Items.push(...additionalItems);
}

    return (
        <div className="ourbeen_shop_slider">
            <div 
            className={
                slide ===1
                 ? `ourbeens_shop_slide_active` 
                 : `ourbeens_shop_slide`
            }
            >
            <div className="ourbeens_shop-left" onClick={handleLeftClick}>
                <img src={left} alt="left"/>
            </div>
                <div className="ourbeens_shop_slide_wrapper">
                    {slide1Items.map((item) => {
                        return <SliderListItem key={item.id} {...item} />;
// для каждого элемента массива мы рендерим компонент SliderListItem
// передаем ему свойства key и распаковываем остальные свойства объекта как пропсы с помощью оператора spread ({...item})
// Таким образом, в компоненте SliderListItem мы сможем получить доступ к name, country, price, id через props.
                    })}
                </div>
                    <div className="ourbeens_shop-right" onClick={handleRightClick}>
                        <img src={right} alt="right" />
                    </div>
            </div>
                
            <div 
            className={
                slide ===2
                 ? `ourbeens_shop_slide_active`
                 : `ourbeens_shop_slide`
                 }>
                    <div className="ourbeens_shop-left" onClick={handleLeftClick}>
                        <img src={left} alt="left"/>
                    </div>
                    <div className="ourbeens_shop_slide_wrapper">
                    {slide2Items.map((item) => {
                        return <SliderListItem key={item.id} {...item} />;
                    })}
                    </div>
                <div className="ourbeens_shop-right" onClick={handleRightClick}>
                    <img src={right} alt="right" />
                </div>
            </div>
        </div>
    )
}

export default SliderList;