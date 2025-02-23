const Navbar = () => {
    
    const navLink = [
        {name: "المدراء" , href: "#managers"},
        {name: "شركاء النجاح" , href: "#success_partners"},
        {name: "أهدافنا" , href: "#our_goals"},
        {name: "رؤيتنا" , href: "#our_vision"},
        {name: "خدمتنا" , href: "#our_services"},
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
