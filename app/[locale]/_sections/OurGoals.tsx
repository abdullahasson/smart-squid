"use client";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import OurGoalsImage from "@/image/OurGoals.png";

// Animation variants
const goalsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const goalsItemVariants = (isRTL: boolean) => ({
    hidden: {
        opacity: 0,
        y: 30,
        x: isRTL ? 50 : -50
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 250,
            damping: 30,
        }
    }
});

const imageVariants = (isRTL: boolean) => ({
    hidden: {
        opacity: 0,
        scale: 0.95,
        x: isRTL ? 100 : -100
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
});

const OurGoals = () => {
    const t = useTranslations("OurGoals");
    const pathname = usePathname();
    const isRTL = pathname?.startsWith('/ar') || false;

    return (
        <section id="our_goals" className="w-full py-12 sm:py-0">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                variants={goalsContainerVariants}
                className="container mx-auto py-12 flex flex-col lg:flex-row items-center justify-center"
            >
                {/* Image Section */}
                <motion.div
                    variants={imageVariants(isRTL)}
                    className="w-full lg:w-1/2 h-auto flex justify-center items-center p-4 sm:p-8"
                >
                    <Image
                        src={OurGoalsImage}
                        alt="alt imaa"
                        width={600}
                        height={600}
                        className="w-full h-auto max-w-md lg:max-w-lg"
                        priority
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    variants={goalsContainerVariants}
                    className="w-full lg:w-1/2 h-auto flex flex-col justify-center items-end p-4 sm:p-8"
                    style={{ direction: isRTL ? 'ltr' : 'rtl' }}
                >
                    <div className="w-full text-end mb-10">
                        <motion.h2
                            variants={goalsItemVariants(isRTL)}
                            className="text-[#C74D0A] text-2xl sm:text-3xl font-bold pt-6 mb-4"
                        >
                            {t('title')}
                        </motion.h2>

                        <motion.div
                            variants={goalsContainerVariants}
                            className="flex flex-col items-end justify-center gap-4 w-full"
                        >
                            {[1, 2, 3, 4, 5].map((index) => (
                                <motion.div
                                    key={index}
                                    variants={goalsItemVariants(isRTL)}
                                    className="bg-white shadow-lg rounded-xl py-3 px-4 font-normal text-lg sm:text-xl text-center flex items-center justify-center w-full h-16 sm:h-20"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                    }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {t(`goal${index}`)}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default OurGoals;