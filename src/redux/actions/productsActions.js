import axios from "axios";
import { ActionsTypes } from "../actionsTypes";

export const setLoading = ()=>{
    return{
        type:ActionsTypes.SET_LOADING
    }
}

export const setError =()=>{
   return {
    type:ActionsTypes.SET_ERROR,
}
}

export const setProducts =(payload)=>{
    return{
        type:ActionsTypes.SET_PRODUCT,
        payload
    }
}

export const getProductData=()=>(distpatch)=>{
    axios
    .get('http://localhost:4000/products')
    .then((res)=>distpatch(setProducts(res.data)))
    .catch(()=>distpatch(setError))
}


/*
  * Redux Thunk
  * Asenkron Aksiyon - Thunk Aksiyonu
  
  * Redux Thunk, redux kütüphaneisni genişleten bir
  * middleware(arayızlım). Redux kendisi senkron işlemleri
  * desteklerken, asenkron eylemeleri doğrudan desteklemez
  * İşte redux thunk bu durumda devreye girer
  
  * Redux thunk, redux eylemlerinin(aksiyonların) asenkron
  * olmasını sağlar. Bu özellikle ağ istekleri gibi asenkron
  * işlemleri aksiyon içerisnde gerçekleştirebiliyoruz.
  
  * Thunk, bir fonksiyonun içersine farklı bir fonksiyon çağıran 
  * anlamına gelir.
*/
