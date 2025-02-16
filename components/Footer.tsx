import Link from "next/link"
import Image from "next/image"
import LogoImage from "@/image/logo.png"

const Footer = () => {

  return (
    <div className="bg-white w-full py-12 text-black">
      <div className="container mx-auto flex flex-row-reverse text-end justify-around items-start">
        <div className="flex justify-center items-center my-auto">
            <Image src={LogoImage} alt="Logo" className="w-60" />
        </div>
        <div className="flex flex-col  gap-2 text-lg">
            <Link className="hover:underline transition-all" href='/'>الرئيسية</Link>
            <Link className="hover:underline transition-all" href='/'>خدمتنا</Link>
            <Link className="hover:underline transition-all" href='/'>رؤيتنا</Link>
            <Link className="hover:underline transition-all" href='/'>أهدافنا</Link>
            <Link className="hover:underline transition-all" href='/'>اتصل بنا</Link>
        </div>
        <div className="flex flex-col gap-2 text-lg">
            <p className="text-[#5E4D9D] text-lg">تواصل معنا</p>
            <ul>
                <li>
                    <Link href="/" className="hover:underline transition-all">facebool</Link>
                </li>
                <li>
                    <Link href="/" className="hover:underline transition-all">whatsapp</Link>
                </li>
                <li>
                    <Link href="/" className="hover:underline transition-all">telegram</Link>
                </li>
                <li>
                    <Link href="/" className="hover:underline transition-all">xing</Link>
                </li>
                <li>
                    <Link href="/" className="hover:underline transition-all">twitter</Link>
                </li>
            </ul>
        </div>
        <div className="font-medium text-lg">
            <ul>
                <li className="mb-2">
                    <Link className="hover:underline transition-all" href='/'>الشروط والأحكام</Link>
                </li>
                <li className="mt-2">
                    <Link className="hover:underline transition-all" href='/'>سياسة الخصوصية</Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )

}

export default Footer
