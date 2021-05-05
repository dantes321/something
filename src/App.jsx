import React from 'react';
import './App.module.scss';
import s from './App.module.scss';
import Parallax from "./components/Parallax/Paralax";
import Header from "./components/Header/Header";
import BoxesPage from "./components/BoxesPage/BoxesPage";

const App = () => {
    return (
        <div className={s.appWrapper}>
            <Header />
            <Parallax />
            <BoxesPage />


        </div>
    )
}
export default App;
