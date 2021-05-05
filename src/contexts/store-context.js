import React, {useReducer} from 'react';
import storeReducer from "./store-reducer";

export const StoreContext = React.createContext()
let initialState = {
    boxes: [
        {id:1,price:30.99,title:'SECRET BOX',subtitle:'Один из самых популярных сюрприз-боксов',img:'https://www.giftfactory.org.ua/wp-content/uploads/2020/09/secret-box-600x596.jpg'},
        {id:2,price:25.99,title:'GADGET BOX',subtitle:'Коробка с сокровищами для тех, кто любит разнообразные девайсы и гаджеты.',img:'https://www.giftfactory.org.ua/wp-content/uploads/2020/11/%D0%B3%D0%B0%D0%B4%D0%B6%D0%B5%D1%82-%D0%B1%D0%BE%D0%BA%D1%81-600x593.jpg'},
        {id:3,price:21.99,title:'GIRL BOX',subtitle:'Отличная идея подарка для девушки, подружки, одноклассницы или сестры',img:'https://www.giftfactory.org.ua/wp-content/uploads/2020/09/girls-box-600x591.jpg'},
        {id:4,price:31.99,title:'BOY BOX',subtitle:'Отличная идея подарка для парня, друга, сына или брата',img:'https://www.giftfactory.org.ua/wp-content/uploads/2020/09/boy-box-600x594.jpg'},
        {id:5,price:21.59,title:'CANDY BOX',subtitle:'Наш фирменный сюрприз-бокс для настоящих сладкоежек',img:'https://www.giftfactory.org.ua/wp-content/uploads/2020/09/sweet-box-1-600x593.jpg'},
        {id:6,price:24.59,title:'BEAUTY BOX',subtitle:'Косметика, духи, аксессуары, косметички и многое другое может оказаться внутри этого бокса',img:'https://www.giftfactory.org.ua/wp-content/uploads/2020/09/beauty-box.jpg'},
    ]
}


export const StoreContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(storeReducer,initialState)

    return <StoreContext.Provider value={{state,dispatch}}>
        {children}
    </StoreContext.Provider>
}