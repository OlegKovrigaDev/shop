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
  category,
  isProductPage,
}: {
  category: string | undefined;
  isProductPage: boolean;
}) => (
  <BreadcrumbItem>
    {isProductPage ? (
      <BreadcrumbLink asChild>
        <Link href={`/category/${category}`}>{category}</Link>
      </BreadcrumbLink>
    ) : (
      <span>{category}</span>
    )}
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

export const CrumbsLink = ({ categories, title, isProductPage }: TCrumbs) => {
  return (
    <Breadcrumb className="py-7">
      <BreadcrumbList className="text-lg">
        <BreadcrumbHomeLink />
        <BreadcrumbSeparator />
        <BreadcrumbCategoryLink
          category={categories?.category.name}
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
