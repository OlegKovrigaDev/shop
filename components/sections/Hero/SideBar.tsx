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

  if (loading) {
    return (
      <ul className="w-full max-w-72 font-medium flex flex-col gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
            <Skeleton className="h-[24px] w-full bg-stone-200" />
          </li>
        ))}
      </ul>
    );
  }

  if (error) {
    return <p className="min-w-72">Помилка: {error}</p>;
  }

  return (
    <ul className="w-full max-w-72 font-medium flex flex-col gap-4">
      {fetchedItems.map(({ id, name }) => (
        <li key={id}>
          <Link href={`/catalog/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
