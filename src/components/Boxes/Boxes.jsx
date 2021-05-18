import React, { useContext } from 'react';
import s from './Boxes.module.scss';
import { StoreContext } from '../../contexts/store-context';
import Box from './Box/Box';

const Boxes = () => {
  const { state } = useContext(StoreContext);
  let boxContainer = state.boxes.map((el, index) => {
    return (
      <Box
        key={index}
        id={el.id}
        price={el.price}
        title={el.title}
        description={el.description}
        img = {el.img}
      />
    );
  });

  return (
    <div className={s.boxes}>
      <div className={s.title}>
        Тематические <span>Сюрприз Боксы</span>
      </div>
      <div className={s.boxesContainer}>
        {boxContainer}
      </div>
    </div>
  );
};

export default Boxes;
