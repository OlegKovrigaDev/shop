import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

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
  subcategories?: TCategoriesItem[];
  name?: string;
  category: {
    name?: string | undefined;
    id?: string | undefined;
    parentId?: string | null | undefined;
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

export type CategoryPageProps = {
  params: {
    id: TCategory;
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
  Articul: string;
  RetailPrice: string;
  RetailPriceWithDiscount: string;
  "Відображення на сайті": string;
  ModelName: string;
  GoodNameUA: string;
  Уцінка: string;
  "Одиниця виміру": string;
  Знижка: string;
  "Приналежність до категорії": string;
  "Одиниця виміру терміну гарантії": string;
  "Розділ синхронізації повністю": string;
  "Габарит.розміри.Висота(см)(сайт)": string;
  "Габарит.розміри.Довжина(см)(сайт)": string;
  "Габарит.розміри.Ширина(см)(сайт)": string;
  "Додатково ліжка(сайт ліжка)": string;
  "Матеріал ліжка(сайт ліжка)": string;
  "Ніша для білизни(сайт ліжка)": string;
  "Основа під матрац(сайт ліжка)": string;
  "Підйомний механізм(сайт ліжка)": string;
  "Роз.спал.місц.ширина(см)(сайт)": string;
  "Розм.спал.місц.Довжина(см)(сайт)": string;
  "Тип ліжка(сайт ліжка)": string;
  "Опис текст(сайт)": string;
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

export type TProduct = {
  offerId: string;
  params: ProductParams;
};

export type TItem = {
  id: string;
  name: string;
  parentId: string;
  category: string;
};

export type TItems = {
  offerId: string;
  params: ProductParams;
};

export type TCategory = {
  id: string;
  name: string;
  parentId: string | null;
  subcategoryIds: TCategory[];
  items: TItems[];
};

export type Product = {
  offerId: string;
  params: {
    Articul: string;
    RetailPrice: string;
    RetailPriceWithDiscount: string;
    "Відображення на сайті": string;
    ModelName: string;
    GoodNameUA: string;
    Уцінка: string;
    "Одиниця виміру": string;
    Знижка: string;
    "Приналежність до категорії": string;
    "Одиниця виміру терміну гарантії": string;
    "Розділ синхронізації повністю": string;
    "Габарит.розміри.Висота(см)(сайт)": string;
    "Габарит.розміри.Довжина(см)(сайт)": string;
    "Габарит.розміри.Ширина(см)(сайт)": string;
    "Додатково ліжка(сайт ліжка)": string;
    "Матеріал ліжка(сайт ліжка)": string;
    "Ніша для білизни(сайт ліжка)": string;
    "Основа під матрац(сайт ліжка)": string;
    "Підйомний механізм(сайт ліжка)": string;
    "Роз.спал.місц.ширина(см)(сайт)": string;
    "Розм.спал.місц.Довжина(см)(сайт)": string;
    "Тип ліжка(сайт ліжка)": string;
    "Опис текст(сайт)": string;
  };
};
