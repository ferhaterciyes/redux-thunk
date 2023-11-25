import { ActionsTypes } from "../actionsTypes";

const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};

const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.SET_BASKET_LOADING:
      return { ...state, isLoading: true };
    case ActionsTypes.SET_BASKET_ERROR:
      return { ...state, isError: true };
    case ActionsTypes.SET_BASKET:
      return {
        ...state,
        isLoading: false,
        isError: false,
        basket: payload,
      };
      case ActionsTypes.ADD_TO_BASKET:
        return {...state , basket:state.basket.concat(payload)}
    case ActionsTypes.UPDATE_ITEM:
      const newBasket = state.basket.map((item)=>{
        if(item.id === payload){
          return {...item, adet:item.adet + 1}
        }else{
          return item
        }
      })
      return {...state , basket:newBasket}
case ActionsTypes.REMOVE_ITEM:
  const filtred = state.basket.filter((i)=>i.id !== payload)
  return {...state , basket:filtred}

    default:
      return state;
  }
};

export default basketReducer;
