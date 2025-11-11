"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("ErrorPage");

  useEffect(() => {
    console.error("Error:", error);
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
          {t("title")}
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {t("description")}
        </p>

        {error.message && (
          <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" onClick={reset}>
            {t("tryAgain")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = "/")}
          >
            {t("goHome")}
          </Button>
        </div>
      </div>
    </div>
  );
}
