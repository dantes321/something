import React, { useReducer } from 'react';
import storeReducer, {addToCartAC} from './store-reducer';

export const StoreContext = React.createContext(null);

let initialState = {
  cards: [
    {
      id: 1,
      img: 'https://react-shooping-cart.netlify.app/img/1.jpg?v=1',
      title: 'Buffalo - Striploin',
      price: 35,
    },
    {
      id: 2,
      img: 'https://react-shooping-cart.netlify.app/img/2.jpg?v=2',
      title: 'Buffalo - Striploin',
      price: 35,
    },
    {
      id: 3,
      img: 'https://react-shooping-cart.netlify.app/img/3.jpg?v=3',
      title: 'Buffalo - Striploin',
      price: 15,
    },
    {
      id: 4,
      img: 'https://react-shooping-cart.netlify.app/img/4.jpg?v=4',
      title: 'Buffalo - Striploin',
      price: 25,
    },
    {
      id: 5,
      img: 'https://react-shooping-cart.netlify.app/img/5.jpg?v=5',
      title: 'Buffalo - Striploin',
      price: 35,
    },
  ],
  cartItems: [],
};

export const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return <StoreContext.Provider value ={{state}}>{children}</StoreContext.Provider>;
};
