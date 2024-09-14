import React, { useState, useEffect, useCallback } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Trash, X } from "lucide-react";
import { Counter } from "./Counter";
import { CartModalProps } from "@/types";
import Image from "next/image";

type QuantitiesState = {
  [key: number]: number;
};

export const CartModal = ({
  items,
  total,
  onClose,
  onRemoveItem,
}: CartModalProps) => {
  const [quantities, setQuantities] = useState<QuantitiesState>(
    items.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {} as QuantitiesState)
  );

  const [currentTotal, setCurrentTotal] = useState(total);

  const calculateTotal = useCallback(() => {
    const newTotal = items.reduce((acc, item) => {
      return acc + item.price * quantities[item.id];
    }, 0);
    setCurrentTotal(newTotal);
  }, [items, quantities]);

  useEffect(() => {
    calculateTotal();
  }, [calculateTotal]);

  useEffect(() => {
    const timers: number[] = [];
    Object.entries(quantities).forEach(([itemId, quantity]) => {
      if (quantity === 0) {
        const timerId = window.setTimeout(() => {
          onRemoveItem(Number(itemId));
        }, 3000);
        timers.push(timerId);
      }
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [quantities, onRemoveItem]);

  const updateQuantity = (itemId: number, newCount: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newCount,
    }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg max-w-full md:max-w-2xl w-full sm:p-6 md:p-8 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Кошик</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <X />
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto max-h-[50vh] md:max-h-[60vh]">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-md border border-gray-200"
              >
                <div className="flex items-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={159}
                    height={136}
                    className="object-cover rounded-md"
                  />
                </div>

                <div className="ml-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-medium">{item.name}</p>
                    <Button
                      variant="ghost"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <Trash className="h-5 w-5" />
                    </Button>
                  </div>
                  <p className="text-lg text-[#4E3A9F] font-semibold mt-2">
                    {item.price} грн.
                  </p>
                  <Counter
                    initialCount={quantities[item.id]}
                    price={item.price}
                    onChange={(newCount) => updateQuantity(item.id, newCount)}
                  />
                </div>
              </div>
            ))
          ) : (
            <p>Корзина пуста</p>
          )}
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Всього: {currentTotal} грн.</p>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <button
              className="w-full md:w-1/2 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50"
              onClick={onClose}
            >
              Продовжити покупки
            </button>
            <Button
              variant="ghost"
              className="w-full md:w-1/2 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Оформити замовлення
            </Button>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-sm font-medium mb-3">
            Швидке оформлення замовлення
          </h3>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <Input
              type="text"
              placeholder="Ім'я"
              className="flex-1 py-2 px-4 border border-gray-300 rounded-lg"
            />
            <Input
              type="text"
              placeholder="Введіть свій номер телефону"
              className="flex-1 py-2 px-4 border border-gray-300 rounded-lg"
            />
            <Button
              variant="ghost"
              className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Купити в 1 клік
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
