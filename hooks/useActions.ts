import {
  allCategories,
  categoryById,
  categoryItemsById,
  fetchMainCategories,
} from "@/lib/slices/categorySlice";
import { getProductByOfferId } from "@/lib/slices/productSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

const rootActions = {
  allCategories,
  categoryById,
  categoryItemsById,
  getProductByOfferId,
  fetchMainCategories,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
