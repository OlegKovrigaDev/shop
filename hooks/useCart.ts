import { getProductById } from "@/api";
import { ProductParams } from "@/types";
import { useState } from "react";

type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
  params: ProductParams;
};

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = async (productId: number) => {
    try {
      const product = await getProductById(productId);

      const newCartItem: CartItem = {
        id: product._id,
        name: product.name,
        quantity: 1,
        price: product.price,
        imageUrl: product.params.FashionName,
        params: product.params,
      };

      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product._id);

        if (existingItem) {
          return prevItems.map((item) =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prevItems, newCartItem];
        }
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return {
    cartItems,
    addToCart,
  };
};

// import { useCart } from "./useCart"; // Импортируйте хук useCart

// const ProductPage = ({ productId }) => {
//   const { addToCart, cartItems } = useCart();

//   const handleAddToCart = () => {
//     addToCart(productId);
//   };

//   return (
//     <div>
//       <h1>Product Page</h1>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//       {/* Остальная логика и рендеринг */}
//     </div>
//   );
// };