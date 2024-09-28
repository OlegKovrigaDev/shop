"use client";
import { useActions } from "@/hooks";
import { RootState } from "@/lib/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const testpage = () => {
  const {
    allCategories,
    categoryById,
    categoryItemsById,
    getProductByOfferId,
    fetchMainCategories,
  } = useActions();

  // Get state from Redux
  const { categories, categoryDetails, items, loading, error } = useSelector(
    (state: RootState) => state.categories
  );
  const { product } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    // Dispatch actions to test Redux
    fetchMainCategories();
    categoryById("2"); // Fetch a category by ID
    categoryItemsById("3"); // Fetch items for a category
    getProductByOfferId("22693"); // Fetch a product by offer ID
  }, [allCategories, categoryById, categoryItemsById, getProductByOfferId]);

  // Log the Redux state in the console for verification
  console.log("Categories:", categories);
  console.log("Category Details:", categoryDetails);
  console.log("Items:", items);
  console.log("Product:", product);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Categories:</h1>
      <pre>{JSON.stringify(categories, null, 2)}</pre>

      <h1>Category Details:</h1>
      {/* <pre>{JSON.stringify(categoryDetails, null, 2)}</pre> */}

      <h1>Category Items:</h1>
      {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}

      <h1>Product:</h1>
      {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
    </div>
  );
};

export default testpage;
