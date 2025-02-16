const Navbar = () => {
    return (
        <div className="w-full py-4 flex items-center justify-center sticky top-0 bg-white z-50">
            <div className="flex items-center gap-6 text-black">
                <a className="text-lg font-normal" href="#our_services">المدراء</a>
                <a className="text-lg font-normal" href="#partners">شركاء النجاح</a>
                <a className="text-lg font-normal" href="#our_goals">أهدافنا</a>
                <a className="text-lg font-normal" href="#our_vision">رؤيتنا</a>
                <a className="text-lg font-normal" href="#our_services">خدمتنا</a>
            </div>
        </div>
    )
}

export default Navbar
