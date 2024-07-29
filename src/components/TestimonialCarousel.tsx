'use client'
import type React from 'react';
import { useEffect, useState } from 'react';
import EmblaCarousel from './ui/Carousel/EmblaCarousel';
import type { EmblaOptionsType } from 'embla-carousel';
import '../css/embla.css';
import Image from 'next/image';

interface SlideData {
    imageUrl: string;
    text?: string;
    desc?: string;
}

const TestimonialCarousel: React.FC = () => {
    const [isClient, setIsClient] = useState(false); // Track if component is on client-side

    useEffect(() => {
        setIsClient(true); // Set to true on client-side
    }, []);

    const SLIDES_DATA: SlideData[] = [
        {
            imageUrl: '/t1.png',
            text: '',
            desc: ''
        },
        {
            imageUrl: '/t2.png',
            text: '',
            desc: '',
        },
        {
            imageUrl: '/t3.png',
            text: '',
            desc: '',
        },
        {
            imageUrl: '/t1.png',
            text: '',
            desc: ''
        },
        {
            imageUrl: '/t2.png',
            text: '',
            desc: '',
        },
        {
            imageUrl: '/t3.png',
            text: '',
            desc: '',
        },
    ];

    const OPTIONS: EmblaOptionsType = { align: 'start' };

    const slides = SLIDES_DATA.map((slide, index) => (
        <div key={slide.text} className="embla__slide">
            <Image src={slide.imageUrl} alt="Slide" width={433} height={355} className="w-full h-full object-cover rounded-xl" />
            <div className="embla__slide__inner relative pt-3 left-3 w-full">
                <p className="text-white text-2xl font-semibold">{slide.text}</p>
                <p className="text-neutral-500 text-lg">{slide.desc}</p>
            </div>
        </div>
    ));

    return (
        <div className='w-full flex flex-col'>
            {isClient && (
                <EmblaCarousel slides={slides} options={OPTIONS} />
            )}
        </div>
    );
}

export default TestimonialCarousel;
