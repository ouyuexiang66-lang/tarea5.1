import { useState } from 'react';
import { useCartContext } from '../hooks/useCartContext';

export const Checkout = () => {
  const { cart, totalPrecio, totalItems } = useCartContext();
  
  // 1. Estado para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    direccion: ''
  });

  // 2. Estado para los mensajes de error
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  // Manejador de cambios dinámico
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Limpiamos el error específico mientras el usuario escribe
    if (errores[name]) {
      setErrores({ ...errores, [name]: '' });
    }
  };

  // 3. Lógica de validación básica
  const validarFormulario = () => {
    const nuevosErrores: Record<string, string> = {};
    
    if (!formData.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!formData.email.includes('@')) nuevosErrores.email = "Introduce un email válido.";
    if (formData.direccion.trim().length < 10) nuevosErrores.direccion = "La dirección debe ser más detallada.";
    
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validarFormulario()) {
      setEnviado(true);
      // Aquí se conectaría con el Backend en el futuro
      console.log("Datos del pedido:", { cliente: formData, productos: cart, total: totalPrecio });
    }
  };

  if (enviado) {
    return (
      <div className="max-w-md mx-auto mt-10 p-8 bg-green-50 rounded-2xl border border-green-200 text-center">
        <h2 className="text-2xl font-bold text-green-800">¡Pedido Realizado!</h2>
        <p className="text-green-700 mt-2">Gracias {formData.nombre}, hemos recibido tu pedido para la dirección: {formData.direccion}.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Resumen del Carrito (Izquierda) */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Tu Pedido ({totalItems})</h2>
        {/* Aquí iría el mapeo del carrito que ya tienes */}
        <div className="p-4 bg-gray-50 rounded-xl">
           <p className="text-xl font-bold text-gray-800">Total a pagar: {totalPrecio.toFixed(2)}€</p>
        </div>
      </div>

      {/* Formulario Controlado (Derecha) */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6">Datos de Entrega</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border ${errores.nombre ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-orange-500'} outline-none`}
              placeholder="Ej: Juan Pérez"
            />
            {errores.nombre && <p className="text-red-500 text-xs mt-1">{errores.nombre}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border ${errores.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-orange-500'} outline-none`}
              placeholder="juan@email.com"
            />
            {errores.email && <p className="text-red-500 text-xs mt-1">{errores.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Dirección Completa</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border ${errores.direccion ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-orange-500'} outline-none`}
              placeholder="Calle Falsa 123, Barcelona"
            />
            {errores.direccion && <p className="text-red-500 text-xs mt-1">{errores.direccion}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-100"
          >
            Confirmar y Pagar
          </button>
        </form>
      </div>
    </div>
  );
};