// Next Intl
import { useTranslations } from "next-intl"

const Navbar = () => {
    
    const t = useTranslations('Navbar')

    const navLink = [
        {name: t('nav5') , href: "#success_partners"},
        {name: t('nav4') , href: "#managers"},
        {name: t('nav3') , href: "#our_goals"},
        {name: t('nav2') , href: "#our_vision"},
        {name: t('nav1') , href: "#our_services"},
    ]

    return (
        <div className="w-full py-3 flex items-center justify-center mt-10 sticky top-0 bg-white z-50">
            <div className="flex items-center gap-6 text-black">
                {
                    navLink.map((link, index) => {
                        return (
                            <a key={index} className={`text-lg font-normal`} href={link.href}>{link.name}</a>
                        )
                    })
                }
            </div>
        </div>
    )
    
}

export default Navbar
