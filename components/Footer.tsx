import Link from "next/link"
import Image from "next/image"
import LogoImage from "@/image/logo.png"

const Footer = () => {

    return (
        <div className="bg-white w-full py-12 text-black">
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
                    <div className="flex flex-col sm:flex-row-reverse sm:justify-around items-start w-full flex-[5] gap-8 sm:gap-12">
                        {/* Quick Links */}
                        <div className="flex flex-col gap-2 text-lg">
                            {
                                [
                                    { name: "الرئيسية", href: "/" },
                                    { name: "خدمتنا", href: "/services" },
                                    { name: "رؤيتنا", href: "/vision" },
                                    { name: "أهدافنا", href: "/goals" },
                                    { name: "اتصل بنا", href: "/contact-us" }
                                ].map((link, index) => {
                                    return (
                                        <Link key={index} className="hover:underline transition-all" href={link.href}>
                                            {link.name}
                                        </Link>
                                    )
                                })
                            }
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col gap-2 text-lg">
                            <p className="text-[#5E4D9D] text-lg">تواصل معنا</p>
                            <ul>
                                <li>
                                    <Link href="/" className="hover:underline transition-all flex items-center justify-end gap-1">
                                        <span>facebool</span>

                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:underline transition-all flex items-center justify-end gap-1">
                                        <span>whatsapp</span>

                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:underline transition-all flex items-center justify-end gap-1">
                                        <span>telegram</span>

                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:underline transition-all flex items-center justify-end gap-1">
                                        <span>xing</span>

                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:underline transition-all flex items-center justify-end gap-1">
                                        <span>twitter</span>

                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div className="font-medium text-lg">
                            <ul>
                                <li className="mb-2">
                                    <Link className="hover:underline transition-all" href="/">
                                        الشروط والأحكام
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link className="hover:underline transition-all" href="/">
                                        سياسة الخصوصية
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
