import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AllMainAndSubCategories,
  AllMainCategories,
  fetchCategoryId,
  fetchCategoryItems,
  fetchSubcategories,
} from "@/api";
import {
  TCategory,
  TCategoryWithSubcategories,
  TItems,
} from "@/types/reduxTypes";
import { RootState } from "../store";

interface CategoriesState {
  categories: TCategoryWithSubcategories[];
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

const setLoading = (state: CategoriesState) => {
  state.loading = true;
  state.error = null;
};

const setError = (
  state: CategoriesState,
  action: PayloadAction<undefined, string, any, Error>
) => {
  state.loading = false;
  state.error = action.error.message || "An error occurred.";
};

export const mainCategories = createAsyncThunk<
  TCategoryWithSubcategories[],
  void,
  { state: RootState }
>("categories/fetchMainCategories", async (_, { getState }) => {
  const { categories } = getState().categories;

  if (categories.length > 0) {
    return categories;
  }

  const response = await AllMainCategories();
  return response;
});

export const allMainAndSubCategories = createAsyncThunk<
  TCategoryWithSubcategories[],
  void
>("categories/fetchAllMainAndSubCategories", async () => {
  const response = await AllMainAndSubCategories();
  return response;
});

export const categoryById = createAsyncThunk<
  TCategoryWithSubcategories,
  string
>("categories/fetchCategoryById", async (id) => {
  const response = await fetchCategoryId(id);
  return {
    ...response,
    subcategories: response.subcategories || [],
  };
});

export const categoryItemsById = createAsyncThunk<TItems[], string>(
  "categories/fetchCategoryItems",
  async (categoryId) => {
    const response = await fetchCategoryItems(categoryId);
    if (response.length === 0 && categoryId) {
      const subcategories = await fetchSubcategories(categoryId);
      const items = await Promise.all(
        subcategories.map((subcategory) => fetchCategoryItems(subcategory.id))
      );
      return items.flat();
    }
    return response;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(mainCategories.pending, setLoading)
      .addCase(
        mainCategories.fulfilled,
        (state, action: PayloadAction<TCategoryWithSubcategories[]>) => {
          state.categories = action.payload;
          state.loading = false;
        }
      )

      .addCase(allMainAndSubCategories.pending, setLoading)
      .addCase(
        allMainAndSubCategories.fulfilled,
        (state, action: PayloadAction<TCategoryWithSubcategories[]>) => {
          state.categories = action.payload;
          state.loading = false;
        }
      )

      .addCase(categoryById.pending, setLoading)
      .addCase(
        categoryById.fulfilled,
        (state, action: PayloadAction<TCategoryWithSubcategories>) => {
          state.categoryDetails = action.payload;
          state.loading = false;
        }
      )

      .addCase(categoryItemsById.pending, setLoading)
      .addCase(
        categoryItemsById.fulfilled,
        (state, action: PayloadAction<TItems[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      );
  },
});

export default categorySlice.reducer;
