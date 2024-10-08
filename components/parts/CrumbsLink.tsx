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

export const CrumbsLink = ({ categories, title }: TCrumbs) => {
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
                {categories?.id && categories?.name}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/category/${categories?.id}`}>
              {categories?.name}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {title && (
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
