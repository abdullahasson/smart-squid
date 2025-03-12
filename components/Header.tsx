// Next
import Link from "next/link";
import Image from "next/image";
// Next Intl
import { useTranslations } from "next-intl";
// Components
import ChangeLng from "@/components/ChangeLng";
// Logo
import Logo from "@/image/logo.png";

const Header = ({ locale }: { locale: string }) => {

  const t = useTranslations("Header");

  return (
    <header className="w-full bg-white py-4 shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-4 md:gap-0">
        {/* Logo Section */}
        <div className="order-1 md:order-none">
          <Image
            src={Logo}
            alt="Logo"
            className="w-32 md:w-52"
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="order-3 md:order-none flex flex-wrap justify-center gap-2 md:gap-4">
          <Link
            href={`/${locale}/contact-us`}
            className="btn-secondary"
          >
            {t("nav5")}
          </Link>
          <Link
            href={`/${locale}/goals`}
            className="btn-secondary"
          >
            {t("nav4")}
          </Link>
          <Link
            href={`/${locale}/vision`}
            className="btn-secondary"
          >
            {t("nav3")}
          </Link>
          <Link
            href={`/${locale}/services`}
            className="btn-secondary"
          >
            {t("nav2")}
          </Link>
          <Link
            href={`/${locale}/`}
            className="btn-secondary"
          >
            {t("nav1")}
          </Link>
        </div>

        {/* Language Selector and Book Meeting Button */}
        <div className="order-2 md:order-none flex items-center gap-2 md:gap-4">
          <ChangeLng locale={locale} />
          <Link href={`/${locale}/book-meeting`} className="btn-tertiary">
            {t("nav6")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;