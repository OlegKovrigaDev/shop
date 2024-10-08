export type TItem = {
  id: string;
  name: string;
  parentId: string;
  category: string;
};

export type TItems = {
  offerId: string;
  categoryId: string;
  params: ProductParams;
  id: string;
  title: string;
  price: number;
};

export type TCategory = {
  category?: string;
  id: string;
  name: string;
  parentId: string | null;
  items?: TItems[];
  products?: TItems[];
  subcategoryId?: number | null;
  subcategories?: TCategory[];
};

export type TProduct = {
  offerId: string;
  params: ProductParams;
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

export interface CartItem {
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

export interface TCategoryWithSubcategories {
  id: string;
  name: string;
  parentId: string | null;
  subcategories: TCategory[];
  parentCategory?: TCategory; 
}
