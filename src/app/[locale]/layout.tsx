import { Manrope } from "next/font/google";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StoreProvider from "@/components/StoreProvider";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ThemeProvider } from "next-themes";

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("metadata.home");

  return {
    title: {
      default: t("title"),
      template: "%s | Next Store",
    },
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      siteName: "Next Store",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    keywords: t("keywords").split(", "),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${manrope.variable} font-sans antialiased bg-[#F9F9F9] text-[#333333] dark:bg-[#1a1a1a] dark:text-[#e5e5e5]`}
      >
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <StoreProvider>
              <Header />
              {children}
              <Toaster />
              <Footer />
            </StoreProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
