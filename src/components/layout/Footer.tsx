import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
              {t("help.title")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a className="text-base hover:underline" href="#">
                  {t("help.contactUs")}
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  {t("help.faq")}
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  {t("help.shippingReturns")}
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  {t("help.sizeGuide")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
              {t("company.title")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a className="text-base hover:underline" href="#">
                  {t("company.aboutUs")}
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  {t("company.careers")}
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  {t("company.press")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
              {t("social.title")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a className="text-base hover:underline" href="#">
                  {t("social.instagram")}
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  {t("social.facebook")}
                </a>
              </li>
              <li>
                <a className="text-base hover:underline" href="#">
                  {t("social.twitter")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
              {t("newsletter.title")}
            </h3>
            <p className="mt-4 text-base">{t("newsletter.description")}</p>
            <form className="mt-4 flex gap-2">
              <input
                className="flex-1 rounded-md border-gray-300 bg-[#F9F9F9] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                placeholder={t("newsletter.placeholder")}
                type="email"
              />
              <button
                className="rounded-md bg-[#3B82F6] px-4 py-2 text-white font-semibold"
                type="submit"
              >
                {t("newsletter.signUp")}
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-[#6B7280]">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
