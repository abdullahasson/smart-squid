import Image from "next/image"
import OurVisionImage from "@/image/our_vision.png"

const OurVision = () => {
    return (
        <section id="our_vision" className="w-full">
            <div className="container mx-auto py-12 flex flex-col-reverse md:flex-row items-center justify-center text-end">
                {/* Content Section */}
                <div className="w-full md:w-1/2 flex flex-col items-end justify-center gap-4 p-6 md:p-12">
                    <h2 className="text-[#C74D0A] text-xl md:text-2xl font-bold mb-4">
                        رؤيتنا
                    </h2>
                    <p className="text-[#7B7B7B] text-base md:text-xl font-semibold leading-7 md:leading-10">
                        نحن في حبار الذكية نسعى إلى أن نكون روادًا في تقديم حلول مبتكرة ومتكاملة في مجال الدعاية والإعلان، مما يساعد الشركات على تعزيز وجودها الرقمي وتحقيق النجاح المستدام. رؤيتنا هي أن نكون الشريك الاستراتيجي الذي يحقق التحول الرقمي من خلال تقديم خدمات تسويقية متميزة، سواء عبر منصات الإنترنت أو من خلال الحملات الإعلانية المدفوعة، مع التركيز على الإبداع والجودة في كل خطوة.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 h-[400px] flex items-center justify-center p-6 md:p-12">
                    <div className="relative w-full h-full">
                        <Image
                            src={OurVisionImage}
                            alt="Our Vision"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurVision
