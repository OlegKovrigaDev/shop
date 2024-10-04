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

export const CrumbsLink = ({ categories, title, isProductPage }: TCrumbs) => {
  return (
    <Breadcrumb className="py-7">
      <BreadcrumbList className="text-lg">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Головна</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {categories && (
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/category/${categories?.id}`}>
                {categories?.category.name || categories?.id}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/category/sub${categories?.id}`}>
              {categories?.id}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {isProductPage && title && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbPage>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <span>{title}</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbPage>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
