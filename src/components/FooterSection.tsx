"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full bg-navy text-cream py-24 px-[5vw] rounded-t-[40px] md:rounded-t-[80px] mt-[-40px] relative z-20 flex flex-col items-center text-center">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" as const }}
      >
        <h2 className="font-display font-black text-5xl md:text-8xl uppercase mb-8 leading-none">
          Bora criar<br/>
          <span className="text-pink">um Conteúdo</span> <span className="font-script text-lime lowercase text-5xl md:text-8xl">Incrível?</span>
        </h2>
      </motion.div>

      <motion.a 
        href="https://wa.me/5511953528195?text=Oii%20Emilly!%20Vi%20o%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-lime text-navy font-display font-black text-2xl px-12 py-6 rounded-full border-4 border-navy shadow-[8px_8px_0px_0px_rgba(255,159,211,1)] flex items-center gap-4 group mb-20"
      >
        Chamar no WhatsApp
        <ArrowRight className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
      </motion.a>

      <div className="w-full flex flex-col items-center justify-between border-t-2 border-cream/20 pt-8 mt-auto">
        <div className="font-display font-bold text-2xl tracking-widest mb-4">
          EMILLY YASMIN
        </div>

        <div className="font-body text-sm opacity-60 uppercase tracking-widest">
          © 2026 Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
