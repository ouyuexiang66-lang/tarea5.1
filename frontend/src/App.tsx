import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Menu } from './pages/menu';
import { Checkout } from './pages/Checkout'; 
import { NotFound } from './pages/NotFound';


function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar /> {/* El Navbar siempre visible */}
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/checkout" element={<Checkout />} />
            
            {/* Página 404 - Siempre al final */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;