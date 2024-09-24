import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchAllSubCategoryAndProducts, fetchCategories, fetchCategoryId, fetchCategoryItems } from "@/api";
import { TCategory, TItem, TItems } from "@/types/reduxTypes";

interface CategoriesState {
  categories: TItem[];
  categoryDetails: TCategory | null;
  items: TItems[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  categoryDetails: null,
  items: [],
  loading: false,
  error: null,
};

export const allCategories = createAsyncThunk<TItem[], void>(
  "categories/fetchCategories",
  async () => {
    return await fetchCategories();
  }
);

export const categoryById = createAsyncThunk<TCategory, string>(
  "categories/fetchCategoryById",
  async (id) => {
    return await fetchCategoryId(id);
  }
);

export const categoryItemsById = createAsyncThunk<TItems[], string>(
  "categories/fetchCategoryItems",
  async (categoryId) => {
    return await fetchAllSubCategoryAndProducts(categoryId);
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default categorySlice.reducer;
