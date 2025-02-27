import Image from "next/image"
import OurServicesImage from "@/image/our_services.png"

const OurServices = () => {

    return (
        <section id="our_services" className="w-full h-auto">
            <div className="container flex flex-col py-0 md:flex-row justify-start">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-[600px] relative flex items-center justify-start">
                    <div className="relative w-full h-full">
                        <Image
                            src={OurServicesImage}
                            alt="Our Services"
                            fill
                            // className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 h-auto flex flex-col items-center md:items-end justify-center p-4 md:p-8 gap-6 md:gap-12">
                    <h2 className="text-[#C74D0A] text-xl md:text-2xl font-bold text-center md:text-right">
                        خدمتنا
                    </h2>

                    <p className="w-full max-w-[500px] text-[#7B7B7B] text-base md:text-xl font-semibold text-center md:text-right leading-10 md:leading-10">
                        نحن في حبار الذكية نقدم مجموعة شاملة من الحلول الإبداعية التي تهدف إلى تعزيز وجودك الرقمي وتحقيق أهدافك التجارية.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center sm:justify-end gap-4 w-full max-w-[500px]">
                        <button className="btn-section">
                            اجتمع معنا
                        </button>
                        <button className="btn-section">
                            استكشف المزيد
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default OurServices
