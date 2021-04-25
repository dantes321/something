import './App.scss';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Store from './components/Store/Store';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import { StoreContextProvider } from './context/store-context';

const App = () => {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <StoreContextProvider>
          <Navbar />
          <Route path='/store' component={Store} />
          <Route path='/about' component={About} />
          <Route path='/cart' component={Cart} />
        </StoreContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
