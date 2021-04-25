import React from 'react';
import s from './About.module.scss'
const About = () => {
  return (
    <div className={s.about}>
      <div className={s.title}>ABOUT</div>
      <div className={s.subtitle}>
        This project was built for practice purposes using Context API by React.
      </div>
      <a href='https://github.com/dantes321/something' target='_blank' >VISIT REPO</a>
        <div className={s.footer}>2020 © React Store</div>
    </div>
  );
};

export default About;
