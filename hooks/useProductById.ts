import { useState, useEffect } from "react";
import { Product } from "@/types";
import { getProductById } from "@/api";

export const useProduct = (productId: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching product data");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};
