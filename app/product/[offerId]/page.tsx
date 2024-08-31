import { CrumbsLink } from "@/components/parts/CrumbsLink";
import { FilterAccordion } from "@/components/parts/FilterAccordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import Link from "next/link";

interface ProductPageProps {
  productData: {
    categories: string[];
    items: string[];
    description: string;
    variants?: { id: number; type: string; count: number }[];
  };
}

const product = ({ productData }: ProductPageProps) => {
  return (
    <>
      {/* <CrumbsLink
        categories={productData.categories}
        items={productData.items}
      /> */}
      <div className="flex justify-between">
        <div className="w-[800px] flex flex-col gap-6">
          <FilterAccordion
            title="Вибір опції"
            className="bg-white p-0 text-2xl"
          >
            <div className="flex flex-col gap-2">
              <p>{productData.description}</p>
            </div>
          </FilterAccordion>
          <FilterAccordion title="Опис" className="bg-white p-0 text-2xl">
            <div className="flex flex-col gap-4">
              <p>{productData.description}</p>
            </div>
          </FilterAccordion>
        </div>
        <div className="w-[385px] flex flex-col gap-6">
          <FilterAccordion title="Варіанти товару">
            <div className="flex flex-col gap-2 text-xs w-full">
              {productData.variants?.map(({ id, type, count }) => (
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
        </div>
        <div className="w-[385px] flex flex-col gap-6">
          <FilterAccordion title="Варіанти товару">
            <div className="flex flex-col gap-2 text-xs w-full">
              {[
                { id: 1, type: "Односпальні", count: 24 },
                { id: 2, type: "Односпальні", count: 24 },
                { id: 3, type: "Односпальні", count: 24 },
                { id: 4, type: "Односпальні", count: 24 },
                { id: 5, type: "Односпальні", count: 24 },
              ].map(({ id, type, count }) => {
                return (
                  <div key={id} className="flex justify-between text-[16px]">
                    <span className="flex gap-2 items-center">
                      <Checkbox id="variants" className="border-2 rounded" />
                      <Label htmlFor="variants">{type}</Label>
                    </span>
                    <span>[{count}]</span>
                  </div>
                );
              })}

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
              {[
                { id: 1, location: "Одеса", actual: true },
                { id: 2, location: "Одеса", actual: true },
                { id: 3, location: "Одеса", actual: false },
              ].map(({ id, location, actual }) => (
                <div key={id} className="flex justify-between text-[16px]">
                  <span>{location}</span>
                  {actual && <Check color="#3C9F3A" />}
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
              <p>
                Безкоштовне самовивезення можливе за наявності товару на цьому
                складі. Якщо товар знаходиться на віддаленому складі або
                необхідно переміщення з іншого магазину, вартість погоджується з
                менеджером
              </p>
              <p>
                При самовивезенні з магазину, винесення та навантаження
                здійснюється самотужки
              </p>
              <div className="flex justify-between text-[16px]">
                <span>Доставка по Києву</span>
                <span>599 грн</span>
              </div>
              <div className="flex justify-between text-[16px]">
                <span>По Україні від:</span>
                <span>599 грн</span>
              </div>
            </div>
          </FilterAccordion>
          <FilterAccordion title="Оплата">
            <div className="flex flex-col gap-2 text-xs">
              <p>
                Готівкою або через термінал у магазині, безготівковий
                розрахунок, карткою, розстрочка, оплата частинами, Whitepay
                crypto
              </p>
              <Link href="/" className="text-[#4E3A9F]">
                Дізнатися всі умови
              </Link>
            </div>
          </FilterAccordion>
          <FilterAccordion title="Гарантія та повернення">
            <div className="flex flex-col gap-2 text-xs">
              <p>
                Гарантія від виробника до 2 років до 24 місяців з моменту
                покупки. Гарантійний термін починається з доставки виробу
                клієнту додому. 14 днів з наступного дня після доставки виробу
                додому ви маєте право обміняти або повернути куплений товар.
              </p>
              <Link href="/" className="text-[#4E3A9F]">
                Дізнатися всі умови
              </Link>
            </div>
          </FilterAccordion>
        </div>
      </div>
      {/* <Section title='Переглянуті товари' className='mb-[75px]'>
				<ProductSlider arr={products}></ProductSlider>
			</Section> */}
    </>
  );
};

export default product;
