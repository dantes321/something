const ADD_TO_CART = 'ADD_TO_CART';

const storeReducer = (state, action) => {
    switch (action.type) {

        case ADD_TO_CART:

          console.log(state.cartItems);
            let newItem = {
                id: action.id,
                img: action.img,
                title: action.title,
                price: action.price,
            };
            
            return {
                ...state,
                cartItems: [...state.cartItems, newItem]

            };

        default:
            return state;
    }
};

export const addToCartAC = (id, title, price, img) => ({type: ADD_TO_CART, id, title, price, img});

export default storeReducer;