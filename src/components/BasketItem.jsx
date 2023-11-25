import { useDispatch } from 'react-redux';
import { removeItem, updateItem } from '../redux/actions/basketActions';

const BasketItem = ({ basketItems }) => {

    const dispatch = useDispatch()
  const totalAmount = basketItems.reduce(
    (total, item) => total + item.adet * item.fiyat,
    0
  );

 

  return (
    <div className='mt-[100px]'>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-8">Sepet</h1>
        {basketItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white border rounded mb-4 shadow-md"
          >
            <div className="flex items-center">
              <img
                src={item.resim}
                alt={item.baslik}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{item.baslik}</h3>
                <p className="text-gray-600">Fiyat: {item.fiyat} ₺</p>
                <p className="text-gray-600">Miktar: {item.adet}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
              onClick={()=>dispatch(updateItem(item))}
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all">
                Artır
              </button>
              <button
              onClick={()=>dispatch(removeItem(item.id))}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all">
                Sil
              </button>
            </div>
          </div>
        ))}
        <div className="mt-8">
          <p className="text-2xl font-semibold">Toplam Tutar: {totalAmount} ₺</p>
        </div>
      </div>
      {basketItems.length === 0 && <EmptyBasketWarning />}
    </div>
  );
};

export default BasketItem;
