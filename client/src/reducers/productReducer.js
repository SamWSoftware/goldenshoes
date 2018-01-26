import { FETCH_PRODUCTS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: action.payload, retrieved: true };
    default:
      return state;
  }
}
