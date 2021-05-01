import React from 'react';
import s from './Store.module.scss';
import Products from './Products/Products';

const Store = () => {
  return (
    <div className={s.store}>
      <div className={s.title}>STORE</div>
      <div className={s.subtitle}>This is the Store Page.</div>
      <div className={s.search}>
        <span>10 Products</span>
        <input placeholder='Search product' type='text' />
      </div>
      <Products />
      <div className={s.footer}>2020 © React Store</div>
    </div>
  );
};

export default Store;
