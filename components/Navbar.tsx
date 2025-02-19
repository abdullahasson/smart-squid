const Navbar = () => {

    return (
        <div className="w-full py-3 flex items-center justify-center sticky top- bg-white z-50">
            <div className="flex items-center gap-6 text-black">
                <a className="text-lg font-normal" href="#managers">المدراء</a>
                <a className="text-lg font-normal" href="#success_partners">شركاء النجاح</a>
                <a className="text-lg font-normal" href="#our_goals">أهدافنا</a>
                <a className="text-lg font-normal" href="#our_vision">رؤيتنا</a>
                <a className="text-lg font-normal" href="#our_services">خدمتنا</a>
            </div>
        </div>
    )
    
}

export default Navbar
