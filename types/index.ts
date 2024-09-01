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
  Articul: string;
  offerId: string;
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
  _id: number;
  offerId: string;
  available: boolean;
  categoryId: string;
  createdAt: string;
  currencyId: string;
  params: ProductParams;
};

export type TItem = {
  id: string;
  name: string;
};
export type TCategory = {
  id: string;
  items: TItems[];
  category: {
    name: string;
  };
};

export type TCrumbs = {
  categories: TCategoriesItem;
  category: string;
  title: string;
  items: TItems[];
  isProductPage: boolean;
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
  params: {
    id: string;
  };
};

export type TopListProps = {
  className?: string;
};

export type MenuProps = {
  children: ReactNode;
  openSidebar?: () => void;
};

export type ProductParams = {
  Country: string;
  Articul: string;
  RetailPrice: string;
  RetailPriceWithDiscount: string;
  Категорія: string;
  "Кількість на складі": string;
  "Відображення на сайті": string;
  FashionName: string;
  Уцінка: string;
  "Одиниця виміру": string;
  Знижка: string;
  "Приналежність до категорії": string;
  "Одиниця виміру терміну гарантії": string;
  "Розділ синхронізації повністю": string;
  "Габарит.розміри.Висота(см)(сайт)": string;
  "Габарит.розміри.Довжина(см)(сайт)": string;
  "Габарит.розміри.Ширина(см)(сайт)": string;
  "Роз.спал.місц.ширина(см)(сайт)": string;
  "Розм.спал.місц.Довжина(см)(сайт)": string;
};

export type Product = {
  _id: string;
  offerId: string;
  available: boolean;
  categoryId: string;
  createdAt: string;
  currencyId: string;
  params: ProductParams;
  type: string;
  updatedAt: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export type CartModalProps = {
  items: CartItem[];
  total: number;
  onClose: () => void;
  onRemoveItem: (itemId: number) => void;
};
