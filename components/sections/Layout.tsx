import { TLayout } from "@/types";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";
import { Ad } from "../parts/Ad";

export const Layout = ({ children }: TLayout) => {
  return (
    <>
      <Ad />
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};
