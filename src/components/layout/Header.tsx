"use client";

import { Search, User, ShoppingBag, Globe } from "lucide-react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { toggleCartSheet } from "@/store/cartSlice";
import Button from "@/components/ui/Button";
import CartSheet from "@/components/cart/CartSheet";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
import ThemeSwitcher from "../ui/ThemeSwitcher";

export default function Header() {
  const t = useTranslations("Header.nav");
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;
  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleCartClick = () => {
    dispatch(toggleCartSheet());
  };

  const changeLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsLangOpen(false);
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "tr", label: "Türkçe" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-700/50 bg-[#F9F9F9]/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href={"/"} className="flex items-center gap-4">
              <svg
                className="h-6 w-6 text-[#333333] dark:text-[#e5e5e5]"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h2 className="text-xl font-bold tracking-tight text-[#333333] dark:text-[#e5e5e5]">
                Next Store
              </h2>
            </Link>
            <nav className="hidden items-center gap-8 md:flex">
              <a
                className="text-sm font-medium text-[#6B7280] hover:text-[#333333] dark:text-gray-400 dark:hover:text-[#e5e5e5] transition-colors"
                href="#"
              >
                {t("newArrivals")}
              </a>
              <a
                className="text-sm font-medium text-[#6B7280] hover:text-[#333333] dark:text-gray-400 dark:hover:text-[#e5e5e5] transition-colors"
                href="#"
              >
                {t("women")}
              </a>
              <a
                className="text-sm font-medium text-[#6B7280] hover:text-[#333333] dark:text-gray-400 dark:hover:text-[#e5e5e5] transition-colors"
                href="#"
              >
                {t("men")}
              </a>
              <a
                className="text-sm font-medium text-[#6B7280] hover:text-[#333333] dark:text-gray-400 dark:hover:text-[#e5e5e5] transition-colors"
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

              <ThemeSwitcher />

              <div className="relative">
                <Button
                  variant="icon"
                  size="icon"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  <Globe className="h-5 w-5" />
                </Button>

                {isLangOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsLangOpen(false)}
                    />
                    <div className="absolute right-0 top-12 z-50 w-40 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] shadow-lg py-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full px-4 cursor-pointer py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 ${
                            currentLocale === lang.code
                              ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="relative">
                <Button variant="icon" size="icon" onClick={handleCartClick}>
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CartSheet />
    </>
  );
}
