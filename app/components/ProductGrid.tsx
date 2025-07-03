import { Link } from "react-router";

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "adidas X Pop Polo shirt",
      price: "$69.99",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Tenis_Samba_OG_Blanco_B75806_01_00_standard.jpg",
      description: "Una polo cómoda para todos los días.",
    },
    {
      id: 2,
      name: "adidas X Pop TRX Vintage",
      price: "$89.99",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Tenis_Samba_OG_Blanco_B75806_01_00_standard.jpg",
      description: "Zapatillas retro con estilo.",
    },
    {
      id: 3,
      name: "adidas X Pop Beckenbauer",
      price: "$120.00",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Tenis_Samba_OG_Blanco_B75806_01_00_standard.jpg",
      description: "Una chamarra icónica.",
    },
    {
      id: 4,
      name: "adidas X Pop Classic T-shirt",
      price: "$49.99",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Tenis_Samba_OG_Blanco_B75806_01_00_standard.jpg",
      description: "Camiseta clásica y cómoda.",
    },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition block"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-2">{product.price}</p>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
