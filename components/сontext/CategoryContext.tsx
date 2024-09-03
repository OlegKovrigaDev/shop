"use client";
import React, { createContext, useContext, useState } from "react";

interface CategoryContextProps {
  productId: string | null;
  setProductId: (id: string | null) => void;
}

const CategoryContext = createContext<CategoryContextProps | undefined>(
  undefined
);

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [productId, setProductId] = useState<string | null>(null);

  return (
    <CategoryContext.Provider value={{ productId, setProductId }}>
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
