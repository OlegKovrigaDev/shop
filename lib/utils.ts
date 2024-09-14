import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { TItem } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const groupCategoriesByParent = (categories: TItem[]) => {
  const categoryMap: { [key: string]: TItem[] } = {};

  categories.forEach((category) => {
    const parentId = category.parentId || "root";
    if (!categoryMap[parentId]) {
      categoryMap[parentId] = [];
    }
    categoryMap[parentId].push(category);
  });

  return categoryMap;
};
