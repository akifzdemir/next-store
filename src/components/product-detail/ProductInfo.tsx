"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import type { ProductModel } from "@/models";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cartSlice";
import Button from "@/components/ui/Button";

interface ProductInfoProps {
  product: ProductModel;
}

const colors = [
  { name: "White", value: "bg-gray-100" },
  { name: "Lavender", value: "bg-purple-200" },
  { name: "Sage Green", value: "bg-green-200" },
  { name: "Charcoal", value: "bg-gray-700" },
];

const sizes = ["Small", "Medium", "Large"];

export default function ProductInfo({ product }: ProductInfoProps) {
  const dispatch = useAppDispatch();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        product,
        quantity,
        selectedColor: colors[selectedColor].name,
        selectedSize: sizes[selectedSize],
      })
    );
    setQuantity(1);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl lg:text-4xl font-black tracking-tighter text-gray-900">
          {product.title}
        </h1>
        <p className="text-2xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <p className="text-base font-normal leading-relaxed text-gray-500">
        {product.description}
      </p>

      <hr className="border-gray-200" />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold text-gray-900">
            Color:{" "}
            <span className="font-medium text-gray-500">
              {colors[selectedColor].name}
            </span>
          </p>
          <div className="flex items-center gap-3">
            {colors.map((color, index) => (
              <Button
                key={color.name}
                onClick={() => setSelectedColor(index)}
                aria-label={`Select color ${color.name}`}
                variant="ghost"
                size="icon"
                className={`size-8 rounded-full transition-all ${
                  color.value
                } hover:bg-transparent ${
                  selectedColor === index
                    ? "ring-2 ring-offset-2 ring-blue-500 ring-offset-white"
                    : "hover:ring-2 hover:ring-offset-2 hover:ring-blue-500/50 ring-offset-white"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold text-gray-900">Size</p>
          <div className="grid grid-cols-3 gap-3">
            {sizes.map((size, index) => (
              <Button
                key={size}
                onClick={() => setSelectedSize(index)}
                variant="ghost"
                size="md"
                className={`p-3 ${
                  selectedSize === index
                    ? "bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-600 hover:bg-blue-50"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-gray-200" />

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center justify-between rounded-lg bg-gray-100 px-3">
          <Button
            onClick={() => handleQuantityChange(-1)}
            variant="ghost"
            size="icon"
            className="bg-transparent hover:bg-transparent hover:text-gray-900"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-base font-bold w-8 text-center text-gray-900">
            {quantity}
          </span>
          <Button
            onClick={() => handleQuantityChange(1)}
            variant="ghost"
            size="icon"
            className="bg-transparent hover:bg-transparent hover:text-gray-900"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <Button
          onClick={handleAddToCart}
          variant="primary"
          size="lg"
          className="flex-1 max-w-[480px] gap-2 min-w-0"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
}
