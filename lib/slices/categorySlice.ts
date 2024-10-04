import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AllMainAndSubCategories,
  fetchCategoryId,
  fetchCategoryItems,
  fetchSubcategories,
} from "@/api";
import {
  TCategory,
  TCategoryWithSubcategories,
  TItems,
} from "@/types/reduxTypes";

interface CategoriesState {
  categories: TCategoryWithSubcategories[];
  categoryDetails: TCategory | null;
  items: TItems[];
  subcategoryItems: TItems[];
  subcategories: TCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  categoryDetails: null,
  items: [],
  subcategoryItems: [],
  subcategories: [],
  loading: false,
  error: null,
};

export const allMainAndSubCategories = createAsyncThunk<
  TCategoryWithSubcategories[],
  void
>("categories/fetchAllMainAndSubCategories", async () => {
  return await AllMainAndSubCategories();
});

export const categoryById = createAsyncThunk<TCategory, string>(
  "categories/fetchCategoryById",
  async (id) => {
    try {
      const response = await fetchCategoryId(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const categoryItemsById = createAsyncThunk<TItems[], string>(
  "categories/fetchCategoryItems",
  async (categoryId) => {
    try {
      const response = await fetchCategoryItems(categoryId);

      if (response.length === 0 && categoryId) {
        const subcategories = await fetchSubcategories(categoryId);

        const items = await Promise.all(
          subcategories.map((subcategory) => fetchCategoryItems(subcategory.id))
        );

        return items.flat();
      }

      return response;
    } catch (error) {
      console.error("Error fetching category items:", error);
      throw error;
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(allMainAndSubCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        allMainAndSubCategories.fulfilled,
        (state, action: PayloadAction<TCategoryWithSubcategories[]>) => {
          state.categories = action.payload;
          state.loading = false;
        }
      )
      .addCase(allMainAndSubCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching categories.";
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
        state.error = action.error.message ?? "Error fetching category by ID.";
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
        state.error = action.error.message ?? "Error fetching category items.";
      });
  },
});

export default categorySlice.reducer;
