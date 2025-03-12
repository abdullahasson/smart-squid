"use client"; 

import { usePathname, useRouter } from "next/navigation";
// Shadcn UI
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const ChangeLng = ({ locale }: { locale: string }) => {
    const pathname = usePathname();
    const router = useRouter();
  
    // Define the type for the event parameter
    const handleChange = (newLocale: string) => {
      const path = pathname.split("/").slice(2).join("/"); // Remove the locale part of the path
      router.push(`/${newLocale}/${path}`);
    };

    return (
        <Select defaultValue={locale} onValueChange={handleChange}>
            <SelectTrigger
                dir="rtl"
                className="changelang w-[100px] focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            >
                <SelectValue placeholder="اللغة" />
            </SelectTrigger>
            <SelectContent dir="rtl" className="w-[100px] border border-[#5E4D9D] text-[#5E4D9D]">
                <SelectGroup>
                    <SelectItem value="ar" className="font-semibold">لغة عربية</SelectItem>
                    <SelectItem value="en" className="font-semibold hover:text-[#5E4D9D]">لغة انكليزية</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default ChangeLng;