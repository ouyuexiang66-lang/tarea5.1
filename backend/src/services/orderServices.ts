export interface OrderData {
  cliente: {
    nombre: string;
    email: string;
    direccion: string;
  };
  productos: any[];
}

export const saveOrder = async (orderData: OrderData) => {
  // Simulamos lógica de base de datos
  const nuevoPedido = {
    id: `ORD-${Math.floor(Math.random() * 10000)}`,
    ...orderData,
    fecha: new Date().toISOString(),
    estado: 'pendiente'
  };

  return nuevoPedido;
};