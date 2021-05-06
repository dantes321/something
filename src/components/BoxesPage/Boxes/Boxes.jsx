import React from 'react';
import s from './Boxes.module.scss';
import {addToCartAC} from "../../../contexts/store-reducer";

const Boxes = ({ id,title,subtitle,price,img,dispatch }) => {
    let addToCart = () => {
        dispatch(addToCartAC(img,title,subtitle,price,img,id))
    }
  return (
    <div className={s.boxes}>
      <div className={s.body}>
        <img src={img} />
        <div className={s.title}>{title}</div>
        <div className={s.subtitle}>{subtitle}</div>
      </div>
        <a onClick={addToCart}>Выбрать...</a>
    </div>
  );
};

export default Boxes;
