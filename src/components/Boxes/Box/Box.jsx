import React from 'react';
import s from './Box.module.scss'
const Box = ({price,title,id,img,description}) => {
  return <div className={s.box}>
    <img src={img}/>
    <div className={s.title}>{title}</div>
    <div className={s.price}>{price}</div>
    <a href='#'>Заказать</a>
  </div>;
};

export default Box;
