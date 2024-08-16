import { TLayout } from "@/types";
import { FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";
import Add from "../parts/Add";

export const Layout: FC<TLayout> = ({ children }) => {
  return (
    <>
      <Add />
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};
