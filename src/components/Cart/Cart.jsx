import React, { useContext } from 'react';
import s from './Cart.module.scss';
import Product from './Product/Product';
import { StoreContext } from '../../context/store-context';

const Cart = () => {
  let { state } = useContext(StoreContext);
  let cartItemsArr = state.cartItems.map((el, index) => {
    return <Product img={el.img} price={el.price} key={index} title={el.title} />;
  });

  if (state.cartItems.length === 0) {
    return (
      <div className={s.cart}>
        <div className={s.title}>CART</div>
        <div className={s.subtitle}>This is the Cart Page.</div>
        <div className={s.empty}>Your cart is empty</div>
        <div className={s.footer}>2020 © React Store</div>
      </div>
    );
  } else
    return (
      <div className={s.cart}>
        <div className={s.title}>CART</div>
        <div className={s.subtitle}>This is the Cart Page.</div>
        <div className={s.contentContainer}>
          <div className={s.products}>{cartItemsArr}</div>
          <div className={s.counters}>
            <div className={s.info}>
              <div className={s.totalItem}>Total Items</div>
              <div> 1</div>
              <div className={s.totalPay}>Total Payment</div>
              <div>2</div>
            </div>
            <hr />
            <div className={s.buttons}>
              <a href='#'>CHECKOUT</a>
              <a href='#'>CLEAR</a>
            </div>
          </div>
        </div>
        <div className={s.footer}>2020 © React Store</div>
      </div>
    );
};

export default Cart;
