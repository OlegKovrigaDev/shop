import { TMenu } from "@/types";
import { LayoutDashboard, MenuIcon } from "lucide-react";
import { FC } from "react";
import { Logo } from "../../parts/Logo";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";

export const Menu: FC<TMenu> = ({
  children,
  title,
  className,
  classNameText,
  classNameIcon,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`flex-col h-[48px] md:w-[71px] hover:bg-transparent hover:text-white flex ${className}`}
        >
          <MenuIcon className="block md:hidden" />
          <LayoutDashboard className={`hidden md:block ${classNameIcon}`} />
          <span
            className={`hidden md:flex-wrap md:flex text-xs font-semibold ${classNameText}`}
          >
            {title}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-screen">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
