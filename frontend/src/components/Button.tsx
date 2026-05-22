
interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit";
    variant?: "primary" | "secondary" | "danger";
}

export const Button = ({ label, onClick, type = "button", variant = "primary" }: ButtonProps) => {
    const styles = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    };

    return (
    <button
        type={type}
        onClick={onClick}
        className={`${styles[variant]} px-4 py-2 rounded-lg font-medium transition-colors`}
    >
        {label}
    </button>
    );
};