import { type Request, type Response } from 'express';
import * as OrderService from '../services/orderServices.js';

export const createOrder = async (req: Request, res: Response) => {
    try {
    const { cliente, productos } = req.body;

    // Validación de frontera de red (400 Bad Request)
    if (!cliente || !productos || productos.length === 0) {
        return res.status(400).json({ 
        message: "Error: Faltan datos del cliente o productos en el carrito." 
        });
    }

    const pedidoGuardado = await OrderService.saveOrder(req.body);
    
    // 201: Creado con éxito
    return res.status(201).json(pedidoGuardado);
    
    } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};