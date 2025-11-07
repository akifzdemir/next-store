import { API_URL } from "@/config/endpoints";
import type { ProductModel } from "@/models";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturesSection from "@/components/home/FeaturesSection";

const getFeaturedProducts = async (): Promise<ProductModel[]> => {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) return [];
  const data = (await res.json()) as ProductModel[];
  return data.slice(0, 8);
};

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <main className="flex-1 mt-12">
        <HeroSection />
        <FeaturedProducts products={featuredProducts} />
        <FeaturesSection />
      </main>
    </div>
  );
}
