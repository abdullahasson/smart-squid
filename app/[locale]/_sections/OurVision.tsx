"use client";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import OurVisionImage from "@/image/our_vision.png";

// Reusable animation variants (can be moved to a separate file)
const visionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2,
            when: "beforeChildren"
        }
    }
};

const visionItemVariants = (isRTL: boolean) => ({
    hidden: {
        opacity: 0,
        x: isRTL ? 100 : -100,
        rotate: isRTL ? 5 : -5
    },
    visible: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 15
        }
    }
});

const visionImageVariants = (isRTL: boolean) => ({
    hidden: {
        opacity: 0,
        scale: 0.9,
        x: isRTL ? -100 : 100
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: 'anticipate'
        }
    }
});

const OurVision = () => {
    const t = useTranslations("OurVision");
    const pathname = usePathname();
    const isRTL = pathname?.startsWith('/ar') || false;

    return (
        <section id="our_vision" className="w-full">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                variants={visionContainerVariants}
                className="container mx-auto py-12 flex flex-col-reverse md:flex-row items-center justify-center text-end"
            >
                {/* Content Section */}
                <motion.div
                    variants={visionContainerVariants}
                    className="w-full md:w-1/2 flex flex-col items-end justify-center gap-4 p-6 md:p-12"
                    style={{ direction: isRTL ? 'ltr' : 'rtl' }}
                >
                    <motion.h2
                        variants={visionItemVariants(isRTL)}
                        className="text-[#C74D0A] text-xl md:text-2xl font-bold mb-4"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.p
                        variants={visionItemVariants(isRTL)}
                        className="text-[#7B7B7B] text-base md:text-xl font-semibold leading-7 md:leading-10"
                    >
                        {t('description')}
                    </motion.p>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    variants={visionImageVariants(isRTL)}
                    className="w-full md:w-1/2 h-[400px] flex items-center justify-center p-6 md:p-12"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={OurVisionImage}
                            alt="alt image" // Add this translation key
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={true} // Important for LCP
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default OurVision;