import React, {useReducer} from 'react';
import cartReducer from "./cart-reducer";

export const cartContext = React.createContext(null);

export const cartContextProvider = ({ children }) => {
    const [state,dispatch] = useReducer(cartReducer,{})

  return <cartContext.Provider value ={{state,dispatch}}>{children}</cartContext.Provider>;
};