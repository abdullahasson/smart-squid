import Image from "next/image"
import OurVisionImage from "@/image/our_vision.png"

const OurVision = () => {
    return (
        <section id="our_vision" className="w-full h-full">
            <div className="container mx-auto flex text-end">
                <div className="h-screen w-1/2 flex flex-col items-end justify-center gap-6 pr-12">
                    <h2 className="text-[#C74D0A] mb-4 text-2xl font-bold">رؤيتنا</h2>
                    <p className="text-[#7B7B7B] text-xl font-semibold leading-10">
                        نحن في حبار الذكية نسعى إلى أن نكون روادًا في تقديم حلول
                        <br />
                        مبتكرة ومتكاملة في مجال الدعاية والإعلان، مما يساعد
                        <br />
                        الشركات على تعزيز وجودها الرقمي وتحقيق النجاح المستدام.
                        <br />
                        رؤيتنا هي أن نكون الشريك الاستراتيجي الذي يحقق التحول
                        <br />
                        الرقمي من خلال تقديم خدمات تسويقية متميزة، سواء عبر
                        <br />
                        منصات الإنترنت أو من خلال الحملات الإعلانية المدفوعة، مع
                        <br />
                        التركيز على الإبداع والجودة في كل خطوة.
                    </p>
                </div>
                <div className="h-screen w-1/2 flex items-center justify-center">
                    <Image src={OurVisionImage} alt="Our Vision" width={1000} height={1000} />
                </div>
            </div>
        </section>
    )
}

export default OurVision
