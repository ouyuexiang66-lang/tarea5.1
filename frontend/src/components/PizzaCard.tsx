import { Button } from "./Button"; 


interface Pizza {
    id: number;
    nombre: string;
    precio: number;
    ingredientes: string[];
}

interface PizzaCardProps {
    pizza: Pizza;
    onAdd?: (id: number) => void;
}

export const PizzaCard = ({ pizza, onAdd }: PizzaCardProps) => {
    return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow bg-white">
        <h3 className="text-xl font-bold text-gray-800">{pizza.nombre}</h3>
        <p className="text-gray-500 text-sm mb-3">
        {pizza.ingredientes.join(", ")}
        </p>
        <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-orange-600">{pizza.precio}€</span>
        <Button label="Añadir" onClick={() => onAdd?.(pizza.id)} />
        </div>
    </div>
    );
};