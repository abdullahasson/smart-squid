import Image from "next/image"
import OurGoalsImage from "@/image/OurGoals.png";


const OurGoals = () => {
    return (
        <section id="our_goals" className="w-full h-screen">
            <div className="container mx-auto flex">
                <div className="w-1/2 h-screen flex justify-center items-center">
                    <Image src={OurGoalsImage} alt="Our Goals" width={1000} height={1000} />
                </div>
                <div className="w-1/2 h-screen flex flex-col justify-center items-end">
                    <div className="flex flex-col items-end justify-center w-11/12">
                        <h2 className="text-[#C74D0A] text-2xl font-bold mb-4">
                            أهدافنا
                        </h2>
                        <div className="flex flex-col items-end justify-center gap-4 text-lg text-black w-full">
                            <div className="bg-white shadow-lg rounded-xl py-2 px-1 font-normal text-xl text-center flex items-center justify-center w-full h-16 ">تعزيز الحضور الرقمي</div>
                            <div className="bg-white shadow-lg rounded-xl py-2 px-1 font-normal text-xl text-center flex items-center justify-center w-full h-16 ">تحقيق النمو المستدام</div>
                            <div className="bg-white shadow-lg rounded-xl py-2 px-1 font-normal text-xl text-center flex items-center justify-center w-full h-16 ">الابتكار المستمر</div>
                            <div className="bg-white shadow-lg rounded-xl py-2 px-1 font-normal text-xl text-center flex items-center justify-center w-full h-16 ">التفاعل الفعّال مع العملاء</div>
                            <div className="bg-white shadow-lg rounded-xl py-2 px-1 font-normal text-xl text-center flex items-center justify-center w-full h-16 ">تحقيق نتائج متميزة</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurGoals
