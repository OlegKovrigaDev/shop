import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types";
import { getProductById } from "@/api";

interface ProductState {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: null,
  loading: false,
  error: null,
};

// Async thunk to fetch a product by its offerId
export const getProductByOfferId = createAsyncThunk<Product, string>(
  "product/fetchProductByOfferId",
  async (offerId, { rejectWithValue }) => {
    try {
      if (!offerId) {
        throw new Error("Offer ID is required.");
      }
      const response = await getProductById(offerId);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch product.");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProduct: (state) => {
      state.product = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductByOfferId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getProductByOfferId.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.product = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        getProductByOfferId.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload || "Error fetching product";
        }
      );
  },
});

export const { resetProduct } = productSlice.actions;
export default productSlice.reducer;
