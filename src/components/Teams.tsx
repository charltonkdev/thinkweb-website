'use client'
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

export default function Teams() {
    return (
        <motion.div
            initial={{ opacity: 0, y: "5rem" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration0: 0.3, delay: 0.5, ease: "easeInOut" }}
            id="teams"
            className="relative flex flex-col w-full h-full py-52 container">
            <div
                className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col">
                    <h3 className="text-7xl lg:text-[8rem] font-bold leading-none uppercase pb-12">The mind<br />
                        <span className="text-orange-500">Behind</span><br />
                        <span className="block text-[3rem]">our<span className=" text-orange-500"> creative</span> team</span>
                    </h3>
                </div>
                <Image alt="" src="/c1.png" width={416} height={416} objectFit="cover" />
            </div>
            <div className="masonry pt-12">
                <div className="masonry-item masonry-item-1">
                    <Image alt="" src="/c2.png" width={405} height={707} objectFit="cover" />
                </div>
                <div className="masonry-item">
                    <Image alt="" src="/c3.png" width={392} height={392} objectFit="cover" className="relative block lg:-left-32" />
                </div>
                <div className="masonry-item">
                    <Image alt="" src="/c4.png" width={308} height={308} objectFit="cover" />
                </div>
                <div className="masonry-item masonry-item-4">
                    <Image alt="" src="/c5.png" width={547} height={289} objectFit="cover" />
                </div>
            </div>
        </motion.div >
    )
}