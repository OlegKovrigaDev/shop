import axios from "./axios";
import { TItem, TItems, TCategory, Product } from "@/types";

export const fetchCategories = async (): Promise<TItem[]> => {
  try {
    const response = await axios.get<TItem[]>("/Category");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch categories.");
  }
};

export const fetchCategoryItems = async (
  categoryId: string
): Promise<TItems[]> => {
  try {
    const response = await axios.get<{ products: TItems[] }>(
      `/Category/${categoryId}`
    );
    return response.data.products;
  } catch (error) {
    throw new Error("Failed to fetch category items.");
  }
};

export const fetchCategoryId = async (id: string): Promise<TCategory> => {
  try {
    const response = await axios.get<TCategory>(`/Category/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch category with id ${id}.`);
  }
};

export const getProductById = async (offerId: string): Promise<Product> => {
  try {
    const product = await axios.get<Product>(`/product/${offerId}`);
    return product.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Failed to fetch product.");
  }
};

export const getRandomProduct = async (): Promise<Product> => {
  try {
    const page = 1;
    const limit = 10;

    const response = await axios.get<{ products: Product[] }>(
      `/product?page=${page}&limit=${limit}`
    );

    if (response.data.products.length === 0) {
      throw new Error("No products found.");
    }

    const randomIndex = Math.floor(
      Math.random() * response.data.products.length
    );
    return response.data.products[randomIndex];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products.");
  }
};
