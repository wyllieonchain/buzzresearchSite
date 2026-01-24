"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const founders = [
  {
    name: "Malcolm Wyllie",
    description:
      "Malcolm brings deep expertise in crypto marketing and product development, with a proven track record of growth. He played a key role in scaling oku.trade, helping transform it into a leading platform in the DeFi space. His background spans both traditional marketing strategies and cutting-edge crypto-native approaches, making him uniquely positioned to build products that resonate with the Web3 community.",
    image: "/malcolm.jpg",
  },
  {
    name: "Gavin Anderson",
    description:
      "Gavin is a fullstack engineer with extensive experience building across the entire tech stack. He's developed sophisticated AI tooling, deployed smart contracts on Ethereum, Base, and Solana, and specializes in system design at scale. His technical depth spans from low-level blockchain interactions to high-level product architecture, enabling him to build robust, scalable systems that power innovative consumer products.",
    image: "/gavin.jpg",
  },
];

function FounderCard({
  name,
  description,
  image,
  index,
}: {
  name: string;
  description: string;
  image: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 hover:border-bee-yellow/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)]">
        {/* Image */}
        <motion.div
          className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-bee-yellow/30 group-hover:border-bee-yellow/60 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            sizes="128px"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bee-yellow/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 text-center text-bee-yellow group-hover:text-bee-gold transition-colors">
          {name}
        </h3>
        <p className="text-gray-300 leading-relaxed text-center">{description}</p>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-bee-yellow/0 to-bee-amber/0 group-hover:from-bee-yellow/5 group-hover:to-bee-amber/5 transition-all duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function Founders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-950/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-bee-yellow bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Founders
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <FounderCard
              key={founder.name}
              name={founder.name}
              description={founder.description}
              image={founder.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

