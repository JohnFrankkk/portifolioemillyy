"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight, Sparkles, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen md:h-screen bg-cream overflow-hidden flex flex-col">
      
      {/* Background Scrolling Text (Marquee Effect) */}
      <div className="absolute inset-0 z-0 flex flex-col justify-between py-20 pointer-events-none opacity-[0.03]">
        <motion.div 
          className="whitespace-nowrap font-display font-black text-[20vw] leading-none text-navy"
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          SOCIAL MEDIA · DIREÇÃO CRIATIVA · SOCIAL MEDIA · DIREÇÃO CRIATIVA
        </motion.div>
        <motion.div 
          className="whitespace-nowrap font-display font-black text-[20vw] leading-none text-navy"
          animate={{ x: [-2000, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          ESTRATÉGIA · BRANDING · ESTRATÉGIA · BRANDING · ESTRATÉGIA
        </motion.div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-8 px-[5vw] flex justify-between items-center z-50">
        <div className="font-display font-bold text-2xl text-navy">EMILLY.Y</div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-lime border-2 border-navy rounded-full px-4 py-2 text-sm font-bold uppercase shadow-[2px_2px_0px_0px_rgba(26,27,65,1)]">
            <span className="w-2 h-2 rounded-full bg-navy animate-pulse"></span>
            Open for work
          </div>
          <div className="font-bold text-navy uppercase border-2 border-transparent hover:border-navy px-4 py-2 rounded-full transition-all text-sm md:text-base">Menu</div>
        </div>
      </nav>

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col md:flex-row px-[5vw] flex-1 h-full mt-20 md:mt-0">
        
        {/* Left Column: Typography */}
        <div className="w-full md:w-[55%] h-full flex flex-col justify-center pt-10 md:pt-16 pb-10 z-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-4">
              <Star className="text-pink animate-spin-slow w-8 md:w-10" fill="currentColor" />
              <h2 className="font-script text-purple text-3xl md:text-5xl -rotate-6">olá, eu sou a Emilly!</h2>
            </div>
            
            <h1 className="font-display font-black text-[13vw] md:text-[6.5vw] leading-[0.85] text-navy uppercase tracking-tight flex flex-col">
              <span>Construindo</span>
              <span className="flex items-center gap-2 md:gap-4 flex-wrap">
                Marcas
                <span className="bg-pink text-cream px-4 md:px-6 py-1 md:py-2 rounded-full border-4 border-navy text-[9vw] md:text-[4vw] -rotate-3 my-2 shadow-[4px_4px_0px_0px_rgba(26,27,65,1)]">
                  Únicas
                </span>
              </span>
              <span>Com Conteúdo.</span>
            </h1>

            <p className="font-body font-medium text-base md:text-xl text-navy/70 mt-6 md:mt-8 max-w-md">
              Designer de Conteúdo focada em transformar perfis de beleza e bem-estar em máquinas de desejo e conversão.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 md:mt-10 bg-lime text-navy font-display font-black text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full border-4 border-navy shadow-[4px_4px_0px_0px_rgba(26,27,65,1)] md:shadow-[6px_6px_0px_0px_rgba(26,27,65,1)] flex items-center gap-4 group"
            >
              Ver Projetos
              <ArrowDownRight className="group-hover:rotate-[-45deg] transition-transform" strokeWidth={3} />
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-[45%] h-[40vh] md:h-full relative flex items-end justify-center z-10 mt-12 md:mt-0 pb-0">
          
          {/* Decorative Background Auras */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" as const }}
            className="absolute top-1/4 right-0 md:right-10 w-48 md:w-80 h-48 md:h-80 bg-purple rounded-full blur-[60px] md:blur-[100px] opacity-40 z-0"
          />
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" as const, delay: 0.2 }}
            className="absolute bottom-10 left-0 md:left-10 w-48 md:w-80 h-48 md:h-80 bg-pink rounded-full blur-[60px] md:blur-[100px] opacity-40 z-0"
          />

          {/* Emilly Image Container (Anchored to Bottom) */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" as const, bounce: 0.4 }}
            className="relative w-[110%] md:w-[130%] h-full md:h-[85%] z-10"
          >
            <Image 
              src="/images/removerfundo-remove-bg-io.png" 
              alt="Emilly Yasmin"
              fill
              className="object-contain object-bottom scale-[1.3] md:scale-[1.4] origin-bottom drop-shadow-[10px_10px_0px_rgba(255,159,211,1)] md:drop-shadow-[15px_15px_0px_rgba(255,159,211,1)]"
              priority
            />

            {/* Floating Sticker */}
            <motion.div 
              animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[25%] md:top-[20%] left-[10%] md:left-0 bg-cream border-4 border-navy rounded-full p-2 md:p-4 shadow-[4px_4px_0px_0px_rgba(26,27,65,1)] z-20"
            >
              <Sparkles className="text-lime w-6 h-6 md:w-8 md:h-8" fill="currentColor" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
