import { useState, useEffect, useMemo, useCallback } from 'react';


interface CartItem {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
}

export const useCart = () => {
  // 1. Inicialización optimizada: Leemos LocalStorage una sola vez al arrancar
    const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('pizzas-cart');
    try {
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error("Error al parsear el carrito del LocalStorage", error);
        return [];
    }
    });

  // 2. useEffect: Guardar automáticamente en LocalStorage cada vez que cambie el carrito
    useEffect(() => {
    localStorage.setItem('pizzas-cart', JSON.stringify(cart));
    }, [cart]);

  // 3. useCallback: Función para añadir pizza (evita recrear la función innecesariamente)
    const addToCart = useCallback((pizza: Omit<CartItem, 'cantidad'>) => {
    setCart((prevCart) => {
      // Comprobamos si la pizza ya está en el carrito
        const itemExists = prevCart.find(item => item.id === pizza.id);

        if (itemExists) {
        // Si existe, aumentamos la cantidad
        return prevCart.map(item =>
            item.id === pizza.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
        }
      // Si no existe, la añadimos con cantidad 1
        return [...prevCart, { ...pizza, cantidad: 1 }];
    });
    }, []);

  // 4. useCallback: Función para eliminar o restar cantidad
    const removeFromCart = useCallback((id: number) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
    }, []);

  // 5. useMemo: Cálculo del precio total (solo se recalcula si el carrito cambia)
    const totalPrecio = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    }, [cart]);

  // 6. useMemo: Cantidad total de productos
    const totalItems = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
    }, [cart]);

    return {
    cart,
    addToCart,
    removeFromCart,
    totalPrecio,
    totalItems
    };
};