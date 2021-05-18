import React, { useState } from 'react';
import s from './Navbar.module.scss';

const Navbar = () => {
  let toggleMenu = (e) =>{
    setActiveBurger(!activeBurger);
    setActiveMenu(!activeMenu)
    e.preventDefault()
  }

  const [activeBurger, setActiveBurger] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className={s.navbar}>
      <div className={s.navbarInner}>
        <div className={s.logo}>
          <img src='#' />
          <div className={s.desc}>
            <span>Сюрприз</span> боксы и <span>подарочные</span> наборы
          </div>
        </div>
        {
          activeMenu? <nav className={activeMenu? `${s.nav} ${s.active}`:s.nav}>
            <ul>
              <li>
                <a href='#'>Главная</a>
              </li>
              <li>
                <a href='#'>Конструктор</a>
              </li>
              <li>
                <a href='#'>Отзывы</a>
              </li>
              <li>
                <a href='#'>Галерея</a>
              </li>
              <hr/>
              <li>
                <a href='#'>Доставка и оплата</a>
              </li>
              <li>
                <a href='#'>Сотрудничество</a>
              </li>
              <li>
                <a href='#'>Условия покупки</a>
              </li>
              <li>
                <a href='#'>Телефон,VIBER</a>
              </li>
            </ul>

          </nav>:
            <nav className={s.nav}>
              <ul>
                <li>
                  <a href='#'>Галерея фото</a>
                </li>
                <li>
                  <a href='#'>Конструктор</a>
                </li>
                <li>
                  <a href='#'>Отзывы</a>
                </li>
                <li>
                  <a href='#'>Сотрудничество</a>
                </li>
              </ul>

            </nav>
        }
        <div className={s.cart}>
          <img src='https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-11.jpg' />
          <span>(0)</span>
        </div>
      </div>
      <span
        onClick={toggleMenu}
        className={activeBurger ? `${s.burger} ${s.active}` : s.burger}
      > </span>
    </div>
  );
};

export default Navbar;