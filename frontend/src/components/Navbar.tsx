import { Link } from 'react-router-dom';
import { useCartContext } from '../hooks/useCartContext';

export const Navbar = () => {
  const { totalItems } = useCartContext();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-orange-600">SliceTime 🍕</Link>
      
      <div className="flex gap-4 items-center">
        <Link to="/menu" className="hover:text-orange-600">Carta</Link>
        <Link to="/checkout" className="relative p-2 bg-gray-100 rounded-full">
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};