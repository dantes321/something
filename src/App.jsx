import React, { createRef, useEffect, useState } from 'react';
import './App.module.scss';
import s from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
import Boxes from './components/Boxes/Boxes';
import { StoreContextProvider } from './contexts/store-context';

const App = () => {
  return (
    <>
      <Navbar />
      <Parallax />
      <div className={s.appWrapper}>
        <StoreContextProvider>
          <Boxes />
        </StoreContextProvider>
      </div>
    </>
  );
};
export default App;
