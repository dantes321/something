import React, { useContext } from 'react';
import s from './Products.module.scss';
import Product from './Product/Product';
import { StoreContext } from '../../../context/store-context';

const Products = () => {
  const { state } = useContext(StoreContext);
  let products = state.cards.map((el) => (
    <Product  key ={el.id} img={el.img} title={el.title} price={el.price} />
  ));
  return <div className={s.products}>{products}</div>;
};

export default Products;
