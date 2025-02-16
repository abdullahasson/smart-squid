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
    <header className="w-full bg-white py-4">
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
          <Link href='/' className="border border-[#5E4D9D] font-semibold rounded-2xl py-1 px-4 md:py-2 md:px-6 text-sm md:text-base text-[#5E4D9D] transition-all hover:bg-[#5E4D9D] hover:text-white">
            اتصل بنا
          </Link>
          <Link href='/' className="border border-[#5E4D9D] font-semibold rounded-2xl py-1 px-4 md:py-2 md:px-6 text-sm md:text-base text-[#5E4D9D] transition-all hover:bg-[#5E4D9D] hover:text-white">
            أهدافنا
          </Link>
          <Link href='/' className="border border-[#5E4D9D] font-semibold rounded-2xl py-1 px-4 md:py-2 md:px-6 text-sm md:text-base text-[#5E4D9D] transition-all hover:bg-[#5E4D9D] hover:text-white">
            رؤيتنا
          </Link>
          <Link href='/' className="border border-[#5E4D9D] font-semibold rounded-2xl py-1 px-4 md:py-2 md:px-6 text-sm md:text-base text-[#5E4D9D] transition-all hover:bg-[#5E4D9D] hover:text-white">
            خدمتنا
          </Link>
          <Link href='/' className="border border-[#5E4D9D] font-semibold rounded-2xl py-1 px-4 md:py-2 md:px-6 text-sm md:text-base text-white bg-[#5E4D9D]">
            الرئيسية
          </Link>
        </div>

        {/* Language Selector and Book Meeting Button */}
        <div className="order-2 md:order-none flex items-center gap-2 md:gap-4">
          <Select>
            <SelectTrigger dir="rtl" className="w-[100px] md:w-[120px] text-sm md:text-base">
              <SelectValue placeholder="اللغة" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="arabic">Arabic</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Link href="/book-meeting" className="border border-[#DFD7FF] bg-[#DFD7FF] font-semibold rounded-2xl py-1 px-4 md:py-2 md:px-6 text-sm md:text-base text-[#5E4D9D]">
            احجز اجتماع
          </Link>
        </div>

      </div>
    </header>
  )
}

export default Header
