import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Trash } from "lucide-react";
import { Counter } from "./Counter";
import { ProductPage } from "./Product";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartModalProps {
  items: CartItem[];
  total: number;
  onClose: () => void;
  onRemoveItem: (itemId: number) => void;
}

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

  useEffect(() => {
    const timers: number[] = [];

    const calculateTotal = () => {
      const newTotal = items.reduce((acc, item) => {
        return acc + item.price * quantities[item.id];
      }, 0);
      setCurrentTotal(newTotal);
    };

    calculateTotal();

    const removeItemIfZero = () => {
      Object.entries(quantities).forEach(([itemId, quantity]) => {
        if (quantity === 0) {
          const timerId = window.setTimeout(() => {
            onRemoveItem(Number(itemId));
          }, 3000);
          timers.push(timerId);
        }
      });
    };

    removeItemIfZero();

    return () => timers.forEach(clearTimeout);
  }, [quantities, items, onRemoveItem]);

  const updateQuantity = (itemId: number, newCount: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newCount,
    }));
  };

  const handleContinueShopping = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Кошик</h2>
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            X
          </Button>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <ProductPage productId={item.id} />
              <div className="flex-1 mx-4">
                <Counter
                  initialCount={quantities[item.id]}
                  price={item.price}
                  onChange={(newCount) => updateQuantity(item.id, newCount)}
                />
              </div>
              <Button
                variant="ghost"
                className="text-red-500 hover:text-red-700"
                onClick={() => onRemoveItem(item.id)}
              >
                <Trash className="h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Всього: {currentTotal} грн.</p>
          </div>
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              className="flex-1 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50"
              onClick={handleContinueShopping}
            >
              Продовжити покупки
            </Button>
            <Button
              variant="ghost"
              className="flex-1 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Оформити замовлення
            </Button>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-sm font-medium mb-3">
            Швидке оформлення замовлення
          </h3>
          <div className="flex space-x-4">
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
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Купити в 1 клік
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
