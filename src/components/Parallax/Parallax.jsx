import React from 'react';
import s from './Parallax.module.scss'
import {Link} from 'react-scroll'
const Parallax = () => {
  return <div className={s.parallax}>
    <div className={s.parallaxBody}>
      <div className={s.title}>Lucky Box</div>
      <Link smooth ={true} duration ={700} to='#store'>Заказать подарок</Link>
      <div className={s.footer}>
        <div id='#store' className={s.icons}>
          <img src='https://image.similarpng.com/very-thumbnail/2021/01/Facebook-icon-isolated-on-transparent-background-PNG.png'/>
          <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png'/>
        </div>
      </div>
    </div>
  </div>;
};

export default Parallax;
