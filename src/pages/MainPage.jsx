import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData, setLoading } from "../redux/actions/productsActions";
import { getBasketData, setBasketLoading } from "../redux/actions/basketActions";
import Loading from './../components/Loading';
import Cart from "../components/Cart";
const MainPage = () => {
  const distpatch = useDispatch();
  const state = useSelector((store) => store.productReducer);
 useEffect(()=>{
    distpatch(setLoading())
    distpatch(setBasketLoading())

    distpatch(getProductData())
    distpatch(getBasketData)
 },[])
 return (
    <div>
      {/* yükleniyorsa */}
      {state.isLoading && <Loading />}

      {/* hata olduysa */}
      {state.isError && (
        <p>Üzgünüz veirleri alırken bir hata oluştu :</p>
      )}

      <div className="w-screen grid lg:grid-cols-3 gap-5 mt-[12rem] ">
        {/* veriler geldiyse */}
        {state?.products.map((product) => (
          <Cart 
          className
          key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
