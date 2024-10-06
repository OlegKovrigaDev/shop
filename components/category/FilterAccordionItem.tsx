import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FilterAccordion } from "@/components/parts/FilterAccordion";

export const FilterAccordionComponent = () => {
  const filters = [
    { id: 1, type: "Односпальні", count: 24 },
    { id: 2, type: "Односпальні", count: 24 },
    { id: 3, type: "Односпальні", count: 24 },
    { id: 4, type: "Односпальні", count: 24 },
    { id: 5, type: "Односпальні", count: 24 },
  ];

  return (
    <div className="flex flex-col gap-2 max-w-[280px] sm:min-w-[280px]">
      {[1, 2, 3, 4, 5, 6, 7].map((id) => (
        <FilterAccordion key={id} title="Розмір спального місця">
          <div className="flex flex-col gap-2 text-xs w-full">
            {filters.map(({ id, type, count }) => (
              <div key={id} className="flex justify-between text-[16px]">
                <span className="flex gap-2 items-center">
                  <Checkbox id={`variant-${id}`} className="border-2 rounded" />
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
  );
};
