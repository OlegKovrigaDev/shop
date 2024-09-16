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

export const getProductByOfferId = createAsyncThunk<Product, string>(
  "product/fetchProductByOfferId",
  async (offerId) => {
    return await getProductById(offerId);
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
      .addCase(getProductByOfferId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching product";
      });
  },
});

export const { resetProduct } = productSlice.actions;
export default productSlice.reducer;
