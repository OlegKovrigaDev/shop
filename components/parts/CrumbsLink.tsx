"use client";
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

export const CrumbsLink: React.FC<TCrumbs> = ({ categories, items }) => {
  return (
    <Breadcrumb className="py-7">
      <BreadcrumbList className="text-lg">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Головна</Link>
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <BreadcrumbLink asChild>
              <Link href={`/Category/${categories.id}`}>
                {categories.category.name}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbPage>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
        {/* <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/Category/${categories.id}`}>
              {items[1].params.GoodName}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
