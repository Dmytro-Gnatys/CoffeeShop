import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, useCallback} from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BuyCoffeeList from './BuyCoffeeList';



import './main.scss';

const BuyCoffee = (props) => {
    const { coffeeId } = useParams();
    const {defsultValues} = props;

    const [selectedCoffee, setSelectedCoffee] = useState([]);
    
    useEffect(() => {
      const filteredCoffee = defsultValues.filter(coffee => coffee.id === Number(coffeeId));
       // Проверка наличия элемента с таким же coffeeId в selectedCoffee
      const coffeeExists = selectedCoffee.find(item => item.id === Number(coffeeId));
  
      // Если элемент с таким coffeeId уже существует, не обновляем состояние
      if (!coffeeExists) {
      setSelectedCoffee(prevSelectedCoffee  => [...prevSelectedCoffee, ...filteredCoffee]);
  }
  // eslint-disable-next-line
  }, [coffeeId, selectedCoffee.length]);

     // Функция для сохранения состояния в Local Storage
  const saveStateToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('selectedCoffeeState', serializedState);
    } catch (error) {
      console.error('Error saving state to Local Storage:', error);
    }
  };

  // Функция для загрузки состояния из Local Storage
  const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('selectedCoffeeState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.error('Error loading state from Local Storage:', error);
      return undefined;
    }
  };

  useEffect(() => {
    // Загрузка состояния из Local Storage при монтировании компонента
    const savedState = loadStateFromLocalStorage();
    if (savedState) {
      setSelectedCoffee(savedState);
    }
  }, []);

  useEffect(() => {
    // Сохранение состояния в Local Storage при изменении состояния
    saveStateToLocalStorage(selectedCoffee);    
  }, [selectedCoffee]);


  const onDelete = useCallback(
    (itemId) => {
      setSelectedCoffee(prevSelectedCoffee => prevSelectedCoffee.filter(item => item.id !== itemId));
    },
    [coffeeId, selectedCoffee]
  );

  // const onDelete = (itemId) => {
  //   setSelectedCoffee((PrevSelectedCoffee) =>
  //     PrevSelectedCoffee.filter((item) => item.id !== itemId)
  //   );
  // };
  

//   const handleCountUp = (itemId) => {
//     setSelectedCoffee((selectedCoffee) => {
//       return selectedCoffee.map((item) =>
//         item.id === itemId ? { ...item, count: (item.count ?? 1) + 1 } : item
//       );
//     });
//   };
  
//   const handleCountDown = (itemId) => {
//     setSelectedCoffee((selectedCoffee) => {
//       return selectedCoffee.map((item) =>
//         item.id === itemId && item.count > 1
//           ? { ...item, count: (item.count ?? 1) - 1 }
//           : item
//       );
//     });
//   };

    return (        
        <section className="section-cart">
            <div className="ourcoffee">
                <AppHeader/>
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

                        {selectedCoffee.length > 0 ? (
                          <div>
                            {selectedCoffee.map((item) => (
                              <BuyCoffeeList
                                key={item.id} {...item}
                                onDelete={onDelete}
                              />
                            ))}
                          </div>
                        ) : (
                          <p>No items selected</p>
                        )}

                        {/* {selectedCoffee.map((item) => {
                            return <BuyCoffeeList key={item.id} {...item} 
                            onDelete={onDelete}
                            />;
                        })} */}
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
    }
export default BuyCoffee;