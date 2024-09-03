import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PropsWithChildren } from "react";

interface FilterAccordionProps extends PropsWithChildren {
  title: string;
  className?: string;
  onToggle?: () => void;
}

export const FilterAccordion = ({
  title,
  className,
  children,
  onToggle,
}: FilterAccordionProps) => {
  return (
    <div className="bg-white w-full p-4 rounded-[4px]" onClick={onToggle}>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-transparent">
          <AccordionTrigger className={`bg-[#C6C6C7] px-4 py-2 ${className}`}>
            {title}
          </AccordionTrigger>
          <AccordionContent className="flex mt-6 pb-0">
            {children}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
