"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Keep this if your new project has lib/utils

export function HeroSection({
  className,
  fill = "white",
  opacity = 0.21,
}) {
  return (
    <section className={cn("relative overflow-hidden bg-background", className)}>
      {/* Spotlight Background */}
      <svg
        className="pointer-events-none absolute inset-0 z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 animate-spotlight"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
        aria-hidden="true"
      >
        <g filter="url(#spotlight-filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill={fill}
            fillOpacity={opacity}
          />
        </g>
        <defs>
          <filter
            id="spotlight-filter"
            x="0"
            y="0"
            width="3787"
            height="2842"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="150" />
          </filter>
        </defs>
      </svg>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
        {/* Text Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Build Modern Web Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Create fast, beautiful landing pages using Next.js, Tailwind CSS,
            Framer Motion, and self-contained reusable components.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex gap-4"
          >
            <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium hover:opacity-90">
              Get Started
            </button>

            <button className="rounded-md border border-border px-6 py-3 font-medium hover:bg-accent">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/hero.png"
            alt="Hero illustration"
            width={1200}
            height={800}
            className="rounded-2xl shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
