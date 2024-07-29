'use client'
import { serviceItem1, serviceItem2 } from "../data";
import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ServicesItem() {
    return (
        <div className="relative container flex flex-col w-full h-full lg:gap-32 lg:overflow-visible overflow-hidden">
            <div className="flex flex-col-reverse lg:flex-row gap-12 relative w-full ">
                <div className="flex flex-col gap-6 w-full lg:w-[50vw]">
                    {serviceItem1.map((service) => (
                        <motion.div
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: "0" }}
                            transition={{ duration: 0.5 }}
                            key={service.list} className="flex flex-col relative mb-16">
                            <div className="flex gap-6">
                                <span className="text-orange-500 font-bold text-[60px] leading-none">{service.list}</span>
                                <div className="flex flex-col">
                                    <span className="font-bold text-2xl md:text-[27px] uppercase mb-6">{service.title}</span>
                                    <p>{service.description}</p>
                                </div>

                            </div>
                            <div className="flex justify-end w-full group/cta overflow-hidden">
                                <FiArrowDownRight className="text-5xl hover:-rotate-90 duration-100 text-orange-500 hover:text-white cursor-pointer" />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: "0" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center relative w-full lg:w-[50vw] overflow-hidden">
                    <div className="w-full lg:w-[30vw] h-full flex flex-col justify-center relative">
                        <Image alt="" src="/sl1.png" objectFit="contain" width={561} height={517} className="z-10" />
                        <Image alt="" src="/sl1-e1.png" objectFit="contain" width={462} height={462} className="w-[320px] md:w-full absolute top-12 right-0 z-0" />
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 relative w-full overflow-y-hidden">
                <motion.div
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: "0" }}
                    transition={{ duration: 0.5 }} className="flex flex-col relative w-full lg:w-[50vw]">
                    <div className="w-[30vw] h-full flex flex-col justify-center relative">
                        <Image alt="" src="/sl2.png" objectFit="cover" width={305} height={405} className="relative z-10" />
                        <Image alt="" src="/sl3.png" objectFit="cover" width={305} height={405} className="-top-12 left-52 relative block z-10" />
                        <Image alt="" src="/sl1-e2.png" objectFit="contain" width={462} height={462} className="absolute top-24 left-4 z-0" />
                    </div>

                </motion.div>
                <div className="flex flex-col gap-6 w-full lg:w-[50vw]">
                    {serviceItem2.map((service) => (
                        <motion.div
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: "0" }}
                            transition={{ duration: 0.5 }}
                            key={service.list} className="flex flex-col relative mb-16">
                            <div className="flex gap-6 mb-6">
                                <span className="text-orange-500 font-bold text-[60px] leading-none">{service.list}</span>
                                <div className="flex flex-col">
                                    <span className="font-bold text-2xl md:text-[27px] uppercase mb-6">{service.title}</span>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                            <div className="flex justify-end w-full group/cta">
                                <FiArrowDownRight className="text-5xl hover:-rotate-90 duration-100 text-orange-500 hover:text-white cursor-pointer" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
