import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { TCategoriesItem, TCrumbs } from "@/types";

const BreadcrumbHomeLink = () => (
  <BreadcrumbItem>
    <BreadcrumbLink asChild>
      <Link href="/">Головна</Link>
    </BreadcrumbLink>
  </BreadcrumbItem>
);

const BreadcrumbCategoryLink = ({
  categories,
  isProductPage,
}: {
  categories: TCrumbs["categories"];
<<<<<<< Updated upstream
  category: string | undefined;
=======
>>>>>>> Stashed changes
  isProductPage: boolean;
}) => {
  const category = categories?.category;
  if (!category) return null;

  return (
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
<<<<<<< Updated upstream
        <Link href={`/category/${categories?.id}`}>
          {categories?.category.name}
        </Link>
      </BreadcrumbLink>
    ) : (
      <span>{categories?.category.name}</span>
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

export const CrumbsLink = ({
  categories,
  items,
  title,
  category,
=======
        <Link href={`/category/${category.id}`}>{category.name}</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
};

const BreadcrumbSubcategoryLink = ({
  subcategory,
  isProductPage,
  categoryId,
}: {
  subcategory: TCategoriesItem[] | null;
  isProductPage: boolean;
  categoryId: string;
}) => {
  if (!subcategory || subcategory.length === 0) return null;

  const subcategoryName = subcategory[0]?.category?.name;

  return (
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href={`/category/${categoryId}/subcategory/${subcategoryName}`}>
          {subcategoryName}
        </Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
};

const BreadcrumbTitleLink = ({ title }: { title: string }) => (
  <BreadcrumbItem>
    <span>{title}</span>
  </BreadcrumbItem>
);

export const CrumbsLink = ({
  categories,
  subcategory,
  title,
>>>>>>> Stashed changes
  isProductPage,
}: TCrumbs) => {
  return (
    <Breadcrumb className="py-7">
      <BreadcrumbList className="text-lg">
        <BreadcrumbHomeLink />
        <BreadcrumbSeparator />

        <BreadcrumbCategoryLink
          categories={categories}
<<<<<<< Updated upstream
          category={category}
=======
>>>>>>> Stashed changes
          isProductPage={isProductPage}
        />

        {subcategory && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbSubcategoryLink
              subcategory={subcategory}
              isProductPage={isProductPage}
              categoryId={categories?.category?.id ?? ""}
            />
          </>
        )}

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
