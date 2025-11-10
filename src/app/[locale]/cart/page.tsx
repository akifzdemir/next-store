"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { updateQuantity, removeFromCart } from "@/store/cartSlice";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import { createProductUrl } from "@/lib/url";
import { useParams } from "next/navigation";

export default function CartPage() {
  const t = useTranslations("CartPage");
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = 5.0;
  const total = subtotal + shipping;

  const handleUpdateQuantity = (
    productId: number,
    quantity: number,
    selectedColor?: string,
    selectedSize?: string
  ) => {
    dispatch(
      updateQuantity({ productId, quantity, selectedColor, selectedSize })
    );
  };

  const handleRemove = (
    productId: number,
    selectedColor?: string,
    selectedSize?: string
  ) => {
    dispatch(removeFromCart({ productId, selectedColor, selectedSize }));
  };

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/"
            className="text-gray-500 hover:text-blue-600 text-sm font-medium leading-normal transition-colors"
          >
            {t("breadcrumbs.home")}
          </Link>
          <span className="text-gray-500 text-sm font-medium leading-normal">
            /
          </span>
          <span className="text-gray-900 text-sm font-medium leading-normal">
            {t("breadcrumbs.cart")}
          </span>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-900 text-4xl font-black leading-tight tracking-tight">
          {t("title")}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <Trash2 className="h-16 w-16 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {t("emptyCart.title")}
          </h2>
          <p className="text-gray-500 mb-8">{t("emptyCart.description")}</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
          >
            <ArrowLeft className="h-5 w-5" />
            {t("emptyCart.continueShopping")}
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}-${index}`}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="relative size-20 shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.title}
                      fill
                      className="object-contain p-2"
                      sizes="80px"
                    />
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                    <div className="flex flex-col justify-center">
                      <Link
                        href={createProductUrl(
                          item.product.id,
                          item.product.title,
                          locale
                        )}
                        className="text-gray-900 text-base font-semibold leading-normal line-clamp-1 hover:text-blue-600 transition-colors"
                      >
                        {item.product.title}
                      </Link>
                      {(item.selectedColor || item.selectedSize) && (
                        <p className="text-gray-500 text-sm font-normal leading-normal line-clamp-2">
                          {item.selectedColor}
                          {item.selectedColor && item.selectedSize && ", "}
                          {item.selectedSize}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 flex justify-start md:justify-center">
                      <div className="flex items-center gap-2 text-gray-900 border border-gray-200 rounded-full px-2">
                        <button
                          onClick={() =>
                            handleUpdateQuantity(
                              item.product.id,
                              item.quantity - 1,
                              item.selectedColor,
                              item.selectedSize
                            )
                          }
                          className="text-lg font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 cursor-pointer transition-colors"
                          aria-label={t("decreaseQuantity")}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <input
                          className="text-sm font-medium leading-normal w-8 p-0 text-center bg-transparent focus:outline-none focus:ring-0 border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          type="number"
                          value={item.quantity}
                          readOnly
                          aria-label={t("quantity")}
                        />
                        <button
                          onClick={() =>
                            handleUpdateQuantity(
                              item.product.id,
                              item.quantity + 1,
                              item.selectedColor,
                              item.selectedSize
                            )
                          }
                          className="text-lg font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 cursor-pointer transition-colors"
                          aria-label={t("increaseQuantity")}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-4">
                      <p className="text-base font-semibold text-gray-900">
                        ${item.product.price.toFixed(2)}
                      </p>
                      <button
                        onClick={() =>
                          handleRemove(
                            item.product.id,
                            item.selectedColor,
                            item.selectedSize
                          )
                        }
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label={t("removeItem")}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {t("orderSummary.title")}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {t("orderSummary.subtotal")}
                    </span>
                    <span className="font-medium text-gray-800">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {t("orderSummary.shipping")}
                    </span>
                    <span className="font-medium text-gray-800">
                      ${shipping.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="my-4 border-t border-dashed border-gray-200"></div>
                <div className="flex justify-between text-base font-bold text-gray-900">
                  <span>{t("orderSummary.total")}</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="mt-6">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full shadow-sm"
                  >
                    {t("orderSummary.checkout")}
                  </Button>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
            >
              <ArrowLeft className="h-5 w-5" />
              {t("continueShopping")}
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
