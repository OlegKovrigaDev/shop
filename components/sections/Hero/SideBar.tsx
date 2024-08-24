"use client";
import { FC } from "react";
import Link from "next/link";
import { Skeleton } from "../../ui/skeleton";
import { useCategories } from "../../../hooks/useCategories";
import { Menu } from "../Header/Menu";

type SideBarProps = {
  openSidebar?: boolean;
};

export const SideBar: FC<SideBarProps> = ({ openSidebar }) => {
  const { fetchedItems, loading, error } = useCategories();

  const getSkeletonWidth = (textLength: number) => {
    const avgCharWidth = 16;
    return Math.max(80, textLength * avgCharWidth);
  };

  if (loading) {
    return (
      <ul className="w-full max-w-72 font-medium flex-col gap-4 hidden lg:flex">
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
      {fetchedItems.map(({ id, name }) => (
        <li key={id}>
          <Link href={`/catalog/${id}`}>{name}</Link>
        </li>
      ))}
      <li>
        {openSidebar && (
          <Menu
            title="Всі категорії >"
            classNameText="md:text-[15px]"
            className="flex-row justify-start hover:text-blue-500 md:w-full md:h-6"
            classNameIcon="md:hidden"
          >
            <SideBar />
          </Menu>
        )}
      </li>
    </ul>
  );
};
