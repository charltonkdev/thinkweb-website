'use client'
import { motion } from "framer-motion";
import Image from "next/image";

export default function Results() {
    return (
        <div id="portfolio" className="relative py-32 flex flex-col w-full items-center h-full gap-0">
            <div className="flex flex-col gap-0 font-bold uppercase text-5xl lg:text-[8rem] leading-[0.8em] w-screen mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: "3rem" }}
                    whileInView={{ opacity: 1, y: "0" }}
                    transition={{ duration: 0.3 }}
                    className="text-orange-500 container">
                    Results Tells
                </motion.span>
            </div>
            <div className="flex flex-col w-full bg-orange-500 overflow-hidden">
                <motion.span
                    initial={{ opacity: 0, y: "-3rem" }}
                    whileInView={{ opacity: 1, y: "0" }}
                    transition={{ duration: 0.3, delay: 0.5 }} className=" font-bold uppercase text-5xl lg:text-[8rem] leading-[0.8em] pb-12 container">
                    More About Us
                </motion.span>
                <motion.div
                initial={{ opacity: 0, y:"5rem" }}
                whileInView={{ opacity: 1, y:"0" }}
                transition={{ duration: 0.3, delay:  0.7 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 container py-24">
                    <div>
                        <Image alt="" src="/r1.png" objectFit="contain" width={460} height={464} />
                    </div>
                    <div>
                        <Image alt="" src="/r2.png" objectFit="contain" width={460} height={464} />
                    </div>
                    <div className="flex flex-col p-12">
                        <h4 className="uppercase text-xl mb-4 font-bold">
                            Create your brand</h4>
                        <p>Figma ipsum component variant main layer. Edit group inspect style thumbnail duplicate connection auto pixel. Prototype clip arrow ellipse create. Blur subtract content flows rectangle edit. Flows pencil fill bullet effect. Layer frame frame clip fill star underline. Opacity rectangle frame flatten image group link.</p>
                    </div>
                    <div>
                        <Image alt="" src="/r3.png" objectFit="contain" width={460} height={464} />
                    </div>
                    <div>
                        <Image alt="" src="/r4.png" objectFit="contain" width={460} height={464} />
                    </div>
                    <div>
                        <Image alt="" src="/r5.png" objectFit="contain" width={460} height={464} />
                    </div>
                    <div className="flex flex-col p-12">
                        <h4 className="uppercase text-xl mb-4 font-bold">
                            Make it famous</h4>
                        <p>Figma ipsum component variant main layer. Edit group inspect style thumbnail duplicate connection auto pixel. Prototype clip arrow ellipse create. Blur subtract content flows rectangle edit. Flows pencil fill bullet effect. Layer frame frame clip fill star underline. Opacity rectangle frame flatten image group link.</p>
                    </div>
                    <div>
                        <Image alt="" src="/r6.png" objectFit="contain" width={460} height={464} />
                    </div>
                    <div>
                        <Image alt="" src="/r7.png" objectFit="contain" width={460} height={464} />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}