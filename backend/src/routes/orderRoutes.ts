import { Router } from 'express';
// IMPORTANTE: Asegúrate de que el nombre del archivo es exactamente igual
// y que incluyes el .js al final
import { createOrder } from '../controllers/orderController.js'; 

const router = Router();

router.post('/', createOrder);

export default router;