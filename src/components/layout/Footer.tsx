export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
              Help
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a className="text-base hover:underline" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  Shipping &amp; Returns
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a className="text-base hover:underline" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
              Social
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a className="text-base hover:underline" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
              Newsletter
            </h3>
            <p className="mt-4 text-base">
              Sign up for our newsletter to get the latest updates.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                className="flex-1 rounded-md border-gray-300 bg-[#F9F9F9] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                placeholder="Your email"
                type="email"
              />
              <button
                className="rounded-md bg-[#3B82F6] px-4 py-2 text-white font-semibold"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-[#6B7280]">
          <p>© 2025 Next Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
