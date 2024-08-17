"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { fetchCategories } from "../../../api/index";
import { TItem } from "@/types";

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
    return <p>Завантажую...</p>;
  }

  if (error) {
    return <p>Помилка: {error}</p>;
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
