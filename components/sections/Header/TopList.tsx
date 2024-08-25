"use client";
import { Phone, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { TopListProps } from "@/types";
import { ModalPage } from "@/components/parts/ModalPage";

export const TopList = ({ className }: TopListProps) => {
  const [openModal, setOpenModal] = useState(false);

  const openCartModal = () => {
    setOpenModal(true);
  };

  const closeCartModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={className}>
      <ul className="flex items-center gap-5">
        <li className="flex items-center">
          <Link
            href="/contacts"
            className="w-[71px] flex flex-col items-center"
          >
            <Phone />
            <span className="text-xs">Контакти</span>
          </Link>
        </li>

        <li className="flex items-center">
          <button
            onClick={openCartModal}
            className="flex flex-col items-center"
          >
            <ShoppingCart />
            <span className="text-xs">Кошик</span>
          </button>
        </li>
      </ul>

      <ModalPage open={openModal} setOpen={setOpenModal} />
    </div>
  );
};
