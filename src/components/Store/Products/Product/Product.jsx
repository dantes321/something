import React from 'react';
import s from './Product.module.scss'
import {addToCartAC} from "../../../../context/store-reducer";


const Product = ({dispatch,img,title,price,id}) => {
    let addToCart = () => {
        dispatch(addToCartAC(id,title,price,img))
    }

  return (
    <div className={s.product}>
      <img src={img} />
      <div className={s.title}>{title}</div>
      <div className={s.price}>$ {price}</div>
      <div className={s.buttons}>
        <a  href='#'>DETAILS</a>
        <a onClick={addToCart} className={s.button} href='#'>ADD TO CART</a>
      </div>
    </div>
  );
};

export default Product;
