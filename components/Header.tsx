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
      <div className="container mx-auto flex items-center justify-between">

        <div className="flex items-center gap-5">
          <Select>
            <SelectTrigger dir="rtl" className="w-[120px]">
              <SelectValue placeholder="اللغة" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">English</SelectItem>
                <SelectItem value="banana">Arabic</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Link href="/book-meeting" className="border border-[#DFD7FF] bg-[#DFD7FF] font-semibold rounded-2xl py-2 px-6 text-[#5E4D9D]">
            احجز اجتماع
          </Link>
        </div>

        <div className="flex justify-between items-center gap-5">
          <Link href='/' className="border border-[#5E4D9D] font-semibold rounded-2xl py-2 px-6 text-[#5E4D9D] transition-all hover:bg-[#5E4D9D] hover:text-white">اتصل بنا</Link>
          <Link href='/' className="border border-[#5E4D9D] font-semibold rounded-2xl py-2 px-6 text-[#5E4D9D] transition-all hover:bg-[#5E4D9D] hover:text-white">أهدافنا</Link>
          <Link href='/' className="border border-[#5E4D9D] font-semibold rounded-2xl py-2 px-6 text-[#5E4D9D] transition-all hover:bg-[#5E4D9D] hover:text-white">رؤيتنا</Link>
          <Link href='/' className="border border-[#5E4D9D] font-semibold rounded-2xl py-2 px-6 text-[#5E4D9D] transition-all hover:bg-[#5E4D9D] hover:text-white">خدمتنا</Link>
          <Link href='/' className="border border-[#5E4D9D] font-semibold rounded-2xl py-2 px-6 text-white bg-[#5E4D9D]">الرئيسية</Link>
        </div>

        <div className="">
          <Image
            src={Logo}
            alt="Logo"
            className="w-52"
          />
        </div>

      </div>
    </header>
  )
}

export default Header
