"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
  };

  return (
    <section className="w-full min-h-screen bg-wavy-pink py-16 md:py-32 px-[5vw] flex flex-col lg:flex-row items-center justify-center gap-16 relative">
      <motion.div 
        className="w-full lg:w-5/12 relative order-2 lg:order-1 mt-8 lg:mt-0"
        initial={{ opacity: 0, x: -50, rotate: -10 }}
        whileInView={{ opacity: 1, x: 0, rotate: -2 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="absolute inset-0 bg-lime rounded-3xl translate-x-4 translate-y-4 border-4 border-navy" />
        <div className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden border-4 border-navy bg-cream">
          <Image 
            src="/images/IMG_3201-removebg.png" 
            alt="Emilly Yasmin Profile"
            fill
            className="object-cover object-bottom"
          />
        </div>
      </motion.div>

      <motion.div 
        className="w-full lg:w-7/12 flex flex-col bg-cream/90 backdrop-blur-md p-6 md:p-12 rounded-[40px] border-4 border-navy shadow-[12px_12px_0px_0px_rgba(26,27,65,1)] order-1 lg:order-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="font-display font-black text-4xl md:text-6xl text-navy mb-6 leading-tight">
          Estratégia que dá <span className="text-purple bg-lime px-2 rounded-xl inline-block -rotate-2">MATCH</span> com sua marca.
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl font-body font-medium text-navy/80 mb-10 leading-relaxed">
          Esqueça o conteúdo genérico. Meu foco é transformar a presença digital de marcas de bem-estar, beleza e lifestyle em <span className="font-script text-pink text-3xl">comunidades engajadas</span>. 
          Crio ecossistemas visuais onde cada detalhe é pensado para converter e encantar.
        </motion.p>

        <motion.div variants={containerVariants} className="grid grid-cols-2 gap-6">
          {[
            { value: "+45", label: "Projetos", color: "bg-pink", text: "text-navy" },
            { value: "150%", label: "Crescimento", color: "bg-purple", text: "text-cream" },
            { value: "3", label: "Anos de Exp.", color: "bg-lime", text: "text-navy" },
            { value: "10k+", label: "Seguidores", color: "bg-navy", text: "text-cream" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              variants={itemVariants} 
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              className={`${stat.color} ${stat.text} p-6 rounded-3xl border-4 border-navy shadow-[4px_4px_0px_0px_rgba(26,27,65,1)] flex flex-col justify-center items-center text-center cursor-none hover-trigger`}
            >
              <span className="font-display font-black text-4xl md:text-5xl mb-1">{stat.value}</span>
              <span className="font-body font-bold text-xs md:text-sm uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
