import React from 'react';
import s from './Boxes.module.scss';

const Boxes = ({ img, title, subtitle }) => {
  return (
    <div className={s.boxes}>
      <div className={s.body}>
        <img src={img} />
        <div className={s.title}>{title}</div>
        <div className={s.subtitle}>{subtitle}</div>
      </div>
        <a>Выбрать...</a>
    </div>
  );
};

export default Boxes;
