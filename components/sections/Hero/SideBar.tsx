"use client";
import Link from "next/link";
import { Skeleton } from "../../ui/skeleton";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "@/hooks/useActions";
import { RootState } from "@/lib/store";

const getCategoryNameByLanguage = (
  category: Category,
  language: "UA" | "RU"
): string => {
  const names = category.name.split("_");
  return language === "UA" ? names[0] : names[1];
};

export const SideBar = () => {
  const { allMainAndSubCategories } = useActions();
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    allMainAndSubCategories();
  }, [allMainAndSubCategories]);

  if (loading) {
    return (
      <ul className="w-full max-w-full max-h-[80vh] font-medium flex-col gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <li key={index} className="flex items-center gap-2 p-2">
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-6 w-full" />
          </li>
        ))}
      </ul>
    );
  }

  if (error) {
    return <p className="min-w-72 text-red-600">Ошибка: </p>;
  }

  const language = "UA";

  const renderMainCategories = () => {
    return categories
      .filter((category) => category.parentId === null)
      .slice(0, 10)
      .map((category) => (
        <li key={category.id} className="flex flex-col">
          <div className="flex items-center gap-2 p-2 transition">
            {/* Icon */}
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            <Link href={`/category/${category.id}`}>
              <p className="text-base font-medium">
                {getCategoryNameByLanguage(category, language)}
              </p>
            </Link>
          </div>
        </li>
      ));
  };

  return (
    <div className="w-full max-w-full max-h-[80vh] p-1">
      <ul>{renderMainCategories()}</ul>
    </div>
  );
};
