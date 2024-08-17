import { TMenu } from "@/types";
import { LayoutDashboard } from "lucide-react";
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
import { SideBar } from "../Hero/SideBar";

export const Menu: FC<TMenu> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="flex flex-col w-[71px] h-[48px] hover:bg-transparent hover:text-white"
        >
          <LayoutDashboard />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-screen">
        <SheetHeader>
          <SheetTitle>
            <Logo />
            <SideBar />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
