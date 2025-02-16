import Image from "next/image"
import OurServicesImage from "@/image/our_services.png"

const OurServices = () => {

    return (
        <section id="our_services" className="w-full h-full">
            <div className="container flex">
                <div className="h-screen w-1/2 flex items-center">
                    <Image src={OurServicesImage} alt="Our Services" width={1000} height={1000} />
                </div>
                <div className="h-screen w-1/2 flex flex-col items-end justify-center gap-12">
                    <h2 className="text-[#C74D0A] text-2xl font-bold">خدمتنا</h2>
                    <p className="text-[#7B7B7B] text-xl font-semibold line-clamp-2 leading-9">
                        نحن في حبار الذكية نقدم مجموعة شاملة من الحلول الإبداعية <br /> التي تهدف إلى تعزيز وجودك الرقمي وتحقيق أهدافك التجارية.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <button className="bg-[#5E4D9D] py-3 px-3 text-white rounded-md w-52">استكشف المزيد</button>
                        <button className="bg-[#5E4D9D] py-3 px-3 text-white rounded-md w-52">اجتمع معنا</button>
                    </div>
                </div>
            </div>
        </section>
    )
    
}

export default OurServices
