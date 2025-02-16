import Image from "next/image"
import Partner1 from "@/image/partner 1.png"
import Partner2 from "@/image/partner 2.png"

const SuccessPartners = () => {
    return (
        <section id="success_partners" className="">
            <div className="container py-5 mx-auto flex flex-col items-end">
                <div className="w-full text-end flex-1">
                    <h2 className="text-[#C74D0A] text-2xl font-bold pt-6 mb-4">شركاء النجاح</h2>
                </div>
                <div className="w-full flex justify-between flex-row-reverse items-center">
                    <div className="w-1/2">
                        <Image src={Partner1} alt="Success Partner 1" />
                    </div>
                    <div className="w-1/2 h-96 overflow-hidden flex">
                        <Image src={Partner2} alt="Success Partner 2" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessPartners
