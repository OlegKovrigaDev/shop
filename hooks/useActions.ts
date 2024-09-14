import { fetchCategories } from "@/lib/slices/categorySlice";
import { fetchProductByOfferId } from "@/lib/slices/productSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

const rootActions = { fetchCategories, fetchProductByOfferId };

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
