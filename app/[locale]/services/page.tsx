'use client'; // Essential for Framer Motion with Next.js

// Next 
import Image from "next/image";
// Next Intl
import { useTranslations, useLocale } from "next-intl";
// Framer Motion
import { motion, Variants } from "framer-motion";
// image
import DesignImage from "@/image/design.svg";
import Manage from "@/image/manage.svg";
import Markiting from "@/image/marktiting.svg";
import Social from "@/image/social.svg";

const Services: React.FC = () => {
  const t = useTranslations("Services");
  const locale = useLocale();
  const isRTL: boolean = locale === 'ar';

  // Animation variants with TypeScript types
  const imageAnimation = (order: number): Variants => ({
    initial: { 
      opacity: 0, 
      x: order === 1 ? (isRTL ? 100 : -100) : (isRTL ? -100 : 100) 
    },
    whileInView: { 
      opacity: 1, 
      x: 0 
    },
  });

  const textAnimation = (order: number): Variants => ({
    initial: { 
      opacity: 0, 
      x: order === 2 ? (isRTL ? -100 : 100) : (isRTL ? 100 : -100) 
    },
    whileInView: { 
      opacity: 1, 
      x: 0 
    },
  });

  const commonProps: {
    viewport: { once: boolean; margin: string };
    transition: { type: string; stiffness: number; damping: number };
  } = {
    viewport: { once: true, margin: "0px 0px -50px 0px" },
    transition: { type: "spring", stiffness: 50, damping: 10 }
  };

  return (
    <div className="w-full flex flex-col gap-36 py-20 items-center">
      {/* Service 1 */}
      <div className="container flex items-center service-responsive">
        <motion.div
          {...commonProps}
          variants={imageAnimation(1)}
          initial="initial"
          whileInView="whileInView"
          className="order-1 flex-1 h-96 flex items-center justify-center"
        >
          <Image
            src={DesignImage}
            alt="Our Services"
            width={500}
            height={300}
          />
        </motion.div>

        <motion.div
          {...commonProps}
          variants={textAnimation(2)}
          initial="initial"
          whileInView="whileInView"
          className="order-2 flex-1 flex items-center justify-center"
        >
          <div className="text-end w-2/3">
            <h2 className="text-[#C74D0A] mb-5 text-xl sm:text-3xl font-bold">
              {t('Service1.title')}
            </h2>
            <p className="text-[#7B7B7B] text-base md:text-xl font-semibold">
              {t('Service1.description')}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Service 2 */}
      <div className="container flex items-center service-responsive">
        <motion.div
          {...commonProps}
          variants={imageAnimation(2)}
          initial="initial"
          whileInView="whileInView"
          className="order-2 flex-1 h-96 flex items-center justify-center"
        >
          <Image
            src={Manage}
            alt="Our Services"
            width={500}
            height={300}
          />
        </motion.div>

        <motion.div
          {...commonProps}
          variants={textAnimation(1)}
          initial="initial"
          whileInView="whileInView"
          className="order-1 flex-1 flex items-center justify-center"
        >
          <div className="text-end w-2/3">
            <h2 className="text-[#C74D0A] mb-5 text-xl sm:text-3xl font-bold">
              {t('Service2.title')}
            </h2>
            <p className="text-[#7B7B7B] text-base md:text-xl font-semibold">
              {t('Service2.description')}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Service 3 */}
      <div className="container flex items-center service-responsive">
        <motion.div
          {...commonProps}
          variants={imageAnimation(1)}
          initial="initial"
          whileInView="whileInView"
          className="order-1 flex-1 h-96 flex items-center justify-center"
        >
          <Image
            src={Markiting}
            alt="Our Services"
            width={500}
            height={300}
          />
        </motion.div>

        <motion.div
          {...commonProps}
          variants={textAnimation(2)}
          initial="initial"
          whileInView="whileInView"
          className="order-2 flex-1 flex items-center justify-center"
        >
          <div className="text-end w-2/3">
            <h2 className="text-[#C74D0A] mb-5 text-xl sm:text-3xl font-bold">
              {t('Service3.title')}
            </h2>
            <p className="text-[#7B7B7B] text-base md:text-xl font-semibold">
              {t('Service3.description')}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Service 4 */}
      <div className="container flex items-center service-responsive">
        <motion.div
          {...commonProps}
          variants={imageAnimation(2)}
          initial="initial"
          whileInView="whileInView"
          className="order-2 flex-1 h-96 flex items-center justify-center"
        >
          <Image
            src={Social}
            alt="Our Services"
            width={500}
            height={300}
          />
        </motion.div>

        <motion.div
          {...commonProps}
          variants={textAnimation(1)}
          initial="initial"
          whileInView="whileInView"
          className="order-1 flex-1 flex items-center justify-center"
        >
          <div className="text-end w-2/3">
            <h2 className="text-[#C74D0A] mb-5 text-xl sm:text-3xl font-bold">
              {t('Service4.title')}
            </h2>
            <p className="text-[#7B7B7B] text-base md:text-xl font-semibold">
              {t('Service4.description')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;