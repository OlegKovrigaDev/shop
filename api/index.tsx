import axiosClient from "./axios";
import { TItem, TItems, TCategory } from "@/types";

// category
export const fetchCategories = async (): Promise<TItem[]> => {
  try {
    const response = await axiosClient.get<TItem[]>("/Category");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch categories.");
  }
};

//CategoryItems

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
