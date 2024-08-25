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
    <div className="flex items-center">
      <Button
        variant="ghost"
        className="px-2 py-1 text-gray-500 border border-gray-300 rounded"
        onClick={decrement}
      >
        -
      </Button>
      <span className="mx-2">{count}</span>
      <Button
        variant="ghost"
        className="px-2 py-1 text-gray-500 border border-gray-300 rounded"
        onClick={increment}
      >
        +
      </Button>
    </div>
  );
};
