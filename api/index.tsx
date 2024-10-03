import {
  Product,
  TCategory,
  TCategoryWithSubcategories,
  TItems,
} from "@/types/reduxTypes";
import axiosClient from "./axios";

export const AllMainAndSubCategories = async (): Promise<
  TCategoryWithSubcategories[]
> => {
  try {
    const response = await axiosClient.get<TCategory[]>("/category");
    const mainCategories = response.data.filter(
      (category) =>
        category.parentId === null || category.parentId === undefined
    );

    const categoriesWithSubcategories = await Promise.all(
      mainCategories.map(async (category) => {
        const subcategoriesResponse = await axiosClient.get<TCategory[]>(
          `/category/sub/${category.id}`
        );
        const subcategories = subcategoriesResponse.data;

        return { ...category, subcategories };
      })
    );

    return categoriesWithSubcategories;
  } catch (error) {
    console.error("Ошибка при получении категорий и подкатегорий:", error);
    return [];
  }
};

export const fetchCategoryItems = async (
  categoryId: string
): Promise<TItems[]> => {
  const response = await axiosClient.get<{ products: TItems[] }>(
    `/category/${categoryId}`
  );

  return response.data.products;
};

export const fetchCategoryId = async (id: string): Promise<TCategory> => {
  const { data } = await axiosClient.get<TCategory>(`/category/${id}`);
  return data;
};
export const getProductById = async (offerId: string): Promise<Product> => {
  const { data } = await axiosClient.get<Product>(`/product/${offerId}`);
  return data;
};
export const fetchSubcategories = async (
  categoryId: string
): Promise<TCategory[]> => {
  const { data } = await axiosClient.get<TCategory[]>(
    `/category/sub/${categoryId}`
  );
  return data;
};
