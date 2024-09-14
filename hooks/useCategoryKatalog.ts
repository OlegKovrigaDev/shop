import { useState, useEffect } from "react";
import { fetchCategories } from "@/api/index";
import { TItem } from "@/types";

export const useCategoriesKatalog = () => {
  const [fetchedItems, setFetchedItems] = useState<TItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categories = await fetchCategories();

        const rootCategories = categories.filter((category) => {
          const parentId = category.parentId;
          return parentId === null || parentId === "0" || parentId === 0;
        });

        setFetchedItems(rootCategories);
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
