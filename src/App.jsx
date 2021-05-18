import React, { createRef, useEffect, useState } from 'react';
import './App.module.scss';
import s from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import Boxes from './components/Boxes/Boxes';
import { StoreContextProvider } from './contexts/store-context';
import Cart from './components/Cart/Cart';
import { Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className={s.appWrapper}>
        <BrowserRouter>
          <StoreContextProvider>
            <Route path = '/store' component={Boxes}/>
            <Route path = '/cart' component={Cart}/>
          </StoreContextProvider>
        </BrowserRouter>
      </div>
    <Footer />
    </>
  );
};
export default App;
