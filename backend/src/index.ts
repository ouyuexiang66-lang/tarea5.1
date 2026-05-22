import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import orderRoutes from './routes/orderRoutes.js'; 
import { apiLogger } from './components/logger.js'; 
import { getStatusHTML } from './pages/apiStatus.js'; 


const app: Express = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Ruta inicial (renderiza el HTML de estado de la API)
// Añadimos tipos explícitos (Request, Response) para evitar que TypeScript se queje
app.get('/', (req: Request, res: Response) => {
  res.send(getStatusHTML());
});

// Enrutador de pedidos
app.use('/api/orders', orderRoutes);

// Levantamiento del servidor (Unificado en una sola llamada)
const PORT = 3000;
app.listen(PORT, () => {
  apiLogger(`Servidor SliceTime corriendo en http://localhost:${PORT}`);
});