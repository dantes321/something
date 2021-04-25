const ADD_TO_CART = 'ADD_TO_CART';

const storeReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let newItem = {
        id: action.id,
        img: action.img,
        title: action.title,
        price: action.price,
      };
      console.log(state.cartItems);
      return {
        
        ...state,
        cartItems: [...state.cartItems,newItem]


      };

    default:
      return state;
  }
};

export const addToCartAC = (id,title,price,img) => ({ type: ADD_TO_CART, id,title,price,img });

export default storeReducer;