import React, { useReducer } from 'react';
import storeReducer from './store-reducer';
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';
import img3 from './../assets/3.jpg';
import img4 from './../assets/4.jpg';
import img5 from './../assets/5.jpg';
import img6 from './../assets/6.jpg';
import img7 from './../assets/7.jpg';
import img8 from './../assets/8.jpg';

export const StoreContext = React.createContext();

let initialState = {
  boxes: [
    {
      id: 1,
      img: img1,
      title: 'Название бокса',
      description: 'Описание бокса',
      price: 100,
      counter: 1,
    },
    {
      id: 2,
      img: img2,
      title: 'Название бокса',
      description: 'Описание бокса',
      price: 150,
      counter: 1,
    },
    {
      id: 3,
      img: img3,
      title: 'Название бокса',
      description: 'Описание бокса',
      price: 220,
      counter: 1,
    },
    {
      id: 4,
      img: img4,
      title: 'Название бокса',
      description: 'Описание бокса',
      price: 235,
      counter: 1,
    },
    {
      id: 5,
      img: img5,
      title: 'Название бокса',
      description: 'Описание бокса',
      price: 155,
      counter: 1,
    },
    {
      id: 6,
      img: img6,
      title: 'Название бокса',
      description: 'Описание бокса',
      price: 290,
      counter: 1,
    },
    {
      id: 7,
      img: img7,
      title: 'Название бокса',
      description: 'Описание бокса',
      price: 300,
      counter: 1,
    },
    {
      id: 8,
      img: img8,
      title: 'Название бокса',
      description: 'Описание бокса',
      price: 330,
      counter: 1,
    },
  ],
};

export const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};
