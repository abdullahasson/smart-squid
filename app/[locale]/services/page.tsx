// Next 
import Image from "next/image";
// Next Intl
import { useTranslations } from "next-intl";
// image
import DesignImage from "@/image/design.svg";
import Manage from "@/image/manage.svg"
import Markiting from "@/image/marktiting.svg"
import Social from "@/image/social.svg"

const Services = () => {

    const t = useTranslations("Services")

    return (
        <div>
            <div className="w-full flex flex-col gap-36 py-20 items-center">
                <div className="container flex items-center service-responsive">
                    <div className="order-1 flex-1  h-96 flex items-center justify-center">
                        <Image
                            src={DesignImage}
                            alt="Our Services"
                            width={500} // Set the intrinsic width of the image
                            height={300} // Set the intrinsic height of the image    
                        />
                    </div>

                    <div className="order-2 flex-1 flex items-center justify-center">
                        <div className="text-end w-2/3">
                            <h2 className="text-[#C74D0A] mb-5 text-xl sm:text-3xl font-bold">
                                {t('Service1.title')}
                            </h2>
                            <p className="text-[#7B7B7B] text-base md:text-xl font-semibold">
                                {t('Service1.description')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container flex items-center service-responsive">
                    <div className="order-2 flex-1  h-96 flex items-center justify-center">
                        <Image
                            src={Manage}
                            alt="Our Services"
                            width={500} // Set the intrinsic width of the image
                            height={300} // Set the intrinsic height of the image    
                        />
                    </div>

                    <div className="order-1 flex-1 flex items-center justify-center">
                        <div className="text-end w-2/3">
                            <h2 className="text-[#C74D0A] mb-5 text-xl sm:text-3xl font-bold">
                                {t('Service2.title')}
                            </h2>
                            <p className="text-[#7B7B7B] text-base md:text-xl font-semibold">
                                {t('Service2.description')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container flex items-center service-responsive">
                    <div className="order-1 flex-1  h-96 flex items-center justify-center">
                        <Image
                            src={Markiting}
                            alt="Our Services"
                            width={500} // Set the intrinsic width of the image
                            height={300} // Set the intrinsic height of the image    
                        />
                    </div>

                    <div className="order-2 flex-1 flex items-center justify-center">
                        <div className="text-end w-2/3">
                            <h2 className="text-[#C74D0A] mb-5 text-xl sm:text-3xl font-bold">
                                {t('Service3.title')}
                            </h2>
                            <p className="text-[#7B7B7B] text-base md:text-xl font-semibold">
                                {t('Service3.description')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container flex items-center service-responsive">
                    <div className="order-2 flex-1  h-96 flex items-center justify-center">
                        <Image
                            src={Social}
                            alt="Our Services"
                            width={500} // Set the intrinsic width of the image
                            height={300} // Set the intrinsic height of the image    
                        />
                    </div>

                    <div className="order-1 flex-1 flex items-center justify-center">
                        <div className="text-end w-2/3">
                            <h2 className="text-[#C74D0A] mb-5 text-xl sm:text-3xl font-bold">
                                {t('Service4.title')}
                            </h2>
                            <p className="text-[#7B7B7B] text-base md:text-xl font-semibold">
                                {t('Service4.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;