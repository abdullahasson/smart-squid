import Image from "next/image"
import OurGoalsImage from "@/image/OurGoals.png";


const OurGoals = () => {
    return (
        <section id="our_goals" className="w-full py-12 sm:py-0">
            <div className="container mx-auto py-12 flex flex-col lg:flex-row items-center justify-center">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-auto flex justify-center items-center p-4 sm:p-8">
                    <Image
                        src={OurGoalsImage}
                        alt="Our Goals"
                        width={600} // Adjusted for responsiveness
                        height={600} // Adjusted for responsiveness
                        className="w-full h-auto max-w-md lg:max-w-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 h-auto flex flex-col justify-center items-end p-4 sm:p-8">
                    {/* Heading */}
                    <div className="w-full text-end mb-10">
                        <h2 className="text-[#C74D0A] text-2xl sm:text-3xl font-bold pt-6 mb-4">
                            أهدافنا
                        </h2>
                        <div className="flex flex-col items-end justify-center gap-4 w-full">
                            {[
                                "تعزيز الحضور الرقمي",
                                "تحقيق النمو المستدام",
                                "الابتكار المستمر",
                                "التفاعل الفعّال مع العملاء",
                                "تحقيق نتائج متميزة",
                            ].map((goal, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-lg rounded-xl py-3 px-4 font-normal text-lg sm:text-xl text-center flex items-center justify-center w-full h-16 sm:h-20"
                                >
                                    {goal}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurGoals
