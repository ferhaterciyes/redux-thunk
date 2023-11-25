import { ActionsTypes } from "../actionsTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.SET_LOADING:
      return { ...state, isLoading: true, isError: false }; // isError'i false yap
    case ActionsTypes.SET_ERROR:
      return { ...state, isError: true, isLoading: false }; // isError'i true, isLoading'i false yap
    case ActionsTypes.SET_PRODUCT:
      return { ...state, products: payload, isLoading: false, isError: false };
    default:
      return state;
  }
};

export default productReducer;
