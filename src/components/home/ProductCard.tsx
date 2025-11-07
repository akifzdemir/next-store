import Image from "next/image";
import type { ProductModel } from "@/models";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: ProductModel;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col gap-3 cursor-pointer">
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          className="object-contain object-center p-12"
          alt={product.title}
          src={product.image}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <button className="absolute bottom-3 right-3 cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md opacity-0 transition-opacity group-hover:opacity-100 hover:shadow-lg">
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold line-clamp-1">
          {product.title}
        </h3>
        <p className="text-sm text-[#6B7280]">${product.price}</p>
      </div>
    </div>
  );
}
