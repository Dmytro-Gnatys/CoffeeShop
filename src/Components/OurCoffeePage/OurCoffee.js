import {useState, useCallback } from 'react';
import girl from "../assets/img/girl.jpg";

import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/appFooter';
import CoffeeLine from "../CoffeeLine/CoffeeLine";
import AppFilter from '../AppFilter/appFilter';
import SearchPanel from '../SearchPanel/SearchPanel';
import SliderList from '../SliderList/SliderList';

import './ourCoffee.scss';

const OurCoffee = (props) => {
    const {defsultValues} = props;

    const [coffeeItem, setCoffeeItem] = useState(defsultValues);
    
    const [termSearch, setTermSearch] = useState({
        term: ''
    });
    
    const [filterSearch, setFilterSearch] = useState({
        filter: "all",
    })

    const onFilterSelect = (filter) => {
        setFilterSearch({ filter });
    };

    const onUpdateCoffeeItems = useCallback((country) => {
        if (['Columbia', 'Kenya', 'Brazil'].includes(country)) {
            const filteredItems = defsultValues.filter((item) => item.country.toLowerCase() === country.toLowerCase());
            setCoffeeItem(filteredItems);
        } else {
            setCoffeeItem([...defsultValues]);
        }
        // eslint-disable-next-line 
    }, [defsultValues.length]);
    // лучше привязываться к значению, чем к всему массиву

    const serchEmp = (items, term) => {
        if (term.length === 0) {
          return items;
        }
      
        const lowercaseTerm = term.toLowerCase();
      
        return items.filter((item) => {
          const lowercaseName = item.name.toLowerCase();
          const lowercaseCountry = item.country.toLowerCase();
          const lowercasePrice = item.price.toLowerCase();
      
          return (
            lowercaseName.includes(lowercaseTerm) ||
            lowercaseCountry.includes(lowercaseTerm) ||
            lowercasePrice.includes(lowercaseTerm)
          );
        });
      };
    
      const onUpdateSearch = (term) => {
        setTermSearch({term});
      };
    
    const filterPost = (items, filter) => {
        // filter на странице 4 варианта и в зависимости от того, какой фильтр выбран нужно выполнить поиск
        switch (filter) {
            case "Columbia":
                return items.filter((item) => item.country === 'Columbia');
            case "Kenya":
                return items.filter((item) => item.country === 'Kenya');
            case "Brazil":
                return items.filter((item) => item.country === 'Brazil');
          default:
            return items;
        }
      };

    const {filter} = filterSearch;
    const {term} = termSearch;
    const visibleData = filterPost(serchEmp(coffeeItem, term), filter);


    return (
        <div className="ourcoffee">
                <AppHeader/>
                <h2>Our Coffee</h2>
            <div className="ourbeens">
                <div className="ourbeens_wrapper">
                    <div className="ourbeens_item-img">
                    <img src={girl} alt="foto_girl" className="ourbeens_item-img" />
                    </div>
                    <div className="ourbeens_item_about">
                        <div className="ourbeens_item_about-title">About our beans</div>
                        <CoffeeLine/>
                        <div className="ourbeens_item_about-descr">
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p> 
                        <p>Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.</p>
                        <p>As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                        </div>
                    </div>
                </div>
                <div className="ourbeens_border"></div>
            </div>
            <div className="content">
                <div className="ourbeens_form_wrapper">
                    <SearchPanel term={term} onUpdateSearch={onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={onFilterSelect} onUpdateCoffeeItems={onUpdateCoffeeItems}/>
                </div>
                <SliderList data={visibleData} />
            </div>
                <AppFooter/>
            </div>
    )
}

export default OurCoffee;
