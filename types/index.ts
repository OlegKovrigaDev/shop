import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { TItem, TItems } from "./reduxTypes";

export type TProductCard = {
  id?: string;
  img?: string;
  title?: string;
  oldPrice?: string;
  newPrice?: string;
  hit?: boolean;
  discont?: boolean;
  newProduct?: boolean;
  Articul?: string;
  offerId?: string;
};

export type TProductSlider = {
  arr: TProductCard[];
};

export type TTitle = {
  children: ReactNode;
};

export type TSection = {
  title: string;
  children?: ReactNode;
  className?: string;
};

export type TLayout = {
  children: ReactNode;
};

export type TCrumbs = {
  categories?: TCategoriesItem;
  category?: string;
  subcategories?: TCategoriesItem[];
  title?: string;
  items?: TItems[];
  isProductPage: boolean;
};

type TCategoriesItem = {
  id: string;
  category: {
    name?: string;
  };
};

export type TSideBar = {
  items: TItem[];
};

export type TCartPopup = {
  text: string;
};

export type THoverMenu = {
  icon: LucideIcon;
  link: string;
  text: string;
  children: ReactNode;
};

export type TMenu = {
  children?: ReactNode;
  title?: string;
  className?: string;
  classNameText?: string;
  classNameIcon?: string;
};

export type TItemLang = {
  value: string;
  text: string;
};
export interface ISelectLang {
  placeholder?: string;
  items: TItemLang[];
}

export type CategoryPageProps = {
  params: { id: string };
  searchParams: { categoryId: string };
};

export type ProductPageProps = {
  params: { id: string };
  searchParams: { categoryId: string };
};

export type TopListProps = {
  className?: string;
};

export type MenuProps = {
  children: ReactNode;
  openSidebar?: () => void;
};

export interface PageLayoutProps {
  className?: string;
  loading: boolean;
  error: null;
  left: ReactNode;
  right: ReactNode;
}
