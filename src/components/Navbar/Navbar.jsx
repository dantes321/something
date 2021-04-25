import React, {useContext} from 'react';
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import {StoreContext} from "../../context/store-context";

const Navbar = () => {
  let {state} = useContext(StoreContext);
  return (
    <div className={s.navbar}>
      <ul>
        <li>
          <NavLink to='/store'>Store</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink className = {s.cart} to='/cart'>Cart({state.cartItems.length})</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
