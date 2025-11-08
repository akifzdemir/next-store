"use client";

import { Search, User, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { toggleCartSheet } from "@/store/cartSlice";
import Button from "@/components/ui/Button";
import CartSheet from "@/components/cart/CartSheet";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header.nav");
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCartClick = () => {
    dispatch(toggleCartSheet());
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-[#F9F9F9]/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href={"/"} className="flex items-center gap-4">
              <svg
                className="h-6 w-6 text-[#333333]"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h2 className="text-xl font-bold tracking-tight">Next Store</h2>
            </Link>
            <nav className="hidden items-center gap-8 md:flex">
              <a
                className="text-sm font-medium text-[#6B7280] hover:text-[#333333] transition-colors"
                href="#"
              >
                {t("newArrivals")}
              </a>
              <a
                className="text-sm font-medium text-[#6B7280] hover:text-[#333333] transition-colors"
                href="#"
              >
                {t("women")}
              </a>
              <a
                className="text-sm font-medium text-[#6B7280] hover:text-[#333333] transition-colors"
                href="#"
              >
                {t("men")}
              </a>
              <a
                className="text-sm font-medium text-[#6B7280] hover:text-[#333333] transition-colors"
                href="#"
              >
                {t("accessories")}
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="icon" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="icon" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <button
                onClick={handleCartClick}
                className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-200/60 hover:bg-gray-300/60 transition-colors"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <CartSheet />
    </>
  );
}
