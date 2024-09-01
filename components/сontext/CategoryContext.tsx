"use client";
import React, { createContext, useContext, useState } from "react";

interface CategoryContextProps {
  categoryId: string | null;
  setCategoryId: (id: string | null) => void;
}

const CategoryContext = createContext<CategoryContextProps | undefined>(
  undefined
);

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [categoryId, setCategoryId] = useState<string | null>(null);

  return (
    <CategoryContext.Provider value={{ categoryId, setCategoryId }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider"
    );
  }
  return context;
};
