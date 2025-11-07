import { Search, User, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-[#F9F9F9]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <svg
              className="h-6 w-6 text-[#333333]"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                fill="currentColor"
              ></path>
            </svg>
            <h2 className="text-xl font-bold tracking-tight">Next Store</h2>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a
              className="text-sm font-medium text-[#6B7280] hover:text-[#333333] transition-colors"
              href="#"
            >
              New Arrivals
            </a>
            <a
              className="text-sm font-medium text-[#6B7280] hover:text-[#333333] transition-colors"
              href="#"
            >
              Women
            </a>
            <a
              className="text-sm font-medium text-[#6B7280] hover:text-[#333333] transition-colors"
              href="#"
            >
              Men
            </a>
            <a
              className="text-sm font-medium text-[#6B7280] hover:text-[#333333] transition-colors"
              href="#"
            >
              Accessories
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-200/60 hover:bg-gray-300/60 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-200/60 hover:bg-gray-300/60 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-200/60 hover:bg-gray-300/60 transition-colors">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6] text-xs font-bold text-white">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
