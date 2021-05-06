import React, {useState} from 'react';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = () => {
  const [activeMenu,setActiveMenu] = useState(false)

  return (
    <div className={s.header}>
      <div className={s.headerLogo}>
        <img src='https://www.giftfactory.org.ua/wp-content/uploads/2020/11/GIFT-factory-black-small-%D0%BF%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%87%D0%BD%D0%B9-1-169x108.png' />
      </div>
      <nav className={activeMenu? `${s.nav} ${s.active}`:s.nav}>
        <ul>
          <li>
            <NavLink to='/store'>Каталог</NavLink>
          </li>
          <li>
            <NavLink to='/cart'>Галерея</NavLink>
          </li>
          <li>
            <NavLink to='#'>Блог</NavLink>
          </li>
          <li>
            <NavLink to='#'>Контакты</NavLink>
          </li>
          <li>
            <NavLink to='#'>Доставка и оплата</NavLink>
          </li>
        </ul>
      </nav>
      <span onClick={() => setActiveMenu(!activeMenu)} className={activeMenu? `${s.burger} ${s.active}`:s.burger}> </span>
    </div>
  );
};

export default Header;
