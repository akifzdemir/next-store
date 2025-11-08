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

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "Next Store - Discover The New Collection",
    template: "%s | Next Store",
  },
  description:
    "Timeless pieces designed for the modern wardrobe. Crafted with intention, made to last. Shop premium quality fashion products at Next Store.",
  openGraph: {
    title: "Next Store - Discover The New Collection",
    description:
      "Timeless pieces designed for the modern wardrobe. Crafted with intention, made to last.",
    type: "website",
    siteName: "Next Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Store - Discover The New Collection",
    description:
      "Timeless pieces designed for the modern wardrobe. Crafted with intention, made to last.",
  },
  keywords: [
    "fashion",
    "clothing",
    "shopping",
    "e-commerce",
    "next store",
    "premium quality",
    "modern wardrobe",
  ],
};

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
    <html lang={locale}>
      <body
        className={`${manrope.variable} font-sans antialiased bg-[#F9F9F9] text-[#333333]`}
      >
        <NextIntlClientProvider>
          <StoreProvider>
            <Header />
            {children}
            <Toaster />
            <Footer />
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
