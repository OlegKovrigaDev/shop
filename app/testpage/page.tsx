"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const ReduxDebug = () => {
  const categories = useSelector((state: RootState) => state.categories);

  return (
    <div>
      <h1>Основные категории</h1>
      <ul>
        {categories.categories.map((category) => (
          <li key={category.id}>
            <h2>{category.name}</h2>
            {/* <ul>
              {category.subcategories.map((subcategory) => (
                <li key={subcategory.id}>
                  <h3>{subcategory.name}</h3>
                </li>
              ))}
            </ul> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ReduxDebug;
