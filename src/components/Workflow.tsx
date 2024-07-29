'use client'
import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";
import Image from "next/image";
export default function Workflow() {
    return (
        <div id="features" className="relative flex flex-col w-full items-center h-full gap-0 mt-24">
            <h2 className="text-6xl lg:text-[9rem] font-bold uppercase text-center mb-24">Our <span className="text-orange-500 ">Workflow</span></h2>
            <div className="relative flex flex-col w-full uppercase font-bold text-5xl lg:text-[8rem] rotate-[15deg] my-24 gap-0">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-6  text-center">
                    <span className="text-orange-500">01</span> Concept
                </motion.span>
                <span className="border-b w-[200rem] relative -left-32" />
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="py-6 lg:-top-6 relative text-center">
                    <span className="text-orange-500">02</span> Budget
                </motion.span>
                <span className="border-b w-[200rem] relative -left-32" />
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="py-6 text-center left-6 lg:left-[calc(15vw)] relative">
                    <span className="text-orange-500 ">03</span> Development
                </motion.span>
            </div>
            <div className="grid lg:grid-cols-2 container py-24">
                <div className="relative -top-32 flex flex-col gap-12">
                    <p>
                        Figma ipsum component variant main layer. Link object connection duplicate overflow distribute. Strikethrough align blur asset layer ipsum rotate. Selection project device ipsum device clip inspect font. Style object list group arrange. Selection draft team underline community polygon. Ellipse team flatten draft align distribute slice. Line pen follower boolean draft. Blur subtract content flows rectangle edit. Flows pencil fill bullet effect. Layer frame frame clip fill star underline. Opacity rectangle frame flatten image group link. Vector opacity font library link. Ipsum bold clip plugin star overflow invite stroke flows content.
                    </p>
                    <div className="flex  justify-end w-full">
                        <button type="button" className="flex w-fit relative justify-end gap-3 text-xl md:text-xs bg-orange-500 px-5 py-2 items-center rounded-full cursor-pointer duration-300 hover:bg-yellow-300 hover:text-black hover:shadow-xl hover:shadow-yellow-500/50 group/btn">
                            Explore More <FiArrowDownRight className="group-hover/btn:-rotate-45 duration-100" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image alt="symbol" src="/symbol.png" width={251} height={251} />
                </div>
            </div>
            <div className="relative flex flex-col w-full uppercase font-bold text-5xl lg:text-[8rem] rotate-[15deg] my-24 gap-0">
                <span className="border-b w-[200rem] relative -left-32" />
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="py-6 text-center">
                    <span className="text-orange-500">04</span> Result
                </motion.span>
            </div>
        </div>
    )
}