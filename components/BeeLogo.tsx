"use client";

import { motion } from "framer-motion";

export default function BeeLogo() {
  return (
    <motion.div
      className="flex items-center justify-center"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-16 h-16 text-bee-yellow drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Bee body */}
            <ellipse cx="12" cy="12" rx="6" ry="4" />
            {/* Bee stripes */}
            <line x1="9" y1="12" x2="15" y2="12" strokeWidth="1.5" />
            <line x1="8" y1="10" x2="16" y2="10" strokeWidth="1.5" />
            <line x1="8" y1="14" x2="16" y2="14" strokeWidth="1.5" />
            {/* Wings */}
            <ellipse cx="9" cy="10" rx="2" ry="3" opacity="0.6" />
            <ellipse cx="15" cy="10" rx="2" ry="3" opacity="0.6" />
            {/* Antennae */}
            <line x1="10" y1="8" x2="9" y2="5" strokeWidth="1.5" />
            <line x1="14" y1="8" x2="15" y2="5" strokeWidth="1.5" />
            <circle cx="9" cy="4" r="0.8" />
            <circle cx="15" cy="4" r="0.8" />
            {/* Stinger */}
            <path d="M18 12 L20 14" strokeWidth="1.5" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-bee-yellow/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}

