"use client";
import Link from "next/link";
import { Skeleton } from "../../ui/skeleton";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "@/hooks/useActions";
import { RootState } from "@/lib/store";

export const SideBar = () => {
  const { allCategories } = useActions();
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    allCategories();
  }, [allCategories]);

  if (loading) {
    return (
      <ul className="w-full max-w-full max-h-[80vh] font-medium flex-col gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <li key={index} className="flex items-center gap-2 p-2">
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-6 w-full" />
          </li>
        ))}
      </ul>
    );
  }

  if (error) {
    return <p className="min-w-72">Ошибка: {error}</p>;
  }

  const renderMainCategories = () => {
    return categories
      .filter((category) => category.parentId === null)
      .slice(0, 10)
      .map((category) => (
        <li key={category.id} className="flex flex-col">
          <div className="flex items-center gap-2 p-2 bg-white rounded-md shadow hover:bg-gray-100 transition">
            {/* Icon */}
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            <Link href={`/category/${category.id}`}>
              <p className="text-base font-medium">{category.name}</p>
            </Link>
          </div>
        </li>
      ));
  };

  const handleClick = () => {
    const element = document.querySelector("[data-open-sidebar]");
    if (element) {
      (element as HTMLElement).click();
    }
  };

  return (
    <div className="w-full max-w-full max-h-[80vh] p-1">
      <ul className="flex flex-col gap-0.5">
        {renderMainCategories()}
        <li>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
            className="text-red-500 font-medium"
          >
            Всі Категорії &gt;
          </Link>
        </li>
      </ul>
    </div>
  );
};
