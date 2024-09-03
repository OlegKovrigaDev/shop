import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { TCrumbs } from "@/types";

const BreadcrumbHomeLink = () => (
  <BreadcrumbItem>
    <BreadcrumbLink asChild>
      <Link href="/">Головна</Link>
    </BreadcrumbLink>
  </BreadcrumbItem>
);

const BreadcrumbCategoryLink = ({
  categories,
  category,
  isProductPage,
}: {
  categories: TCrumbs["categories"];
  category: string | undefined;
  isProductPage: boolean;
}) => (
  <BreadcrumbItem>
    <BreadcrumbLink asChild>
      <Link href={`/category/${categories?.id}`}>
        {categories?.category.name}
      </Link>
    </BreadcrumbLink>
  </BreadcrumbItem>
);

const BreadcrumbTitleLink = ({ title }: { title: string }) => (
  <BreadcrumbPage>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <span>{title}</span>
      </BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbPage>
);

export const CrumbsLink = ({
  categories,
  items,
  title,
  category,
  isProductPage,
}: TCrumbs) => {
  return (
    <Breadcrumb className="py-7">
      <BreadcrumbList className="text-lg">
        <BreadcrumbHomeLink />
        <BreadcrumbSeparator />
        <BreadcrumbCategoryLink
          categories={categories}
          category={category}
          isProductPage={isProductPage}
        />
        {isProductPage && title && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbTitleLink title={title} />
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
