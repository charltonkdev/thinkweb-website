'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
        setVisible(visible);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-transform bg-[#050505] ${visible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="container flex items-center flex-grow relative w-full">
                <div className="p-2">
                    <Image alt="" src="/logo.png" objectFit="contain" width={182} height={67} />
                </div>
                <div className="hidden md:block mx-auto text-center">
                    <ul className="flex w-full text-sm gap-[50px] uppercase">
                        <li>Home</li>
                        <li><a href="/#services">Services</a></li>
                        <li><a href="/#features">Features</a></li>
                        <li><a href="/#portfolio">Portfolio</a></li>
                        <li><a href="/#teams">Our Teams</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="md:hidden ml-auto p-2">
                    <button onClick={() => setIsOpen(true)}>
                        <FaBars className="text-2xl" />
                    </button>
                </div>
            </div>
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? "0%" : "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 w-3/4 h-[30rem] rounded-bl-3xl bg-orange-500 shadow-lg z-50 flex flex-col items-center p-4 md:hidden"
            >
                <button onClick={() => setIsOpen(false)} className="self-end p-2">
                    <FaTimes className="text-2xl" />
                </button>
                <div className="flex flex-col w-full justify-end h-full bg-orange-500 relative">
                    <ul className="flex h-full flex-col justify-end p-12 gap-6 mt-4 text-lg uppercase">
                        <li onClick={() => setIsOpen(false)}>Home</li>
                        <li onClick={() => setIsOpen(false)}><a href="/#services">Services</a></li>
                        <li onClick={() => setIsOpen(false)}><a href="/#features">Features</a></li>
                        <li onClick={() => setIsOpen(false)}><a href="/#portfolio">Portfolio</a></li>
                        <li onClick={() => setIsOpen(false)}><a href="/#teams">Our Teams</a></li>
                        <li onClick={() => setIsOpen(false)}><a href="/#contact">Contact</a></li>
                    </ul>
                </div>
            </motion.div>
        </header>
    );
}
