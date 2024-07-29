'use client'
import { motion } from 'framer-motion';
import ParallaxImage from '../components/ParallaxImage';
import { useRef } from 'react';
export default function ServicesHero() {
  const secRef = useRef(null)
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, delay: 0.5 }}
    id="services"
    className="w-full min-h-[50vh] my-52 lg:min-h-[100vh] h-full relative container py-32 flex flex-col">
      <div className="flex w-full items-center relative gap-24 text-4xl md:text-[10vw] xl:text-[150px] uppercase font-bold">
        <div className="relative" >
          <span className="relative z-10 left-24 md:left-0">
            Our
          </span>
          <ParallaxImage
            alt=""
            src="/s1.png"
            width={247}
            height={575}
            offset={100}
            direction="up"
            className="absolute top-0 -right-24 w-[20vw] md:w-fit"
          />
        </div>
        <div ref={secRef} className="block w-fit relative">
          <span className="block relative ml-5 text-orange-500 translate-y-32 z-10">
            Services
          </span>
          <ParallaxImage
            alt=""
            src="/s2.png"
            width={247}
            height={575}
            offset={150}
            direction="down"
            className="absolute -top-24 w-[20vw] md:w-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
