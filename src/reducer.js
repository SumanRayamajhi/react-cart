import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    console.log("Increase", itemId);
    /* const item = newCart.get(itemId);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(itemId, newItem); */
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
  }

  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;