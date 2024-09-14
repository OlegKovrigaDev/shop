import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import productSlice from "./slices/productSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      categories: categorySlice,
      product: productSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
