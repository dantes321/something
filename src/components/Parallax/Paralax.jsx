import React from 'react';
import s from './Paralax.module.scss';

const Parallax = () => {
  return (
    <div className={s.parallax}>
      <div className={s.parallaxBody}>
            <div className={s.subtitle}>ПОДАРКИ НОВОГО ПОКОЛЕНИЯ</div>
            <div className={s.title}>GIFT FACTORY</div>
            <div className={s.description}>Ты выбираешь для кого будет сюрприз бокс и какая его стоимость, а мы подбираем содержимое. Что именно окажется в боксе, ты узнаешь только когда откроешь свой бокс. Дари эмоции.</div>
            <a href='#'>ВЫБРАТЬ ПОДАРОК</a>
      </div>
    </div>
  );
};

export default Parallax;
