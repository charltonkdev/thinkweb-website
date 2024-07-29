import Image from "next/image";
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="block relative py-12 container">
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="flex flex-col">
                    <Image alt="flogo" src="/flogo.png" width={320} height={120} objectFit="cover" />
                    <div className="flex items-center justify-start gap-6 text-[2rem] ">
                        <FaLinkedin className="hover:text-orange-500 duration-300 cursor-pointer hover:text-[1.8rem]" />
                        <FaYoutube className="hover:text-orange-500 duration-300 cursor-pointer hover:text-[1.8rem]" />
                        <FaInstagram className="hover:text-orange-500 duration-300 cursor-pointer hover:text-[1.8rem]" />
                        <FaFacebook className="hover:text-orange-500 duration-300 cursor-pointer hover:text-[1.8rem]" />
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-3xl font-bold text-orange-500 uppercase">Services</h4>
                        <ul>
                            <li className="hover:text-orange-500 duration-300 cursor-pointer relative hover:left-2 left-0">Web Design</li>
                            <li className="hover:text-orange-500 duration-300 cursor-pointer relative hover:left-2 left-0">PR Campaign</li>
                            <li className="hover:text-orange-500 duration-300 cursor-pointer relative hover:left-2 left-0">UI/UX Design</li>
                            <li className="hover:text-orange-500 duration-300 cursor-pointer relative hover:left-2 left-0">Event Management</li>
                            <li className="hover:text-orange-500 duration-300 cursor-pointer relative hover:left-2 left-0">Social Media Strategy</li>
                            <li className="hover:text-orange-500 duration-300 cursor-pointer relative hover:left-2 left-0">Mobile App Development</li>
                            <li className="hover:text-orange-500 duration-300 cursor-pointer relative hover:left-2 left-0">Video Creation and Promotion</li>
                            <li className="hover:text-orange-500 duration-300 cursor-pointer relative hover:left-2 left-0">Online Reputation Management</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-3xl font-bold text-orange-500 uppercase">Location</h4>
                        <span className="max-w-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-3xl font-bold text-orange-500 uppercase">Contact</h4>
                        think@lorem.com<br />
                        012 - 3456 789
                    </div>
                </div>
            </div>
        </div>
    )
}