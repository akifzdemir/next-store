"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("ErrorPage");

  useEffect(() => {
    console.error("Products Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-6">
            <AlertCircle className="h-16 w-16 text-red-600 dark:text-red-400" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t("productsError.title")}
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {t("productsError.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" onClick={reset}>
            {t("tryAgain")}
          </Button>
          <Link href="/">
            <Button variant="outline" size="lg">
              {t("goHome")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
