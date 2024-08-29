import axiosClient from "./axios";
import { TItem, TItems, TCategory, Product } from "@/types";

export const fetchCategories = async (): Promise<TItem[]> => {
  try {
    const response = await axiosClient.get<TItem[]>("/Category");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch categories.");
  }
};

export const fetchCategoryItems = async (
  categoryId: string
): Promise<TItems[]> => {
  try {
    const response = await axiosClient.get<{ products: TItems[] }>(
      `/Category/${categoryId}`
    );
    return response.data.products;
  } catch (error) {
    throw new Error("Failed to fetch category items.");
  }
};

export const fetchCategoryId = async (id: string): Promise<TCategory> => {
  try {
    const response = await axiosClient.get<TCategory>(`/Category/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch category with id ${id}.`);
  }
};

export const getProductById = async (productId: number): Promise<Product> => {
  try {
    const response = await axiosClient.get<Product>(`/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Failed to fetch product.");
  }
};
