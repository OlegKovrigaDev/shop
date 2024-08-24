"use client";

import { TItem } from "@/types";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { fetchCategories } from "../../../api/index";
import { Skeleton } from "../../ui/skeleton";

export const SideBar: FC = () => {
  const [fetchedItems, setFetchedItems] = useState<TItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categories = await fetchCategories();
        setFetchedItems(categories);
      } catch (error) {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

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
    </ul>
  );
};
