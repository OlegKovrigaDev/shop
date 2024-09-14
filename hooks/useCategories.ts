import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "@/hooks/useActions";
import { RootState } from "@/lib/store";

export const useCategories = () => {
  const { fetchCategories } = useActions();
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const toggleCategory = (categoryId: string) => {
    if (openCategories.includes(categoryId)) {
      setOpenCategories(openCategories.filter((id) => id !== categoryId));
    } else {
      setOpenCategories([...openCategories, categoryId]);
    }
  };

  return { categories, loading, error, openCategories, toggleCategory };
};
