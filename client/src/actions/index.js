import axios from "axios";
import { FETCH_USER, FETCH_PRODUCTS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current-user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addToBasket = (values, history) => async dispatch => {
  const res = await axios.post("/api/basket", values);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProducts = filter => async dispatch => {
  console.log(filter);
  const res = await axios.get("/api/products/search/v1", { params: filter });
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};
