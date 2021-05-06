import React from 'react';
import s from './CartItems.module.scss';

const CartItems = ({id, title, subtitle, price, img, quantity }) => {
  return (

    <div className={s.cartItems}>
      <span className={s.delete}>X</span>
      <img src={img} />
      <div className={s.info}>
        <div className={s.title}>{title}</div>
        <div className={s.subtitle}>{subtitle}</div>
      </div>
      <div className={s.price}>{price} $</div>
      <input value={quantity} className={s.counter} type='number' />
      <div className={s.total}>total</div>
    </div>
  );
};

export default CartItems;
