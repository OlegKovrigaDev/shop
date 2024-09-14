import { FC } from "react";
import { TCategory } from "@/types";

interface CategoryListProps {
  categories: TCategory[];
  openCategories: string[];
  toggleCategory: (categoryId: string) => void;
  parentId: string | null;
}

export const CategoryList: FC<CategoryListProps> = ({
  categories,
  openCategories,
  toggleCategory,
  parentId,
}) => {
  const renderCategories = (parentId: string | null) => {
    return categories
      .filter((category) => category.parentId === parentId)
      .map((category) => (
        <li key={category.id} className="flex flex-col">
          <div
            onClick={() => toggleCategory(category.id)}
            className="flex items-center gap-2 p-2 bg-white rounded-md shadow hover:bg-gray-100 transition cursor-pointer"
          >
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            <p className="text-base font-medium">{category.name}</p>
          </div>
          {openCategories.includes(category.id) && (
            <ul className="ml-4">{renderCategories(category.id)}</ul>
          )}
        </li>
      ));
  };

  return <ul>{renderCategories(parentId)}</ul>;
};
