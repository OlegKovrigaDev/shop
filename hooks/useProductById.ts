import { useState, useEffect } from "react";
import { Product } from "@/types";
import { getProductById } from "@/api";

export const useProduct = (offerId: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(offerId);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching product data");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [offerId]);

  return { product, loading, error };
};
