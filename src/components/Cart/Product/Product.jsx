import React from 'react';
import s from './Product.module.scss';

const Product = ({img,price,title}) => {
  return (
    <div className={s.product}>
      <img src={img} />
      <div className={s.titlePrice}>
        <div className={s.title}>{title}</div>
        <div className={s.price}>Price: ${price}</div>
      </div>
      <div className={s.qty}>Qty: 2</div>
      <div className={s.buttons}>
        <a href='#'>+</a>
        <a href='#'>-</a>
      </div>
    </div>
  );
};

export default Product;
