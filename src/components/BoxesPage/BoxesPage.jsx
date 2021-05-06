import React, { useContext, useState } from 'react';
import s from './BoxesPage.module.scss';
import { NavLink } from 'react-router-dom';
import Boxes from './Boxes/Boxes';
import { StoreContext } from '../../contexts/store-context';

const BoxesPage = () => {
  const { state, dispatch } = useContext(StoreContext);
  let box = state.boxes.map((el) => (
    <Boxes
      dispatch={dispatch}
      id={el.id}
      img={el.img}
      price={el.price}
      title={el.title}
      subtitle={el.subtitle}
    />
  ));

  return (
    <div className={s.BoxesPage}>
      <div className={s.title}>
        СЮРПРИЗ БОКС - ЭТО ОРИГИНАЛЬНЫЙ ПОДАРОК НА ЛЮБОЙ ПРАЗДНИК И ПОВОД
      </div>
      <div className={s.subtitle}>
        Внутри могут попадаться такие вещи как: гаджеты, Bluetooth колонки, наушники, power bank,
        термокружки, чашки, косметика, аксессуары, сладости, ланч-боксы и много других классных,
        качественных и интересных вещей!
      </div>
      <div className={s.tabs}>
        <NavLink activeClassName={`${s.tab1} ${s.active}`} className={s.tab1} to='#'>
          Все
        </NavLink>
        <NavLink activeClassName={`${s.tab2} ${s.active}`} className={s.tab2} to='#'>
          Для него
        </NavLink>
        <NavLink activeClassName={`${s.tab3} ${s.active}`} className={s.tab3} to='#'>
          Для нее
        </NavLink>
      </div>
      <div className={s.boxes}>{box}</div>
    </div>
  );
};

export default BoxesPage;
