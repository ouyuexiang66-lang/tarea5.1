# Documentación de la API - SliceTime

La API está construida con Node.js y Express, siguiendo una arquitectura de servicios por capas para separar la lógica de red de la lógica de negocio.

## Base URL
`http://localhost:3000/api`

## Endpoints de Pedidos

### 1. Crear Pedido
**POST** `/orders`

**Request Body:**
```json
{
  "cliente": {
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "direccion": "Calle Falsa 123"
  },
  "productos": [
    { "id": 1, "nombre": "Margarita", "cantidad": 2, "precio": 9.50 }
  ]
}