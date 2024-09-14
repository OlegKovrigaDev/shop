import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosClient from "@/api/axios";
import { TItem } from "@/types";

interface ProductState {
  currentProduct: TItem | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  currentProduct: null,
  loading: false,
  error: null,
};

export const fetchProductById = createAsyncThunk<TItem, string>(
  "product/fetchProductById",
  async (offerId) => {
    const response = await axiosClient.get<TItem>(`/product/${offerId}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProductById.fulfilled,
      (state, action: PayloadAction<TItem>) => {
        state.currentProduct = action.payload;
      }
    );
  },
});

export default productSlice.reducer;
