import React from 'react';
import s from './CartItems.module.scss'

const CartItems = ({id,title,subtitle,price,img}) => {
  return <div className={s.cartItems}>
    <img src={img}/>
    <div className={s.title}>{title}</div>
    <div className={s.subtitle}>{subtitle}</div>
  </div>;
};

export default CartItems;
