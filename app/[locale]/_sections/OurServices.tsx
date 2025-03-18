"use client";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import OurServicesImage from "@/image/our_services.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = (isRTL: boolean) => ({
  hidden: { opacity: 0, x: isRTL ? 100 : -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', stiffness: 120 }
  }
});

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const OurServices = () => {
  const t = useTranslations("OurServices");
  const pathname = usePathname();
  const isRTL = pathname?.startsWith('/ar') || false;

  return (
    <section id="our_services" className="w-full h-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
        className="container flex flex-col py-0 md:flex-row justify-start"
      >
        {/* Image Section */}
        <motion.div 
          variants={imageVariants}
          className="w-full md:w-1/2 h-[600px] relative flex items-center justify-start"
        >
          <div className="relative w-full h-full">
            <Image
              src={OurServicesImage}
              alt="image alt" // Make sure to add this translation key
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority // Important for LCP image
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          variants={containerVariants}
          className="w-full md:w-1/2 h-auto flex flex-col items-center md:items-end justify-center p-4 md:p-8 gap-6 md:gap-12"
          style={{ direction: isRTL ? 'ltr' : 'rtl' }}
        >
          <motion.h2 
            variants={itemVariants(isRTL)}
            className="text-[#C74D0A] text-xl md:text-2xl font-bold text-center md:text-right"
          >
            {t('title')}
          </motion.h2>

          <motion.p 
            variants={itemVariants(isRTL)}
            className="w-full max-w-[500px] text-[#7B7B7B] text-base text-end md:text-xl font-semibold leading-10 md:leading-10"
          >
            {t('description')}
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="flex flex-col sm:flex-row items-center sm:justify-end gap-4 w-full max-w-[500px]"
          >
            <motion.button 
              variants={itemVariants(isRTL)}
              className="btn-section"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('button1')}
            </motion.button>
            <motion.button
              variants={itemVariants(isRTL)}
              className="btn-section"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('button2')}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurServices;