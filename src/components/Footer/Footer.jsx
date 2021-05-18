import React from 'react';
import s from './Footer.module.scss'
const Footer = () => {
  return <div className={s.footer}>
    <div className={s.footerInner}>
      <div className={s.top}>
        <ul>
          <li><a href='#'>Информация</a></li>
          <li><a href='#'>Доставка и оплата</a></li>
          <li><a href='#'>Условия покупки</a></li>
          <li><a href='#'>Отзывы</a></li>
          <li><a href='#'>Карта сайта</a></li>
        </ul>
        <div className={s.contacts}>
          <div>КОНТАКТЫ (ТЕЛЕФОН, VIBER)</div>
          <div>096-43-22-641</div>
          <div>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</div>
          <div className={s.icons}>
            <img src='https://image.similarpng.com/very-thumbnail/2021/01/Facebook-icon-isolated-on-transparent-background-PNG.png'/>
            <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png'/>
          </div>
        </div>
        <div className={s.logo}>
          <img src='#'/>
        </div>
      </div>

    </div>
  </div>;
};

export default Footer;
