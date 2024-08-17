"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import axiosClient from "../../../services/api/axios";
import { TItem } from "@/types";

export const SideBar: FC = () => {
  const [fetchedItems, setFetchedItems] = useState<TItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get<TItem[]>("/category");
        setFetchedItems(response.data);
      } catch (error) {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
          <Link href="/">{name}</Link>
        </li>
      ))}
    </ul>
  );
};
