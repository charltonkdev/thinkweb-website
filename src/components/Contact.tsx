'use client'
import { motion } from "framer-motion";
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiArrowDownRight } from "react-icons/fi";

export default function Contact() {
    return (
        <div className="hidden lg:flex  h-[40rem] flex-col justify-center items-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: 2, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 5 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                id="contact"
                className="relative justify-center py-3 flex lg:flex-row flex-col items-center w-full bg-orange-500 gap-6"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="relative justify-center py-3 flex lg:flex-row flex-col items-center gap-6 w-full"
                >
                    <FaLinkedin className="text-[2rem]" />
                    <FaYoutube className="text-[2rem]" />
                    <span className="text-[3rem] font-bold uppercase">Connect with us</span>
                    <FaInstagram className="text-[2rem]" />
                    <FaFacebook className="text-[2rem]" />
                    <button
                        type="button"
                        className="flex gap-4 items-center justify-center bg-white hover:bg-orange-500 hover:text-white duration-300 text-orange-500 px-12 py-2 rounded-full w-fit"
                    >
                        Get Started <FiArrowDownRight />
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
}
