import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ISelectLang } from "@/types";

export const SelectLang = ({ placeholder, items }: ISelectLang) => {
  return (
    <Select defaultValue={items[0].value}>
      <SelectTrigger className="w-auto border-none font-bold text-lg md:text-2xl bg-transparent">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map(({ value, text }, i) => (
            <SelectItem key={i} value={value}>
              {text}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
