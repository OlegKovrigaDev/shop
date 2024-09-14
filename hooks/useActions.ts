import { fetchCategories } from "@/lib/slices/categorySlice";
import { fetchProductById } from "@/lib/slices/productSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

const rootActions = { fetchCategories, fetchProductById };

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
