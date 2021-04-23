import React from 'react';
import s from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <ul>
        <li>
          <a href='#'>Store</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Cart(0)</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
