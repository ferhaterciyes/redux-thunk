import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBasketData,
  setBasketLoading,
} from "../redux/actions/basketActions";
import Loading from "../components/Loading";
import BasketItem from "../components/BasketItem";
import { EmptyBasketWarning } from "../components/errorMessage";

const BasketPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.basketReducer);
  const basketItems = state.basket; // Sepet öğelerini al

  useEffect(() => {
    dispatch(setBasketLoading());
    dispatch(getBasketData());
  }, [dispatch]);

  const totalAmount = basketItems.reduce(
    (total, item) => total + item.adet * item.fiyat,
    0
  );

  return (
    <div>
      {state.isLoading && <Loading />}
      {basketItems.length === 0 && <EmptyBasketWarning />}

      {state.isError && (
        <p>Üzgünüz sepet verilerini alırken bir hata oluştu ...</p>
      )}

      {state.basket.length > 0 && (
        <BasketItem basketItems={basketItems} />)
      }
    </div>
  );
};

export default BasketPage;
