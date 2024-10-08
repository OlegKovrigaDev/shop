import { useActions } from "@/hooks/useActions";
import { RootState } from "@/lib/store";
import { TMenu } from "@/types";
import { LayoutDashboard, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Logo } from "../../parts/Logo";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { Skeleton } from "../../ui/skeleton";

const getCategoryNameByLanguage = (
  category: Category,
  language: "UA" | "RU"
): string => {
  const names = category.name.split("_");
  return language === "UA" ? names[0] : names[1];
};

export const Menu = ({
  title,
  className,
  classNameText,
  classNameIcon,
}: TMenu) => {
  const { allMainAndSubCategories } = useActions();
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );

  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const language = "UA"; // Replace with dynamic language if necessary

  useEffect(() => {
    allMainAndSubCategories();
  }, [allMainAndSubCategories]);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const renderCategories = (parentId: string | null) => {
    return categories
      .filter((category) => category.parentId === parentId)
      .map((category) => (
        <li key={category.id} className="flex flex-col">
          <div
            onClick={() => toggleCategory(category.id)}
            className="flex items-center gap-2 p-2 bg-white rounded-md shadow hover:bg-gray-100 transition cursor-pointer"
          >
            <p className="text-base font-medium">
              {getCategoryNameByLanguage(category, language)}
            </p>
          </div>
          {openCategories.includes(category.id) && category.subcategories && (
            <ul className="ml-4">
              {category.subcategories.map((subCategory) => (
                <li key={subCategory.id}>
                  <Link href={`/category/${subCategory.id}`}>
                    <div className="flex items-center gap-2 p-2 bg-white rounded-md shadow hover:bg-gray-100 transition cursor-pointer">
                      <p className="text-base font-medium">
                        {getCategoryNameByLanguage(subCategory, language)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`flex flex-col h-[48px] md:w-[71px] hover:bg-transparent ${className}`}
          data-open-sidebar
        >
          <MenuIcon className="block md:hidden" />
          <LayoutDashboard className={`hidden md:block ${classNameIcon}`} />
          <span
            className={`hidden md:flex-wrap md:flex text-xs font-normal ${classNameText}`}
          >
            {title}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-screen max-w-full">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="p-4">
          {loading ? (
            <ul className="w-full max-w-full max-h-[80vh] overflow-y-scroll font-medium flex-col gap-4 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
              {Array.from({ length: 10 }).map((_, index) => (
                <li key={index} className="flex items-center gap-2 p-2">
                  <Skeleton className="size-6" />
                  <Skeleton className="h-6 w-full" />
                </li>
              ))}
            </ul>
          ) : error ? (
            <p className="text-red-500">Ошибка: {error}</p>
          ) : (
            <ul className="flex flex-col gap-4 max-h-[80vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
              {renderCategories(null)}
            </ul>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
