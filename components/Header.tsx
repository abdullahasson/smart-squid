import Link from "next/link"
import Image from "next/image"
import Logo from "@/image/logo.png"
// Shadcn UI
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Header = () => {
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
          <Link href='/' className="btn-secondary">
            اتصل بنا
          </Link>
          <Link href='/' className="btn-secondary">
            أهدافنا
          </Link>
          <Link href='/' className="btn-secondary">
            رؤيتنا
          </Link>
          <Link href='/services' className="btn-secondary">
            خدمتنا
          </Link>
          <Link href='/' className="btn-primary">
            الرئيسية
          </Link>
        </div>

        {/* Language Selector and Book Meeting Button */}
        <div className="order-2 md:order-none flex items-center gap-2 md:gap-4">

          <Select>
            <SelectTrigger
              dir="rtl"
              className="btn-primary
                w-[100px]
                focus:outline-none 
                focus-visible:outline-none 
                focus-visible:ring-0 
                focus-visible:ring-offset-0"
            >
              <SelectValue placeholder="اللغة" />
            </SelectTrigger>
            <SelectContent dir="rtl" className="w-[100px] border border-[#5E4D9D] text-[#5E4D9D]">
              <SelectGroup>
                <SelectItem value="arabic" className="font-semibold">لغة عربية</SelectItem>
                <SelectItem value="english" className="font-semibold hover:text-[#5E4D9D]">لغة انكليزية</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Link href="/book-meeting" className="btn-tertiary">
            احجز اجتماع
          </Link>
        </div>

      </div>
    </header>
  )
}

export default Header
