import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { ShoppingCart } from "lucide-react";
import "react-responsive-modal/styles.css";
import { CartModal } from "./CartModal";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export const ModalPage = () => {
  const [open, setOpen] = useState(false);

  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 2,
      imageUrl: "/path/to/image1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      quantity: 1,
      imageUrl: "/path/to/image2.jpg",
    },
  ];

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button onClick={onOpenModal} className="flex flex-col items-center">
        <ShoppingCart />
        <span className="text-xs">Кошик</span>
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <CartModal items={cartItems} total={total} />
      </Modal>
    </div>
  );
};
