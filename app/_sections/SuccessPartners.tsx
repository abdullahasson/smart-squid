import Image from "next/image"
import Partner1 from "@/image/partner 1.png"
import Partner2 from "@/image/partner 2.png"

const SuccessPartners = () => {
    return (
        <section id="success_partners" className="w-full">
            <div className="container py-12 mx-auto flex flex-col items-end">

                {/* Heading */}
                <div className="w-full text-end">
                    <h2 className="text-[#C74D0A] text-2xl sm:text-3xl font-bold">
                        شركاء النجاح
                    </h2>
                </div>

                {/* Images Container */}
                <div className="w-full flex flex-col md:flex-row-reverse justify-between items-center gap-6">
                    {/* Partner 1 Image */}
                    <div className="w-full md:w-1/2 h-64 sm:h-96 overflow-hidden flex items-end justify-center">
                        <Image
                            src={Partner1}
                            alt="Success Partner 1"
                            className="w-full h-full object-cover"

                            style={{ objectFit: 'contain' }}
                            width={500} // Set the intrinsic width of the image
                            height={300} // Set the intrinsic height of the image
                        />
                    </div>

                    {/* Partner 2 Image */}
                    <div className="w-full md:w-1/2 h-64 sm:h-96 overflow-hidden flex items-end justify-center">
                        <Image
                            src={Partner2}
                            alt="Success Partner 2"
                            className="w-full h-full object-cover"

                            style={{ objectFit: 'contain' }}
                            width={500} // Set the intrinsic width of the image
                            height={300} // Set the intrinsic height of the image
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessPartners
