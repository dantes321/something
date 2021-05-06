const ADD_TO_CART = 'ADD_TO_CART';

let storeReducer = (state,action) => {

    switch (action.type){

        case ADD_TO_CART:
            let newItem = {id:action.id,title:action.title,subtitle:action.subtitle,price:action.price,img:action.img}
            return {
                ...state,
                cartItems: [...state.cartItems,newItem]
            }

        default:
            return state;
    }
}

export const addToCartAC = (id,title,subtitle,price,img) => ({type:ADD_TO_CART,id,title,subtitle,price,img})

export default storeReducer;