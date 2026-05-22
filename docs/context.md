# Gestión de Estado Global con Context API

En el proyecto **SliceTime**, hemos implementado la Context API de React para gestionar el estado del carrito de compras de forma global. Esto permite que cualquier componente de la aplicación pueda acceder y modificar el carrito sin necesidad de pasar props manualmente a través de múltiples niveles (evitando el *Prop Drilling*).

## Arquitectura de la Implementación

Para cumplir con las reglas de **Fast Refresh** de Vite y mantener un código limpio, hemos dividido la lógica en tres partes:

1.  **Provider (`CartContext.tsx`)**: Define el almacén de datos y envuelve la aplicación.
2.  **Lógica Interna (`useCart.ts`)**: Gestiona el estado local, las funciones de cálculo y la persistencia en `localStorage`.
3.  **Consumer Hook (`useCartContext.ts`)**: Un hook personalizado que permite a los componentes consumir el contexto de forma segura.

## Componentes Principales

### 1. CartProvider
Ubicado en `src/context/CartContext.tsx`. Este componente utiliza el hook `useCart` y provee los siguientes datos a toda la aplicación:
- `cart`: Array con los productos seleccionados.
- `addToCart`: Función para añadir o incrementar productos.
- `removeFromCart`: Función para eliminar productos.
- `totalPrecio`: Cálculo memorizado del coste total.
- `totalItems`: Cantidad total de productos en el carrito.

### 2. Custom Hook de Consumo
Ubicado en `src/hooks/useCartContext.ts`. Se implementó una validación para asegurar que el contexto se use siempre dentro de un `CartProvider`, evitando errores de ejecución:

```typescript
if (!context) {
  throw new Error('useCartContext debe usarse dentro de un CartProvider');
}