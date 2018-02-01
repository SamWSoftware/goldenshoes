import { FETCH_ORDERS } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_ORDERS:
      return action.payload || false;
    default:
      return state;
  }
}
