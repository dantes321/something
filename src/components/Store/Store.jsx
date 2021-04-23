import React from 'react';
import s from './Store.module.scss'
import Products from "./Products/Products";
import {StoreContextProvider} from "../../context/store-context";

const Store = () => {
  return (
    <div className={s.store}>
      <div className={s.title}>STORE</div>
      <div className={s.subtitle}>This is the Store Page.</div>
      <div className={s.search}>
        <span>10 Products</span>
        <input placeholder='Search product' type='text' />
      </div>
        <StoreContextProvider>
        <Products/>
        </StoreContextProvider>
    </div>
  );
};

export default Store;
