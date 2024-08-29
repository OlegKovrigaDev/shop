"use client";
import Link from "next/link";
import { useCategories } from "../../../hooks/useCategories";
import { Skeleton } from "../../ui/skeleton";
import { Menu } from "../Header/Menu";

type SideBarProps = {
  openSidebar?: boolean;
};

export const SideBar = ({ openSidebar }: SideBarProps) => {
  const { fetchedItems, loading, error } = useCategories();

  const getSkeletonWidth = (textLength: number) => {
    const avgCharWidth = 16;
    return Math.max(80, textLength * avgCharWidth);
  };

  if (loading) {
    return (
      <ul className="w-full max-w-72 max-h-[432px] overflow-y-scroll font-medium flex-col gap-4 hidden lg:flex">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index}>
            <Skeleton
              className="h-[24px]"
              style={{
                width: `${getSkeletonWidth(10)}px`,
                background: "#e2e8f0",
              }}
            />
          </li>
        ))}
      </ul>
    );
  }

  if (error) {
    return <p className="min-w-72 lg:block hidden">Помилка: {error}</p>;
  }

  return (
    <ul className="w-full max-w-72 font-medium flex-col gap-4 hidden lg:flex">
      {fetchedItems.slice(0, 10).map(({ id, name }) => (
        <li key={id}>
          <Link href={`/catalog/${id}`}>{name}</Link>
        </li>
      ))}
      <li>
        {openSidebar && (
          <Menu
            title="Всі категорії &gt;"
            classNameText="md:text-[15px]"
            className="flex-row justify-start hover:text-red-500 md:w-full md:h-6"
            classNameIcon="md:hidden"
          >
            <div className="overflow-y-auto max-h-screen p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                {fetchedItems.map(({ id, name }) => (
                  <Link href={`/catalog/${id}`} key={id}>
                    <p className="text-sm font-medium p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                      {name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <SideBar />
          </Menu>
        )}
      </li>
    </ul>
  );
};
