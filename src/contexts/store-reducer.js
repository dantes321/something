const ADD_TO_CART = 'ADD_TO_CART';

let storeReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let newItem = {
        img: action.img,
        id: action.id,
        description: action.description,
        price: action.price,
        counter: action.counter,
      }

      return {
        ...state,
        cartItems: [...state.cartItems,newItem],
      };
    default:
      return state;

  }

};

export const addToCartAC = (img,id,  title, description, price, counter) => ({
  type: ADD_TO_CART,
  img,
  id,
  title,
  description,
  price,
  counter,
});
export default storeReducer;