import Image from "next/image"
import Manager1 from "@/image/manager 1.jpg"
import Manager2 from "@/image/manager 2.jpg"


const Managers = () => {

    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col items-end pt-10 pb-12 px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="w-full text-end mb-10">
                    <h2 className="text-[#C74D0A] text-2xl sm:text-3xl font-bold pt-6 mb-4">
                        المدراء
                    </h2>
                </div>

                {/* Managers Container */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Manager 1 */}
                    <div className="w-full md:w-1/2 flex flex-col md:flex-row-reverse items-center text-end gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 relative flex-shrink-0">
                            <Image
                                src={Manager1}
                                alt="Manager 1"
                                className="rounded-full object-cover"
                                layout="fill" // Ensures the image fills the container
                            />
                        </div>
                        <div>
                            <h3 className="text-[#5E4D9D] text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                                حسين أحمد ال منقاح
                            </h3>
                            <p className="text-[#7B7B7B] text-lg sm:text-xl font-normal">
                                المؤسس المشارك و المدير الأبداعي
                            </p>
                        </div>
                    </div>

                    {/* Manager 2 */}
                    <div className="w-full md:w-1/2 flex flex-col md:flex-row-reverse items-center text-end gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 relative flex-shrink-0">
                            <Image
                                src={Manager2}
                                alt="Manager 2"
                                className="rounded-full object-cover"
                                layout="fill" // Ensures the image fills the container
                            />
                        </div>
                        <div>
                            <h3 className="text-[#5E4D9D] text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                                عماد براك اليابسي
                            </h3>
                            <p className="text-[#7B7B7B] text-lg sm:text-xl font-normal">
                                المؤسس المشارك و مدير التسويق الرقمي
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Managers
