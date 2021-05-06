import React, { useContext } from 'react';
import s from './Cart.module.scss';
import { StoreContext } from '../../contexts/store-context';
import CartItems from './CartItems/CartItems';

const Cart = () => {
  const { state, dispatch } = useContext(StoreContext);
  let cartItem = state.cartItems.map((el) => (
    <CartItems img={el.img} subtitle={el.subtitle} title={el.title} price={el.price} id={el.id} />
  ));

  return <div className={s.cartItem}>{cartItem}</div>;
};

export default Cart;
