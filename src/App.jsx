import React from 'react';
import './App.module.scss';
import s from './App.module.scss';
import Parallax from './components/Parallax/Paralax';
import Header from './components/Header/Header';
import BoxesPage from './components/BoxesPage/BoxesPage';
import { BrowserRouter,Route } from 'react-router-dom';
import { StoreContextProvider } from './contexts/store-context';
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <div className={s.appWrapper}>
      <BrowserRouter>
        <Header />
        <Route path='/store' component={Parallax}/>

        <StoreContextProvider>
          <Route path = '/cart' component={Cart}/>
          <Route path = '/store' component={BoxesPage}/>
        </StoreContextProvider>
      </BrowserRouter>
    </div>
  );
};
export default App;
