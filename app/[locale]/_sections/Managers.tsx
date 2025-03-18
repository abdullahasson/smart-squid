"use client"
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { useTranslations } from "next-intl";
import Manager1 from "@/image/manager 1.jpg" 
import Manager2 from "@/image/manager 2.jpg"

const Managers = () => {
  const t = useTranslations("Managers");
  const pathname = usePathname();
  const isRTL = pathname?.startsWith('/ar') || false;

  // Animation variants
  const managerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const managerItemVariants = (isRTL: boolean) => ({
    hidden: { 
      opacity: 0, 
      x: isRTL ? 100 : -100,
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 10
      }
    }
  };

  return (
    <section id="managers" className="w-full">
      <div className="container mx-auto flex flex-col items-end py-12 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="w-full text-end"
        >
          <h2 className="text-[#C74D0A] text-2xl sm:text-3xl font-bold mb-4">
            {t('title')}
          </h2>
        </motion.div>

        {/* Managers Container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={managerContainerVariants}
          className="mt-12 w-full flex flex-col md:flex-col justify-between items-center gap-8"
        >
          {/* Manager 1 */}
          <motion.div 
            variants={managerContainerVariants}
            className="ml-auto flex flex-col md:flex-row-reverse items-center text-end gap-4"
          >
            <motion.div 
              variants={imageVariants}
              className="w-32 h-32 sm:w-40 sm:h-40 relative flex-shrink-0"
              style={{ direction: isRTL ? 'rtl' : 'ltr' }}
            >
              <Image
                src={Manager1}
                alt="atel"
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </motion.div>

            <motion.div 
              variants={managerItemVariants(isRTL)}
              className="flex-1"
            >
              <h3 className="text-[#5E4D9D] text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                {t('manager1')}
              </h3>
              <p className="text-[#7B7B7B] text-lg sm:text-xl font-normal">
                {t("manager1works")}
              </p>
            </motion.div>
          </motion.div>

          {/* Manager 2 */}
          <motion.div 
            variants={managerContainerVariants}
            className="mr-auto flex flex-col md:flex-row-reverse items-center justify-end text-end gap-4"
          >
            <motion.div 
              variants={imageVariants}
              className="w-32 h-32 sm:w-40 sm:h-40 relative flex-shrink-0"
              style={{ direction: isRTL ? 'rtl' : 'ltr' }}
            >
              <Image
                src={Manager2}
                alt="alttt"
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </motion.div>

            <motion.div 
              variants={managerItemVariants(isRTL)}
            >
              <h3 className="text-[#5E4D9D] text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                {t('manager2')}
              </h3>
              <p className="text-[#7B7B7B] text-lg sm:text-xl font-normal">
                {t("manager2works")}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Managers;