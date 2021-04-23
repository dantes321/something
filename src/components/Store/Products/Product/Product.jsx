import React from 'react';
import s from './Product.module.scss'

const Product = ({img,title,price}) => {
  return (
    <div className={s.product}>
      <img src={img} />
      <div className={s.title}>{title}</div>
      <div className={s.price}>$ {price}</div>
      <div className={s.buttons}>
        <a href='#'>DETAILS</a>
        <a href='#'>ADD TO CART</a>
      </div>
    </div>
  );
};

export default Product;
