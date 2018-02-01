import axios from "axios";
import { FETCH_USER, FETCH_PRODUCTS, FETCH_ORDERS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current-user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProducts = filter => async dispatch => {
  const res = await axios.get("/api/products/search/v1", { params: filter });
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const updateUser = values => async dispatch => {
  const res = await axios.post("/api/updateUser", values);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchOrders = () => async dispatch => {
  const res = await axios.get("/api/current-user-orders");
  dispatch({ type: FETCH_ORDERS, payload: res.data });
};

/*
export const addToBasket = (values, history) => async dispatch => {
  const res = await axios.post("/api/basket", values);
  dispatch({ type: FETCH_USER, payload: res.data });
}; 
*/
