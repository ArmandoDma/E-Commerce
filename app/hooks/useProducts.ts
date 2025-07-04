import { useState, useEffect } from "react";
import axios from "axios";

export interface Product {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imageUrl: string;
  stock: number;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Product[]>(
          "https://TU_API_URL/api/products" // 👈 Ajusta la URL a la tuya
        );
        setProducts(response.data);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
