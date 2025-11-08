"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { ProductModel } from "@/models";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cartSlice";
import Button from "@/components/ui/Button";
import { createProductUrl } from "@/lib/url";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

interface ProductCardProps {
  product: ProductModel;
}

export default function ProductCard({ product }: ProductCardProps) {
  const params = useParams();
  const locale = params.locale || "en";
  const dispatch = useAppDispatch();
  const t = useTranslations("HomePage.product");

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(
      addToCart({
        product,
        quantity: 1,
        selectedColor: "White",
        selectedSize: "Medium",
      })
    );
    toast.success(t("addedToCart"), {
      description: product.title,
      duration: 3000,
    });
  };

  return (
    <Link
      href={createProductUrl(product.id, product.title, locale as string)}
      className="group relative flex flex-col gap-3 cursor-pointer"
    >
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
        <Image
          className="object-contain object-center p-12"
          alt={product.title}
          src={product.image}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <Button
          onClick={handleAddToCart}
          variant="icon"
          size="icon"
          className="absolute bottom-3 right-3 bg-white dark:bg-gray-800 shadow-md opacity-0 transition-opacity group-hover:opacity-100 hover:shadow-lg hover:bg-white dark:hover:bg-gray-700"
        >
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold line-clamp-1 text-gray-900 dark:text-gray-100">
          {product.title}
        </h3>
        <p className="text-sm text-[#6B7280] dark:text-gray-400">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
