"use client";
import { CrumbsLink } from "@/components/parts/CrumbsLink";
import { FilterAccordionComponent } from "@/components/category/FilterAccordionItem";
import { ProductList } from "@/components/category/ProductList";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useActions } from "@/hooks/useActions";
import { mainCategories } from "@/lib/slices/categorySlice";

const CategoryPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { categories, categoryDetails, items } = useSelector(
    (state: RootState) => state.categories
  );
  const { categoryById, categoryItemsById } = useActions();

  useEffect(() => {
    categoryById(id);
    categoryItemsById(id);
  }, [id, categoryById, categoryItemsById]);

  return (
    <div className="mb-[75px]">
      <CrumbsLink isProductPage={false} categories={categoryDetails} />
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <FilterAccordionComponent />
        <ProductList items={items} categoryId={id} />
      </div>
    </div>
  );
};

export default CategoryPage;
