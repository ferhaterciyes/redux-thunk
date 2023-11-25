import { Link } from 'react-router-dom';

export const EmptyBasketWarning = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <h2 className="text-4xl font-bold text-gray-700 mb-4">Sepetiniz Boş!</h2>
      <p className="text-lg text-gray-600">Haydi alışverişe başlamak için 
        <Link to="/" className="text-blue-500 hover:underline"> favori ürünlerimize göz atın.</Link>
      </p>
      <img
        src="https://cdn.pixabay.com/photo/2014/03/24/13/50/shopping-cart-294547_1280.png"
        alt="Empty Basket"
        className="mt-4 h-48 text-[#fff] flex items-center justify-center"
      />
    </div>
  </div>
);
