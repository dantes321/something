import React, { useContext } from 'react';
import s from './Products.module.scss';
import Product from './Product/Product';
import { StoreContext } from '../../../context/store-context';

const Products = () => {
  const { state, dispatch } = useContext(StoreContext);
  let products = state.cards.map((el, index) => (
    <Product
      id={el.id}
      dispatch={dispatch}
      key={index}
      img={el.img}
      title={el.title}
      price={el.price}
    />
  ));
  return <div className={s.products}>{products}</div>;
};

export default Products;
