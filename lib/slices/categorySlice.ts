import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TItem, TCategory, TItems } from "@/types";
import {
  fetchCategories,
  fetchCategoryId,
  fetchCategoryItems,
  MainCategories,
} from "@/api";

interface CategoriesState {
  categories: TItem[]; // Все категории
  categoryDetails: TCategory | null; // Детали конкретной категории
  items: TItems[]; // Товары выбранной категории
  subcategoryItems: TItems[]; // Товары выбранной подкатегории
  loading: boolean; // Статус загрузки
  error: string | null; // Ошибки
}

const initialState: CategoriesState = {
  categories: [],
  categoryDetails: null,
  items: [],
  subcategoryItems: [], // Инициализация для подкатегории
  loading: false,
  error: null,
};

// Получение всех категорий
export const allCategories = createAsyncThunk<TItem[], void>(
  "categories/fetchCategories",
  async () => {
    return await fetchCategories();
  }
);

// Получение категории по ID
export const categoryById = createAsyncThunk<TCategory, string>(
  "categories/fetchCategoryById",
  async (id) => {
    return await fetchCategoryId(id);
  }
);

// Получение товаров по категории ID
export const categoryItemsById = createAsyncThunk<TItems[], string>(
  "categories/fetchCategoryItems",
  async (categoryId) => {
    return await fetchCategoryItems(categoryId);
  }
);

export const subcategoryItemsById = createAsyncThunk<TItems[], string>(
  "categories/fetchSubcategoryItems",
  async (subcategoryId) => {
    return await fetchCategoryItems(subcategoryId); // Используем тот же запрос
  }
);

export const fetchMainCategories = createAsyncThunk<TItem[], void>(
  "categories/fetchMainCategories",
  async () => {
    return await MainCategories();
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Загрузка всех категорий
      .addCase(allCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        allCategories.fulfilled,
        (state, action: PayloadAction<TItem[]>) => {
          state.categories = action.payload;
          state.loading = false;
        }
      )
      .addCase(allCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching categories";
      })

      // Загрузка категории по ID
      .addCase(categoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        categoryById.fulfilled,
        (state, action: PayloadAction<TCategory>) => {
          state.categoryDetails = action.payload;
          state.loading = false;
        }
      )
      .addCase(categoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? `Error fetching category by id`;
      })

      // Загрузка товаров для категории
      .addCase(categoryItemsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        categoryItemsById.fulfilled,
        (state, action: PayloadAction<TItems[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(categoryItemsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? `Error fetching category items`;
      })
      .addCase(fetchMainCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchMainCategories.fulfilled,
        (state, action: PayloadAction<TItem[]>) => {
          state.categories = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchMainCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching main categories";
      })
      // Загрузка товаров для подкатегории
      .addCase(subcategoryItemsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        subcategoryItemsById.fulfilled,
        (state, action: PayloadAction<TItems[]>) => {
          state.subcategoryItems = action.payload;
          state.loading = false;
        }
      )
      .addCase(subcategoryItemsById.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? `Error fetching subcategory items`;
      });
  },
});

export default categorySlice.reducer;
