import Image from "next/image";
import Button from "@/components/ui/Button";
import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const t = await getTranslations("HomePage.hero");
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden rounded-xl">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/20" />
        <div className="relative z-10 flex flex-col items-center gap-4 p-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter text-white md:text-6xl">
            {t("title")}
          </h1>
          <h2 className="max-w-xl text-lg font-normal text-gray-200">
            {t("subtitle")}
          </h2>
          <Button variant="primary" size="lg" className="mt-4 hover:scale-105">
            {t("shopNow")}
          </Button>
        </div>
      </div>
    </section>
  );
}
