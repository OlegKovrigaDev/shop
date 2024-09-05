// components/CategoryList.tsx
import { useCategories } from "@/hooks/useCategories";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

interface CategoryListProps {
  limit: number;
}

const CategoryList = ({ limit }: CategoryListProps) => {
  const { fetchedItems, loading, error } = useCategories();

  const getSkeletonWidth = (textLength: number) => {
    const avgCharWidth = 16;
    return Math.max(80, textLength * avgCharWidth);
  };

  if (loading) {
    return (
      <ul className="space-y-2">
        {Array.from({ length: limit }).map((_, index) => (
          <li key={index}>
            <Skeleton
              className="h-6"
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
    return <p className="text-red-500">Ошибка: {error}</p>;
  }

  return (
    <ul className="space-y-2">
      {fetchedItems.slice(0, limit).map(({ id, name }) => (
        <li key={id}>
          <Link href={`/category/${id}`}>
            <p className="text-blue-600 hover:underline">{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
