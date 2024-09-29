import { useState } from "react";
import { Button } from "../ui/button";

interface CounterProps {
  initialCount: number;
  price: number;
  onChange: (newCount: number, newTotalPrice: number) => void;
}

export const Counter = ({ initialCount, price, onChange }: CounterProps) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    const newCount = count + 1;
    const newTotalPrice = newCount * price;
    setCount(newCount);
    onChange(newCount, newTotalPrice);
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      const newTotalPrice = newCount * price;
      setCount(newCount);
      onChange(newCount, newTotalPrice);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        className="w-8 h-8 flex items-center justify-center text-lg text-gray-700 border border-gray-300 rounded"
        onClick={decrement}
      >
        -
      </Button>
      <span className="mx-2 text-lg">{count}</span>
      <Button
        variant="ghost"
        className="w-8 h-8 flex items-center justify-center text-lg text-gray-700 border border-gray-300 rounded"
        onClick={increment}
      >
        +
      </Button>
    </div>
  );
};
