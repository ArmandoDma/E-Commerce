
import { Link } from "react-router";
import { useProducts } from "~/hooks/useProducts";

export default function ProductGrid() {
  const { products, loading, error } = useProducts();

  if (loading) return <div className="text-center py-20">Cargando productos...</div>;
  if (error) return <div className="text-center py-20 text-red-600">{error}</div>;

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition block"
          >
            <img
              src={product.imageUrl}
              alt={product.nombre}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{product.nombre}</h3>
              <p className="text-gray-700 mb-2">${product.precio}</p>
              <p className="text-sm text-gray-500">{product.descripcion}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
