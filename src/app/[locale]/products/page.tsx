import { API_URL } from "@/config/endpoints";
import { getTranslations } from "next-intl/server";
import type { ProductModel } from "@/models";

const getAllProducts = async (): Promise<ProductModel[]> => {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) return [];
  const data = (await res.json()) as ProductModel[];
  return data;
};

export default async function ProductsPage() {
  const t = await getTranslations("ProductsPage");
  const products = await getAllProducts();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold mb-6">{t("title")}</h1>
        <ul className="mt-4 space-y-4">
          {products.map((p) => (
            <li key={p.id} className="border rounded p-4 bg-white ">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="text-sm text-zinc-600 ">{p.description}</p>
              <p className="text-sm mt-2">
                {p.category} — ${p.price}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
