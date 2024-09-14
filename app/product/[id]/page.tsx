import React from "react";
import Link from "next/link";
import { getProductById } from "@/api";
import { CrumbsLink } from "@/components/parts/CrumbsLink";
import { FilterAccordion } from "@/components/parts/FilterAccordion";
import { Section } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CategoryPageProps } from "@/types";
import { Check } from "lucide-react";

const product = async ({
  params,
  searchParams,
}: CategoryPageProps & { searchParams: { categoryId: string } }) => {
  const { id } = params;
  const categoryId = searchParams.categoryId;

  try {
    const productId = await getProductById(id);

    return (
      <>
        <CrumbsLink
          isProductPage={true}
          category={productId.params["Приналежність до категорії"]}
          title={productId.params.ModelName}
          items={[]}
          categories={{
            id: categoryId,
            category: { name: productId.params["Приналежність до категорії"] },
          }}
        />
        <div className="flex justify-between">
          <div className="w-[800px] flex flex-col gap-6">
            <FilterAccordion
              title="Вибір опції"
              className="bg-white p-0 text-2xl"
            >
              <div className="flex flex-col gap-2">
                <p>Your option selection text here.</p>
              </div>
            </FilterAccordion>
            <FilterAccordion title="Опис" className="bg-white p-0 text-2xl">
              <div className="flex flex-col gap-4">
                <p>Product description goes here.</p>
                <p>Additional product details...</p>
              </div>
            </FilterAccordion>
          </div>
          <div className="w-[385px] flex flex-col gap-6">
            <FilterAccordion title="Варіанти товару">
              <div className="flex flex-col gap-2 text-xs w-full">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex justify-between text-[16px]">
                    <span className="flex gap-2 items-center">
                      <Checkbox
                        id={`variant-${index}`}
                        className="border-2 rounded"
                      />
                      <Label htmlFor={`variant-${index}`}>Односпальні</Label>
                    </span>
                    <span>[24]</span>
                  </div>
                ))}
                <Link href="/" className="text-[#4E3A9F] mt-4">
                  Згорнути
                </Link>
                <div className="flex justify-between gap-4 mt-6">
                  <Button className="px-18 py-2 bg-[#D81C1B] hover:bg-[#D81C1B]/80 flex-1">
                    Купити
                  </Button>
                  <Button className="px-18 py-2 bg-transparent border-2 border-[#D81C1B] text-[#D81C1B] hover:bg-black/10 flex-1">
                    Купити в 1 клік
                  </Button>
                </div>
              </div>
            </FilterAccordion>
            <FilterAccordion title="Наявність в магазинах">
              <div className="flex flex-col gap-2 text-xs w-full">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex justify-between text-[16px]">
                    <span>Location Name</span>
                    {index % 2 === 0 && <Check color="#3C9F3A" />}
                  </div>
                ))}
                <Link href="/" className="text-[#4E3A9F] mt-4">
                  Дізнатися всі умови
                </Link>
              </div>
            </FilterAccordion>
            <FilterAccordion title="Доставка">
              <div className="flex flex-col gap-2 text-xs">
                <div className="flex justify-between text-[16px]">
                  <span>Самовивіз зі складу</span>
                  <span className="text-[#3C9F3A]">Безкоштовно</span>
                </div>
                <p>Delivery conditions...</p>
                <div className="flex justify-between text-[16px]">
                  <span>Доставка по Києву</span>
                  <span>599 грн</span>
                </div>
              </div>
            </FilterAccordion>
            <FilterAccordion title="Оплата">
              <div className="flex flex-col gap-2 text-xs">
                <p>Payment options...</p>
                <Link href="/" className="text-[#4E3A9F]">
                  Дізнатися всі умови
                </Link>
              </div>
            </FilterAccordion>
          </div>
        </div>
      </>
    );
  } catch (error) {
    return <div>Error loading product.</div>;
  }
};

export default product;
