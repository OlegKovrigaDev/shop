import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "@/api/axios";
import { TProduct } from "@/types";

interface ProductState {
  product: TProduct | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: null,
  loading: false,
  error: null,
};

// Fetch product by offerId
export const fetchProductByOfferId = createAsyncThunk<TProduct, string>(
  "product/fetchProductByOfferId",
  async (offerId) => {
    const response = await axios.get<TProduct>(`/product/${offerId}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductByOfferId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProductByOfferId.fulfilled,
        (state, action: PayloadAction<TProduct>) => {
          state.product = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProductByOfferId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching product";
      });
  },
});

export default productSlice.reducer;
