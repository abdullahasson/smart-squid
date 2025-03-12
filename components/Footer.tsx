// Next
import Link from "next/link"
import Image from "next/image"
// Next Intl
import { useTranslations } from "next-intl"
// Logo
import LogoImage from "@/image/logo.png"
// Icons
import WebSiteIcon from "@/icon/website.svg"
import InstagramIcon from "@/icon/instagram.svg"
import TikTokIcon from "@/icon/tiktok.svg"
import MessagesIcons from "@/icon/message.svg"
import xIcon from "@/icon/x.svg"

const Footer = ({ locale }: { locale: string }) => {

    const t = useTranslations("Footer")

    return (
        <div className="bg-white w-full py-14 text-black footer-responsive">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row-reverse text-end justify-between items-start gap-8 lg:gap-4">
                    {/* Logo Section */}
                    <div className="flex-1 flex justify-center items-center mx-auto lg:mx-0">
                        <Image
                            src={LogoImage}
                            alt="Logo"
                            className="w-48 sm:w-60 my-auto"
                            width={240}
                            height={120}
                        />
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col sm:flex-row-reverse sm:justify-around items-start w-full flex-[5] gap-8 sm:gap-12 footer-links">
                        {/* Quick Links */}
                        <div className="flex flex-col gap-2 text-lg">
                            <Link
                                href={`/${locale}/`}
                                className="hover:underline transition-all"
                            >
                                {t("footer1")}
                            </Link>
                            <Link
                                href={`/${locale}/services`}
                                className="hover:underline transition-all"
                            >
                                {t("footer2")}
                            </Link>
                            <Link
                                href={`/${locale}/vision`}
                                className="hover:underline transition-all"
                            >
                                {t("footer3")}
                            </Link>
                            <Link
                                href={`/${locale}/goals`}
                                className="hover:underline transition-all"
                            >
                                {t("footer4")}
                            </Link>
                            <Link
                                href={`/${locale}/contact-us`}
                                className="hover:underline transition-all"
                            >
                                {t("footer5")}
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col gap-2 text-lg">
                            <p className="text-[#5E4D9D] text-lg">{t('secondaryTitle')}</p>
                            <ul>
                                {[
                                    { name: "habbar.sa", href: "https://habbar.sa/", icon: WebSiteIcon },
                                    { name: "info@habbar.sa", href: "ytcard12.167@gmail.com", icon: MessagesIcons },
                                    { name: "habbar_sa", href: "https://instagram.com/habbar_sa", icon: InstagramIcon },
                                    { name: "habbar_sa", href: "https://x.com/habbar_sa", icon: xIcon },
                                    { name: "habbar_sa", href: "https://tiktok.com/habbar_sa", icon: TikTokIcon },
                                ].map((itme, index) => (
                                    <li key={index}>
                                        <a href={itme.href} target="_blank" rel="noreferrer" className="hover:underline transition-all flex items-center justify-end gap-2">
                                            <span>{itme.name}</span>
                                            <Image src={itme.icon} alt="facebook" width={24} height={24} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div className="font-medium text-lg">
                            <ul>
                                <li className="mb-2">
                                    <Link className="hover:underline transition-all" href="/">
                                        {t('footer6')}
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link className="hover:underline transition-all" href="/">
                                        {t('footer7')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer
