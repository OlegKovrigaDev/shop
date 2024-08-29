import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { ShoppingCart } from "lucide-react";
import "react-responsive-modal/styles.css";
import { CartModal } from "./CartModal";
import { cartItems } from "@/constants";

export const ModalPage = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(cartItems);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleRemoveItem = (itemId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <button onClick={onOpenModal} className="flex flex-col items-center">
        <ShoppingCart />
        <span className="md:block hidden text-xs">Кошик</span>
      </button>
      <Modal open={open} onClose={onCloseModal} animationDuration={0} center>
        <CartModal
          items={items}
          total={total}
          onClose={onCloseModal}
          onRemoveItem={handleRemoveItem}
        />
      </Modal>
    </div>
  );
};
