"use client";
import Link from "next/link";
import { useCategories } from "../../../hooks/useCategories";
import { Skeleton } from "../../ui/skeleton";

export const SideBar = () => {
  const { fetchedItems, loading, error } = useCategories();

  if (loading) {
    return (
      <ul className="w-full max-w-full max-h-[80vh] font-medium flex-col gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
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

  const handleClick = () => {
    const element = document.querySelector("[data-open-sidebar]");
    if (element) {
      (element as HTMLElement).click();
    }
  };

  return (
    <div className="w-full max-w-full max-h-[80vh] p-4">
      <ul className="flex flex-col gap-4">
        {fetchedItems.slice(0, 7).map(({ id, name }) => (
          <li
            key={id}
            className="flex items-center gap-2 p-2 bg-white rounded-md shadow hover:bg-gray-100 transition"
          >
            {/* Icon */}
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            <Link href={`/category/${id}`}>
              <p className="text-base font-medium">{name}</p>
            </Link>
          </li>
        ))}
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
