import { useCartContext } from '../hooks/useCartContext';

const PIZZAS_DATA = [
  { id: 1, nombre: "Margarita", precio: 9.50, ingredientes: "Tomate, mozzarella, albahaca" },
  { id: 2, nombre: "Pepperoni", precio: 12.90, ingredientes: "Tomate, mozzarella, pepperoni" },
  { id: 3, nombre: "Cuatro Quesos", precio: 13.50, ingredientes: "Mozzarella, gorgonzola, parmesano, emmental" },
  { id: 4, nombre: "Barbacoa", precio: 14.00, ingredientes: "Salsa BBQ, carne picada, cebolla, bacon" },
  { id: 5, nombre: "Vegetariana", precio: 11.50, ingredientes: "Pimientos, champiñones, aceitunas, cebolla" },
  { id: 6, nombre: "Carbonara", precio: 13.00, ingredientes: "Nata, bacon, cebolla, champiñones" }
];

export const Menu = () => {
  const { addToCart } = useCartContext();

  return (
    <div className="py-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Nuestras Pizzas</h1>
        <p className="text-gray-500 italic">Ingredientes frescos, masa artesanal y mucho amor.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PIZZAS_DATA.map((pizza) => (
          <div 
            key={pizza.id} 
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="h-48 bg-orange-100 flex items-center justify-center text-6xl">
              🍕
            </div>

            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{pizza.nombre}</h3>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">
                  {pizza.precio.toFixed(2)}€
                </span>
              </div>
              
              <p className="text-gray-500 text-sm grow mb-4">{pizza.ingredientes}</p>
              
              <button 
                onClick={() => addToCart(pizza)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-200 mt-auto"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};