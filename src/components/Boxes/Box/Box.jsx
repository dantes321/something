import React from 'react';
import s from './Box.module.scss'
import { addToCartAC } from '../../../contexts/store-reducer';
const Box = ({dispatch,img,id,  title, description, price, counter}) => {
  let addToCart = (e) => {
    e.preventDefault()
   dispatch( addToCartAC(img,id,title, description, price, counter));
  }
  return <div className={s.box}>
    <img src={img}/>
    <div className={s.title}>{title}</div>
    <div className={s.price}>{price} грн</div>
    <a onClick={addToCart} href='#'>Заказать</a>
  </div>;
};

export default Box;
