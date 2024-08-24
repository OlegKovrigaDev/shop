import { useState, useEffect } from "react";
import { fetchCategories } from "@/api/index";
import { TItem } from "@/types";

export const useCategories = () => {
  const [fetchedItems, setFetchedItems] = useState<TItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categories = await fetchCategories();
        setFetchedItems(categories);
      } catch (error) {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { fetchedItems, loading, error };
};
