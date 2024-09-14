import { useState, useEffect } from "react";
import { fetchCategories, fetchCategoryItems } from "@/api/index";
import { TItem, TItems } from "@/types";

export const useCategoriesWithItems = () => {
  const [categories, setCategories] = useState<TItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryItems, setCategoryItems] = useState<TItems[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        setError("Failed to fetch categories.");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const loadCategoryItems = async () => {
        try {
          setLoading(true);
          const items = await fetchCategoryItems(selectedCategory);
          setCategoryItems(items);
        } catch (error) {
          setError("Failed to fetch items for selected category.");
        } finally {
          setLoading(false);
        }
      };

      loadCategoryItems();
    }
  }, [selectedCategory]);

  return {
    categories,
    categoryItems,
    selectedCategory,
    setSelectedCategory,
    loading,
    error,
  };
};
