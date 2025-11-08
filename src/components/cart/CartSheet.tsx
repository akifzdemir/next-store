"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  closeCartSheet,
  removeFromCart,
  updateQuantity,
} from "@/store/cartSlice";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CartSheet() {
  const t = useTranslations("CartSheet");
  const params = useParams();
  const locale = params.locale || "en";
  const dispatch = useAppDispatch();
  const { items, isSheetOpen } = useAppSelector((state) => state.cart);

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleClose = () => {
    dispatch(closeCartSheet());
  };

  return (
    <AnimatePresence>
      {isSheetOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-6 w-6 text-gray-900" />
                  <h2 className="text-xl font-bold text-gray-900">
                    {t("title")}
                  </h2>
                </div>
                <Button
                  variant="icon"
                  size="icon"
                  onClick={handleClose}
                  className="hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {items.length === 0 ? (
                <div className="flex flex-1 flex-col items-center justify-center px-6">
                  <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t("emptyCart.title")}
                  </h3>
                  <p className="text-sm text-gray-500 text-center mb-6">
                    {t("emptyCart.description")}
                  </p>
                  <Button variant="primary" size="md" onClick={handleClose}>
                    {t("emptyCart.continueShopping")}
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto px-6 py-4">
                    <div className="space-y-3">
                      {items.map((item, index) => (
                        <motion.div
                          key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex gap-3 py-3 border-b border-gray-100 last:border-0"
                        >
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded bg-gray-50">
                            <Image
                              src={item.product.image}
                              alt={item.product.title}
                              fill
                              className="object-contain p-2"
                            />
                          </div>

                          <div className="flex flex-1 flex-col gap-2">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                                  {item.product.title}
                                </h3>
                                {(item.selectedColor || item.selectedSize) && (
                                  <p className="text-xs text-gray-500 mt-0.5">
                                    {[item.selectedColor, item.selectedSize]
                                      .filter(Boolean)
                                      .join(" • ")}
                                  </p>
                                )}
                              </div>
                              <Button
                                variant="icon"
                                size="icon"
                                onClick={() =>
                                  dispatch(
                                    removeFromCart({
                                      productId: item.product.id,
                                      selectedColor: item.selectedColor,
                                      selectedSize: item.selectedSize,
                                    })
                                  )
                                }
                                className="h-6 w-6 "
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() =>
                                    dispatch(
                                      updateQuantity({
                                        productId: item.product.id,
                                        quantity: item.quantity - 1,
                                        selectedColor: item.selectedColor,
                                        selectedSize: item.selectedSize,
                                      })
                                    )
                                  }
                                  disabled={item.quantity <= 1}
                                  className="h-6 w-6 flex items-center justify-center text-gray-500 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                  -
                                </button>
                                <span className="text-sm font-medium text-gray-900 w-6 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    dispatch(
                                      updateQuantity({
                                        productId: item.product.id,
                                        quantity: item.quantity + 1,
                                        selectedColor: item.selectedColor,
                                        selectedSize: item.selectedSize,
                                      })
                                    )
                                  }
                                  className="h-6 w-6 flex items-center justify-center text-gray-500 hover:text-gray-900"
                                >
                                  +
                                </button>
                              </div>

                              <span className="text-sm font-semibold text-gray-900">
                                $
                                {(item.product.price * item.quantity).toFixed(
                                  2
                                )}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-6 py-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">
                        {t("total")} (
                        {items.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                        {t("items")})
                      </span>
                      <span className="text-xl font-bold text-gray-900">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                    <Link href={`/${locale}/cart`} onClick={handleClose}>
                      <Button variant="primary" size="lg" className="w-full">
                        {t("viewCart")}
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
