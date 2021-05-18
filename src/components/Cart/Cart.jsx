import React, { useContext } from 'react';
import s from './Cart.module.scss'
import { StoreContext } from '../../contexts/store-context';
const Cart = () => {
  const {state} = useContext(StoreContext);
  if(state.cartItems.length === 0){
    return <div className={s.cart}>
      <div className={s.title}>Корзина</div>
      <div className={s.subtitle}>В корзине пусто</div>
    </div>;
  }
  else
    return <div className={s.cart}>
      Не пусто
    </div>;

};

export default Cart;
