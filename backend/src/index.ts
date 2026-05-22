import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import orderRoutes from './routes/orderRoutes.js'; 
import { apiLogger } from './components/logger.js'; 
import { getStatusHTML } from './pages/apiStatus.js'; 

const app: Express = express();

// 1. Middlewares globales
app.use(cors());
app.use(express.json());

// 2. Ruta inicial
app.get('/', (req: Request, res: Response) => {
  res.send(getStatusHTML());
});

// 3. Enrutador de pedidos
app.use('/api/orders', orderRoutes);

// 4. Levantamiento del servidor CONDICIONAL
// Usamos el puerto de Vercel (process.env.PORT) o el 3000 por defecto
const PORT = process.env.PORT || 3000;

// IMPORTANTE: Solo hacemos el listen si NO estamos en Vercel (Producción)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    apiLogger(`Servidor SliceTime corriendo localmente en http://localhost:${PORT}`);
  });
}

// 5. Exportación obligatoria para Vercel
export default app;