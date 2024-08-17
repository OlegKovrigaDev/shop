import { TLayout } from "@/types";
import { FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";
import { Ad } from "../parts/Ad";

export const Layout: FC<TLayout> = ({ children }) => {
  return (
    <>
      <Ad />
      <Header />
      <main className="container">{children}</main>
      <Footer />
      
    </>
  );
};
