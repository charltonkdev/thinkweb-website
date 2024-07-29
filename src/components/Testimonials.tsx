import TestimonialCarousel from "./TestimonialCarousel";

export default function Testimonials() {
    return (
        <div className="relative py-32 flex flex-col w-full items-center h-full gap-0">
            <div className="flex flex-col lg:flex-row gap-3 px-12 ">
                <div className="flex flex-col ">
                    <h2 className="leading-none font-bold uppercase text-7xl lg:text-[7rem]">What <span className="text-orange-500">Clients</span><br />Say <span className="text-orange-500">About</span> Us</h2>
                </div>
                <div className="flex flex-col leading-none font-bold uppercase relative -top-6">
                    <span className="text-2xl lg:text-[18rem] text-orange-500">?</span>
                    <span className="text-xs">Message from  our clients</span>
                </div>
            </div>
            <TestimonialCarousel />
        </div>
    )
}