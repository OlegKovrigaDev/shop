import { Skeleton } from "../ui/skeleton";

export const CategorySkeleton = () => {
  return (
    <ul className="w-full max-w-full max-h-[80vh] overflow-y-scroll font-medium flex-col gap-4 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index} className="flex items-center gap-2 p-2">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-full" />
        </li>
      ))}
    </ul>
  );
};
