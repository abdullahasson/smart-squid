"use client"

// Next
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Next-Intl
import { useTranslations } from "next-intl";
// Framer-Motion
import { motion } from 'framer-motion';
// Image 
import Partner1 from "@/image/partner 1.png";
import Partner2 from "@/image/partner 2.png";

const SuccessPartners = () => {
  const t = useTranslations("SuccessPartners");
  const pathname = usePathname();
  const isRTL = pathname?.startsWith('/ar') || false;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.7
      }
    }
  };

  const itemVariants = (direction = 'left') => ({
    hidden: { 
      opacity: 0, 
      x: direction === 'left' ? -100 : 100,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15
      }
    }
  });

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="success_partners" className="w-full">
      <div className="container pt-12 mx-auto flex flex-col items-end">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={headingVariants}
          className="w-full text-end"
        >
          <h2 className="text-[#C74D0A] text-2xl sm:text-3xl font-bold">
            {t('title')}
          </h2>
        </motion.div>

        {/* Images Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="w-full flex flex-col md:flex-row-reverse justify-between items-center gap-6"
        >
          {/* Partner 1 Image */}
          <motion.div
            variants={itemVariants(isRTL ? 'right' : 'left')}
            className="w-full md:w-1/2 h-64 sm:h-96 overflow-hidden flex items-end justify-center"
          >
            <Image
              src={Partner1}
              alt="alllw"
              className="w-full h-full object-cover"
              style={{ objectFit: 'contain' }}
              width={500}
              height={300}
              priority
            />
          </motion.div>

          {/* Partner 2 Image */}
          <motion.div
            variants={itemVariants(isRTL ? 'left' : 'right')}
            className="w-full md:w-1/2 h-64 sm:h-96 overflow-hidden flex items-end justify-center"
          >
            <Image
              src={Partner2}
              alt="aeeo"
              className="w-full h-full object-cover"
              width={500}
              height={300}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessPartners;