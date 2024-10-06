import {
  allMainAndSubCategories,
  categoryById,
  categoryItemsById,
  mainCategories,
} from "@/lib/slices/categorySlice";
import { getProductByOfferId } from "@/lib/slices/productSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

const rootActions = {
  categoryById,
  categoryItemsById,
  getProductByOfferId,
  allMainAndSubCategories,
  mainCategories,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
