import { Reducer } from "redux";
import produce from 'immer';
import { CartState } from "./types";

const INITIAL_STATE: CartState = {
  items: []
};


const cart: Reducer<CartState> = (state = INITIAL_STATE, action) =>  {
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id,
          );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity ++;
        } else {
          draft.items.push({
            product,
            quantity: 1
          });
        }

          break;
      }
      default: {
        return state;
      } 
    }
  });
}

export default cart;