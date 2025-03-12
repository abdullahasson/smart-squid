// Next
import Image from "next/image"
// Next Intl
import { useTranslations } from "next-intl"
// Image
import Manager1 from "@/image/manager 1.jpg"
import Manager2 from "@/image/manager 2.jpg"


const Managers = () => {

    const t = useTranslations("Managers")

    return (
        <section id="managers" className="w-full">
            <div className="container mx-auto flex flex-col items-end py-12 pb-16 px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="w-full text-end">
                    <h2 className="text-[#C74D0A] text-2xl sm:text-3xl font-bold mb-4">
                        {t('title')}
                    </h2>
                </div>

                {/* Managers Container */}
                <div className="mt-12 w-full flex flex-col md:flex-col justify-between items-center gap-8">
                    {/* Manager 1 */}
                    <div className="w-full flex-1 flex flex-col md:flex-row-reverse items-center text-end gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 relative flex-shrink-0">
                            <Image
                                src={Manager1}
                                alt="Manager 1"
                                className="rounded-full object-cover"
                                style={{ objectFit: 'contain' }} // Ensures the image fills the container
                            />
                        </div>
                        <div>
                            <h3 className="text-[#5E4D9D] text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                                {t('manager1')}
                            </h3>
                            <p className="text-[#7B7B7B] text-lg sm:text-xl font-normal">
                                {t("manager1works")}
                            </p>
                        </div>
                    </div>

                    {/* Manager 2 */}
                    <div className="w-full flex-1 flex flex-col md:flex-row-reverse items-center md:justify-end text-end gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 relative flex-shrink-0">
                            <Image
                                src={Manager2}
                                alt="Manager 2"
                                className="rounded-full object-cover"
                                style={{ objectFit: 'contain' }} // Ensures the image fills the container
                            />
                        </div>
                        <div>
                            <h3 className="text-[#5E4D9D] text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                                {t('manager2')}
                            </h3>
                            <p className="text-[#7B7B7B] text-lg sm:text-xl font-normal">
                                {t("manager2works")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Managers
