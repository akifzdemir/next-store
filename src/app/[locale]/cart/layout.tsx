import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description:
    "Review your shopping cart and proceed to checkout. Manage your selected items and quantities before completing your purchase.",
  openGraph: {
    title: "Shopping Cart - Next Store",
    description:
      "Review your shopping cart and proceed to checkout. Manage your selected items before purchase.",
    type: "website",
  },
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
