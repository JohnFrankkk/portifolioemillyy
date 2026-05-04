"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Estratégia.", "Conteúdo.", "Design.", "Emilly Yasmin"];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Sequence the words rapidly
    if (index < words.length - 1) {
      const timeout = setTimeout(() => {
        setIndex(prev => prev + 1);
      }, index === 0 ? 600 : 300);
      return () => clearTimeout(timeout);
    } else {
      // Hold the last word briefly, then remove preloader
      const timeout = setTimeout(() => setIsComplete(true), 1200);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      
      {/* 5 Column Curtain Reveal */}
      <div className="absolute inset-0 flex w-full h-full">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={`col-${i}`}
            className="h-full flex-1 bg-navy border-r border-navy/10"
            initial={{ y: "0%" }}
            animate={index === words.length - 1 ? { y: "100%" } : {}}
            transition={{
              duration: 0.8,
              delay: 0.5 + i * 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        ))}
      </div>

      {/* Flashing Text */}
      <div className="relative z-10 flex items-center justify-center">
        {words.map((word, i) => (
          index === i && (
            <motion.div
              key={word}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
              transition={{ duration: 0.2 }}
              className={`absolute font-display font-black text-5xl md:text-8xl uppercase tracking-tighter text-center w-screen px-4
                ${i === words.length - 1 ? "text-lime drop-shadow-[4px_4px_0px_#FF9FD3]" : "text-cream"}
              `}
            >
              {word}
            </motion.div>
          )
        ))}
      </div>

    </div>
  );
}
