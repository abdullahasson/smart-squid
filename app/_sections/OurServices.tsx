import Image from "next/image"
import OurServicesImage from "@/image/our_services.png"

const OurServices = () => {

    return (
        <section id="our_services" className="w-full h-bih-header">
            <div className="container flex flex-col md:flex-row min-h-screen">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-[400px] md:h-auto relative flex items-center justify-center p-4">
                    <div className="relative w-full h-full">
                        <Image
                            src={OurServicesImage}
                            alt="Our Services"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center p-4 md:p-8 gap-6 md:gap-12">
                    <h2 className="text-[#C74D0A] text-xl md:text-2xl font-bold text-center md:text-right">
                        خدمتنا
                    </h2>

                    <p className="text-[#7B7B7B] text-base md:text-xl font-semibold text-center md:text-right leading-7 md:leading-9">
                        نحن في حبار الذكية نقدم مجموعة شاملة من الحلول الإبداعية التي تهدف إلى تعزيز وجودك الرقمي وتحقيق أهدافك التجارية.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[500px]">
                        <button className="bg-[#5E4D9D] py-3 px-3 text-white rounded-md w-full sm:w-52">
                            استكشف المزيد
                        </button>
                        <button className="bg-[#5E4D9D] py-3 px-3 text-white rounded-md w-full sm:w-52">
                            اجتمع معنا
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default OurServices
