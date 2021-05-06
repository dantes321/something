import React, { useContext } from 'react';
import s from './Cart.module.scss';
import { StoreContext } from '../../contexts/store-context';
import CartItems from './CartItems/CartItems';

const Cart = () => {
  const { state, dispatch } = useContext(StoreContext);
  let cartItem = state.cartItems.map((el, index) => (
    <CartItems
      key={index}
      img={el.img}
      subtitle={el.subtitle}
      title={el.title}
      price={el.price}
      id={el.id}
      quantity={el.quantity}
    />
  ));
  if (state.cartItems.length !== 0) {
    return (
      <div className={s.cartContainer}>
        <div className={s.title}>
          <div className={s.desc}>Товар</div>
          <div className={s.price}>Цена</div>
          <div className={s.counter}>Количество</div>
          <div className={s.total}>Подытог</div>
        </div>
        <div className={s.cartItem}>{cartItem}</div>
      </div>
    );
  } else
    return (
      <div className={s.cart}>
        <h1 className={s.title}>Корзина</h1>
        <div className={s.field}>
          <span>Ваша корзина пуста.</span>
        </div>
      </div>
    );
};

export default Cart;
