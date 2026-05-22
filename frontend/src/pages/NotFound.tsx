import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-orange-600 mb-4">404</h1>
      <p className="text-xl mb-8">¡Ups! Parece que esta pizza no está en el menú.</p>
      <Link 
        to="/" 
        className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
      >
        Volver al Menú
      </Link>
    </div>
  );
};