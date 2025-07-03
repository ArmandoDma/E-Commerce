
import { Link } from "react-router";
import { useCart } from "~/hooks/CartContext";


export default function Header() {
  const { cart } = useCart();

  // Contador de productos en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="flex justify-between items-center py-4 px-8 border-b">
      <div className="text-2xl font-bold">Mixtas</div>

      <nav className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/pages">Pages</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <div className="flex items-center gap-4">
        <button>🔍</button>
        <button>❤️</button>

        {/* 🛒 Carrito */}
        <Link to="/cart" className="relative">
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
