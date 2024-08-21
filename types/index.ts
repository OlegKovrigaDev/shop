import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type TProductCard = {
  id?: string;
  img?: string;
  title: string;
  oldPrice?: string;
  newPrice?: string;
  hit?: boolean;
  discont?: boolean;
  newProduct?: boolean;
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

export type TItems = {
  name: string;
  id: number;
  offerId: string;
  type: string;
  available: boolean;
  currencyId: string;
  categoryId: number;
  params: {
    GoodName: string;
    RetailPrice: string;
    RetailPriceWithDiscount: string;
    [other: string]: string;
  };
};

export type TItem = {
  id: string;
  name: string;
};
export type TCategory = {
  id: string;
  category: {
    name: string;
  };
};

export type TCrumbs = {
  categories: TCategoriesItem;
  items: TItems[];
};

type TCategoriesItem = {
  id: string | null;
  category: {
    name: string;
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
  children: ReactNode;
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
  params: {
    id: string;
  };
};
