'use client'
import { FiArrowDownRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
    const [animationStep, setAnimationStep] = useState(0);

    return (
        <div id="/#home" className="flex flex-col h-full justify-end lg:h-screen items-center container relative py-24 overflow-hidden">
            <div className="z-10 relative flex flex-col items-center w-full">
                <div className="h-fit overflow-hidden relative block">
                    <motion.h1
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        onAnimationComplete={() => setAnimationStep(1)}
                        className="font-bold text-5xl md:text-8xl lg:text-[160px] uppercase text-orange-500 leading-none relative overflow-hidden w-full text-center">
                        Marketing
                    </motion.h1>
                </div>
                    <div className="relative overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, y: "-100%" }}
                            animate={{ opacity: 1, y: "0" }}
                            transition={{ duration: 0.5 }}
                            onAnimationComplete={() => setAnimationStep(2)}
                            className="flex gap-5 w-full"
                        >
                            <span className="text-white mt-2 text-2xl lg:text-[80px] leading-none">
                                for<br/>
                                by
                            </span>
                            <div className="flex flex-col md:items-end">
                                <span className="font-bold text-5xl md:text-8xl lg:text-[160px] uppercase text-yellow-300 mt-2 leading-none">
                                    Artists
                                </span>
                                {animationStep >= 2 && (
                                    <div className="w-fit relative overflow-hidden">
                                        <motion.span
                                            initial={{ opacity: 0, x: "100%" }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5 }}
                                            onAnimationComplete={() => setAnimationStep(3)}
                                            className="pr-2 text-white"
                                        >
                                            Creative Mind, Creative Works
                                        </motion.span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
            </div>

                <div className="flex flex-col md:flex-row gap-6 items-center mt-24 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        onAnimationComplete={() => setAnimationStep(4)}
                        className="flex flex-col md:flex-row gap-6 items-center text-white"
                    >
                        <p className="capitalize">modern <span className="text-orange-500">problem</span> requires modern <span className="text-orange-500">solution</span></p>
                        <span className="flex gap-3 text-xl md:text-xl bg-orange-500 px-5 py-2 items-center rounded-full cursor-pointer duration-300 hover:bg-yellow-300 hover:text-black hover:shadow-xl hover:shadow-yellow-500/50 group/btn">
                            Let&apos;s Connect <FiArrowDownRight className="group-hover/btn:-rotate-45 duration-300"/>
                        </span>
                    </motion.div>
                </div>
            
                <motion.div
                    initial={{ opacity: 0  }}
                    animate={{ opacity: 1  }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 z-0 bg-grid-white/[0.2] w-full h-[50rem]">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#050505] bg-[#050505] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]" />
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#050505] bg-[#050505] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]" />
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#050505] bg-[#050505] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]" />
                </motion.div>
        </div>
    )
}
