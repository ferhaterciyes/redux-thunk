import axios from "axios";
import { ActionsTypes } from "../actionsTypes";

axios.defaults.baseURL = "http://localhost:4000";

export const setBasketLoading = () => ({
  type: ActionsTypes.SET_BASKET_LOADING,
});

export const setBasket = (payload) => ({
  type: ActionsTypes.SET_BASKET,
  payload,
});

export const setBasketError = () => ({
  type: ActionsTypes.SET_BASKET_ERROR,
});

export const getBasketData = () => (dispatch) => {
  dispatch(setBasketLoading());

  axios
    .get("/basket")
    .then((res) => dispatch(setBasket(res.data)))
    .catch(() => dispatch(setBasketError()));
};

export const addToBasket = (product) => (dispatch) => {
  const newProduct = { ...product, adet: 1 };
  delete newProduct.renk;
  delete newProduct.ozellikler;
  delete newProduct.baslik;

  axios
    .post("/basket", newProduct)
    .then((res) =>
      dispatch({
        type: ActionsTypes.ADD_TO_BASKET,
        payload: newProduct,
      }),
    )
    .catch((err) => {
      console.error("Error adding to basket:", err);
      dispatch(setBasketError());
    });
};

export const updateItem = (product) => (dispatch) => {
  axios
    .patch(`/basket/${product.id}`, { adet: product.adet + 1 })
    .then(() => {
      dispatch({ type: ActionsTypes.UPDATE_ITEM, payload: product.id });
    })
    .catch((err) => {
      console.error("Error updating item:", err);
      dispatch(setBasketError());
    });
};

export const removeItem = (delete_id) => (dispatch) => {
  axios.delete(`/basket/${delete_id}`).then(() => {
    dispatch({ type: ActionsTypes.REMOVE_ITEM, payload: delete_id });
  });
};
