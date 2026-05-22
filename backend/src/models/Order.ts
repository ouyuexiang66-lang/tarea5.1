export interface OrderItem {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
}

export interface Order {
  id?: string;
  cliente: {
    nombre: string;
    email: string;
    direccion: string;
  };
  productos: OrderItem[];
  total: number;
  estado: 'pendiente' | 'cocinando' | 'enviado';
  createdAt: string;
}