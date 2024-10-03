"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { CrumbsLink } from "@/components/parts/CrumbsLink";
import { FilterAccordion } from "@/components/parts/FilterAccordion";
import { ProductCard } from "@/components/parts/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RootState } from "@/lib/store";
import { CategoryPageProps } from "@/types";
import { useActions } from "@/hooks/useActions";

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

  return (
    <div className="mb-[75px]">
      {categoryDetails && (
        <CrumbsLink
          category={(categoryDetails.id, categoryDetails.name)}
          isProductPage={false}
          title=""
          items={[]}
        />
      )}

      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2 max-w-[280px] sm:min-w-[280px]">
          {[
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
          ].map(({ id }) => (
            <FilterAccordion key={id} title="Розмір спального місця">
              <div className="flex flex-col gap-2 text-xs w-full">
                {[
                  { id: 1, type: "Односпальні", count: 24 },
                  { id: 2, type: "Односпальні", count: 24 },
                  { id: 3, type: "Односпальні", count: 24 },
                  { id: 4, type: "Односпальні", count: 24 },
                  { id: 5, type: "Односпальні", count: 24 },
                ].map(({ id, type, count }) => (
                  <div key={id} className="flex justify-between text-[16px]">
                    <span className="flex gap-2 items-center">
                      <Checkbox
                        id={`variant-${id}`}
                        className="border-2 rounded"
                      />
                      <Label htmlFor={`variant-${id}`}>{type}</Label>
                    </span>
                    <span>[{count}]</span>
                  </div>
                ))}

                <Link href="/" className="text-[#4E3A9F] mt-4">
                  Згорнути
                </Link>

                <Button className="mt-6 px-20 py-2 bg-[#D81C1B] hover:bg-[#D81C1B]/80">
                  Застосувати
                </Button>
              </div>
            </FilterAccordion>
          ))}
        </div>

        <div className="flex flex-1 gap-y-8 justify-between flex-wrap max-w-[904px]">
          {items.map(
            ({
              offerId,
              params: {
                ModelName,
                RetailPrice,
                RetailPriceWithDiscount,
                Articul,
              },
            }) => (
              <Link
                key={offerId}
                href={`/product/${offerId}?categoryId=${id}`}
                passHref
              >
                <ProductCard
                  img="/slide1-min.jpg"
                  title={ModelName}
                  oldPrice={RetailPriceWithDiscount}
                  newPrice={RetailPrice}
                  Articul={Articul}
                  offerId={offerId}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
