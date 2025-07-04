import { Link, useParams } from "react-router";
import { useCart } from "~/hooks/CartContext";

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();


    const products = [
        {
            id: "1",
            name: "adidas X Pop Polo shirt",
            price: "$69.99",
            image:
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Tenis_Samba_OG_Blanco_B75806_01_00_standard.jpg",
            description: "Una polo cómoda para todos los días.",
        },
        {
            id: "2",
            name: "adidas X Pop TRX Vintage",
            price: "$89.99",
            image:
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Tenis_Samba_OG_Blanco_B75806_01_00_standard.jpg",
            description: "Zapatillas retro con estilo.",
        },
        {
            id: "3",
            name: "adidas X Pop Beckenbauer",
            price: "$120.00",
            image:
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Tenis_Samba_OG_Blanco_B75806_01_00_standard.jpg",
            description: "Una chamarra icónica.",
        },
        {
            id: "4",
            name: "adidas X Pop Classic T-shirt",
            price: "$49.99",
            image:
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Tenis_Samba_OG_Blanco_B75806_01_00_standard.jpg",
            description: "Camiseta clásica y cómoda.",
        },
    ];

    const product = products.find((p) => p.id === id);

    if (!product) {
        return <div className="text-center py-20">Producto no encontrado</div>;
    }

    return (
        <section className="py-12 px-4 max-w-4xl mx-auto">
            <Link
                to="/"
                className="inline-block mb-6 text-blue-600 hover:underline"
            >
                {"<"} Back to Shop
            </Link>
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover rounded mb-8"
            />
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-4">{product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            <button
  onClick={() => {
    addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace("$", "")),
      image: product.image,
      quantity: 1,
    });
    alert("Producto agregado al carrito 🛒");
  }}
  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
>
  Add to Cart
</button>
        </section>
    );
}
