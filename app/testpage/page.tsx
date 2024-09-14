"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "@/hooks/useActions";
import { RootState } from "@/lib/store";

const CategoriesLists = () => {
  const { fetchCategories } = useActions();
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  const renderCategories = (parentId: string | null) => {
    return categories
      .filter((category) => category.parentId === parentId)
      .map((category) => (
        <div key={category.id} style={{ marginLeft: parentId ? 20 : 0 }}>
          <h3>{category.name}</h3>
          {renderCategories(category.id)}
        </div>
      ));
  };

  return <div>{renderCategories(null)}</div>;
};

export default CategoriesLists;
