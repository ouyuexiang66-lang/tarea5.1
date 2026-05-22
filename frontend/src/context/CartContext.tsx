/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactNode } from 'react';
// IMPORTANTE: Importamos la lógica real de tu hook
import { useCart as useCartLogic } from '../hooks/useCart';

// Interfaces
interface CartItem {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (pizza: Omit<CartItem, 'cantidad'>) => void;
    removeFromCart: (id: number) => void;
    totalPrecio: number;
    totalItems: number;
}

// 1. Creamos el contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);

// 2. El Proveedor (Exportamos componente)
export const CartProvider = ({ children }: { children: ReactNode }) => {
    // Usamos la lógica real que guarda en localStorage
    const cartLogic = useCartLogic(); 

    return (
        <CartContext.Provider value={cartLogic}>
            {children}
        </CartContext.Provider>
    );
};

// 3. El Hook de consumo (Exportamos función)
// El eslint-disable de arriba permite que esta exportación no de error
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
};