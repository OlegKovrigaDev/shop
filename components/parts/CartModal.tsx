import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Trash } from "lucide-react";

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
}

export const CartModal = ({ items, total }: CartModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
        <h2 className="text-lg font-semibold mb-6">Кошик</h2>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div className="flex-1 mx-4">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-sm text-red-500">{item.price} грн.</p>
                <div className="flex items-center mt-2">
                  <Button className="px-2 py-1 text-gray-500 border border-gray-300 rounded">
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="px-2 py-1 text-gray-500 border border-gray-300 rounded">
                    +
                  </button>
                </div>
              </div>
              <Button className="text-red-500 hover:text-red-700">
                <Trash className="h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Всього: {total} грн.</p>
          </div>
          <div className="flex space-x-4">
            <Button className="flex-1 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
              Продовжити покупки
            </Button>
            <Button className="flex-1 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
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
            <Button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Купити в 1 клік
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
