import { Link } from "react-router";
import { useCart } from "~/hooks/CartContext";


export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0)
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl mb-4">Your cart is empty 🛒</h2>
        <Link
          to="/"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Shop
        </Link>
      </div>
    );

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-4"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-8 text-right">
        <p className="text-xl font-bold mb-4">Total: ${total.toFixed(2)}</p>
        <button
          onClick={clearCart}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Clear Cart
        </button>
      </div>
    </section>
  );
}
