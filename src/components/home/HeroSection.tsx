import Image from "next/image";

export default function HeroSection() {
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
            Discover The New Collection
          </h1>
          <h2 className="max-w-xl text-lg font-normal text-gray-200">
            Timeless pieces designed for the modern wardrobe. Crafted with
            intention, made to last.
          </h2>
          <button className="mt-4 flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#3B82F6] px-6 text-base font-bold text-white transition-transform hover:scale-105">
            <span className="truncate">Shop Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}
