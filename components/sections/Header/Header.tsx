"use client";
import { Logo } from "../../parts/Logo";
import { SideBar } from "../Hero/SideBar";
import { Menu } from "./Menu";
import { SearchBar } from "./SearchBar";
import { SelectLang } from "./SelectLang";
import { TopList } from "./TopList";

export const Header = () => {
  return (
    <header className="bg-[#D81C1B] text-white sticky top-0 z-10">
      <div className="container py-6 flex items-center gap-7">
        <Logo />
        <SelectLang
          items={[
            { value: "ua", text: "UA" },
            { value: "ru", text: "RU" },
          ]}
        />
        <Menu>
          <SideBar />
        </Menu>
        <SearchBar />
        <TopList />
      </div>
    </header>
  );
};
