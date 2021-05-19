import React, { useContext } from 'react';
import s from './Cart.module.scss'
import { StoreContext } from '../../contexts/store-context';
import CartItem from './CartItem/CartItem';
const Cart = () => {
  const {state} = useContext(StoreContext)
  let cartEl = state.cartItems.map((el,index) => <CartItem key={index} img ={el.img} />)
  return <div className={s.cart}>
    {cartEl}
  </div>;
};

export default Cart;
