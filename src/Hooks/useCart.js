import { useContext } from 'react';
import { CartContext } from '../Contexts/Cart.context';


const useCart = () => {
    return useContext(CartContext);
}

export default useCart;