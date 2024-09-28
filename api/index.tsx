import { Product, TCategory, TItem, TItems } from "@/types/reduxTypes";
import axiosClient from "./axios";

export const fetchCategories = async (): Promise<TItem[]> => {
  const response = await axiosClient.get<TItem[]>("/category");
  return response.data;
};

export const fetchCategoryItems = async (
  categoryId: string
): Promise<TItems[]> => {
  const response = await axiosClient.get<{ products: TItems[] }>(
    `/category/${categoryId}`
  );
  return response.data.products;
};
export const fetchAllSubCategoryAndProducts = async (
  categoryId: string
): Promise<TItems[]> => {
  const response = await axiosClient.get<{ products: TItems[] }>(
    `/category/${categoryId}`
  );
  let products = response.data.products;

  const subCategoriesResponse = await axiosClient.get<TCategory[]>(
    `/category?parentId=${categoryId}`
  );
  const subCategories = subCategoriesResponse.data;

  for (let subCategory of subCategories) {
    const subCategoryProductsResponse = await axiosClient.get<{
      products: TItems[];
    }>(`/category/${subCategory.id}`);
    products = [...products, ...subCategoryProductsResponse.data.products];
  }

  return products;
};

export const fetchAllSubCategoryAndProducts = async (
  categoryId: string,
  page: string | number = 1,
  limit: string | number = 10
): Promise<TItems[]> => {
  const response = await axiosClient.get<{ products: TItems[] }>(
    `/category/${categoryId}?page=${page}&limit=${limit}`
  );
  let products = response.data.products;

  const subCategoriesResponse = await axiosClient.get<TCategory[]>(
    `/category?parentId=${categoryId}`
  );
  const subCategories = subCategoriesResponse.data;

  for (let subCategory of subCategories) {
    const subCategoryProductsResponse = await axiosClient.get<{
      products: TItems[];
    }>(`/category/${subCategory.id}?page=${page}&limit=${limit}`);
    products = [...products, ...subCategoryProductsResponse.data.products];
  }

  return products;
};

export const fetchCategoryId = async (id: string): Promise<TCategory> => {
  const response = await axiosClient.get<TCategory>(`/category/${id}`);
  return response.data;
};

export const getProductById = async (offerId: string): Promise<Product> => {
  const response = await axiosClient.get<Product>(`/product/${offerId}`);
  return response.data;
};
