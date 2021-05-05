import React from 'react';
import './App.module.scss';
import s from './App.module.scss';
import Parallax from './components/Parallax/Paralax';
import Header from './components/Header/Header';
import BoxesPage from './components/BoxesPage/BoxesPage';
import { BrowserRouter } from 'react-router-dom';
import { StoreContextProvider } from './contexts/store-context';

const App = () => {
  return (
    <div className={s.appWrapper}>
      <BrowserRouter>
        <Header />
        <Parallax />
        <StoreContextProvider>
          <BoxesPage />
        </StoreContextProvider>
      </BrowserRouter>
    </div>
  );
};
export default App;
