"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CrumbsLink } from "@/components/parts/CrumbsLink";
import { RootState } from "@/lib/store";
import { CategoryPageProps } from "@/types";
import { useActions } from "@/hooks/useActions";
import { FilterAccordionComponent } from "@/components/category/FilterAccordionItem";
import { ProductList } from "@/components/category/ProductList";

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { id } = params;
  const { categoryById, categoryItemsById } = useActions();

  const { categoryDetails, items, loading, error } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    categoryById(id.toString());
    categoryItemsById(id.toString());
  }, [id, categoryById, categoryItemsById]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!categoryDetails || !items) {
    return <div>Нет данных</div>;
  }

  return (
    <div className="mb-[75px]">
      {categoryDetails && (
        <CrumbsLink
          categories={categoryDetails}
          isProductPage={false}
          title=""
          items={[]}
        />
      )}

      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        {/* Filters Accordion */}
        <FilterAccordionComponent />

        {/* Product List */}
        <ProductList items={items} categoryId={id.toString()} />
      </div>
    </div>
  );
};

export default CategoryPage;
