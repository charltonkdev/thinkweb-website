"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Partner() {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    title: "/p1.png",
  },
  {
    title: "/p2.png",
  },
  {
    title: "/p3.png",
  },
  {
    title: "/p4.png",
  },
  {
    title: "/p5.png",
  },
];
