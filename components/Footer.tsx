import Link from "next/link"
import Image from "next/image"
import LogoImage from "@/image/logo.png"

const Footer = () => {

  return (
    <div className="bg-white w-full py-12 text-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse text-end justify-between items-start gap-8 lg:gap-4">
            {/* Logo Section */}
            <div className="flex justify-center items-center mx-auto lg:mx-0">
                <Image
                    src={LogoImage}
                    alt="Logo"
                    className="w-48 sm:w-60"
                    width={240} // Intrinsic width
                    height={120} // Intrinsic height
                />
            </div>

            {/* Links Section */}
            <div className="flex flex-col sm:flex-row justify-around items-start w-full lg:w-auto gap-8 sm:gap-12">
                {/* Quick Links */}
                <div className="flex flex-col gap-2 text-lg">
                    <Link className="hover:underline transition-all" href="/">
                        الرئيسية
                    </Link>
                    <Link className="hover:underline transition-all" href="/">
                        خدمتنا
                    </Link>
                    <Link className="hover:underline transition-all" href="/">
                        رؤيتنا
                    </Link>
                    <Link className="hover:underline transition-all" href="/">
                        أهدافنا
                    </Link>
                    <Link className="hover:underline transition-all" href="/">
                        اتصل بنا
                    </Link>
                </div>

                {/* Social Links */}
                <div className="flex flex-col gap-2 text-lg">
                    <p className="text-[#5E4D9D] text-lg">تواصل معنا</p>
                    <ul>
                        <li>
                            <Link href="/" className="hover:underline transition-all">
                                facebool
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline transition-all">
                                whatsapp
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline transition-all">
                                telegram
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline transition-all">
                                xing
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline transition-all">
                                twitter
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
