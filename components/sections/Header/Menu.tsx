"use client";
import { TMenu } from "@/types";
import { LayoutDashboard, MenuIcon } from "lucide-react";
import { Logo } from "../../parts/Logo";
import { Button } from "../../ui/button";
import { Skeleton } from "../../ui/skeleton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { useCategoriesKatalog } from "@/hooks/useCategoryKatalog";

export const Menu = ({
  title,
  className,
  classNameText,
  classNameIcon,
}: TMenu) => {
  const { fetchedItems, loading, error } = useCategoriesKatalog();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`flex-col h-[48px] md:w-[71px] hover:bg-transparent hover:text-white flex ${className}`}
          data-open-sidebar
        >
          <MenuIcon className="block md:hidden" />
          <LayoutDashboard className={`hidden md:block ${classNameIcon}`} />
          <span
            className={`hidden md:flex-wrap md:flex text-xs font-semibold ${classNameText}`}
          >
            {title}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-screen max-w-full">
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
                  <Skeleton className="h-6 w-6" />
                  <Skeleton className="h-6 w-full" />
                </li>
              ))}
            </ul>
          ) : error ? (
            <p className="text-red-500">Ошибка: {error}</p>
          ) : (
            <ul className="flex flex-col gap-4 max-h-[80vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
              {fetchedItems.map(({ id, name }) => (
                <li
                  key={id}
                  className="flex items-center gap-2 p-2 bg-white rounded-md shadow hover:bg-gray-100 transition"
                >
                  <a href={`/category/${id}`} className="text-base font-medium">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
