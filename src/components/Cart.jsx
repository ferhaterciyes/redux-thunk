import { useSelector, useDispatch } from "react-redux";
import { addToBasket, updateItem } from "../redux/actions/basketActions";

const Cart = ({ product }) => {
  const state = useSelector((store) => store.basketReducer);
  const dispatch = useDispatch(); // Düzeltildi: Değişken adı

  const found = state.basket.find((i) => i.id === product.id);

  const handleClick = () => {
    if (found) {
      dispatch(updateItem(found)); // Düzeltildi: Fonksiyon adı
      console.log(found);
    } else {
      dispatch(addToBasket(product)); // Düzeltildi: Fonksiyon adı
    }
  };

  return (
    <div className="w-[400px] mx-auto  overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.resim}
          alt={product.imageAlt}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{product.baslik}</h2>
        <p className="mt-2 text-sm text-gray-600">{product.model}</p>
        <p className="mt-2 text-lg font-bold  text-green-500">
          {product.fiyat} ₺
        </p>
        <p className="flex flex-col">
          {product.ozellikler.map((line, index) => (
            <span key={index}>{line}</span> // Her bir özelliği benzersiz bir key ile belirtmek önemlidir.
          ))}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={handleClick}
            className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            {found ? "Miktarı Arttır" : "Sepete Ekle"}
          </button>
          <span className="ml-2 text-gray-600">
            Sipariş Miktarı: {found ? found.adet : 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
