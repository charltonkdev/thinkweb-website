'use client'
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  offset: number;
  direction?: 'up' | 'down';
  className?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, width, height, alt, offset, direction = 'up', className }) => {
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const element = ref.current;
    if (element) {
      setElementTop(element.getBoundingClientRect().top + window.scrollY || window.scrollY);
      setClientHeight(window.innerHeight);
    }
  }, [ref]);

  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + offset],
    direction === 'up' ? [offset, -offset] : [-offset, offset]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={` ${className}`}>
      <Image src={src} width={width} objectFit='contain' height={height} alt={alt} />
    </motion.div>
  );
};

export default ParallaxImage;
