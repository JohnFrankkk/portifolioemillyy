"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section className="w-full bg-cream pt-12 pb-16 md:pb-32 px-[5vw] overflow-hidden">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row md:items-end justify-between border-b-8 border-navy pb-8 mb-16"
      >
        <h2 className="font-display font-black text-6xl md:text-8xl text-navy uppercase leading-none">
          Meus <span className="text-lime bg-navy px-2 pb-2 rounded-2xl relative -top-2 -rotate-2 inline-block">Drops</span>
        </h2>
        <p className="font-body font-bold text-navy/60 uppercase tracking-widest mt-4 md:mt-0">
          Cases & Criações
        </p>
      </motion.div>

      {/* Featured Case: Prakriti Yoga */}
      <div className="w-full flex flex-col lg:flex-row border-8 border-navy rounded-[40px] overflow-hidden shadow-[16px_16px_0px_0px_rgba(255,159,211,1)] bg-cream mb-24">
        
        {/* Left Side: Info */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 border-b-8 lg:border-b-0 lg:border-r-8 border-navy flex flex-col bg-wavy-pink">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-lime text-navy font-bold px-4 py-1 rounded-full uppercase text-sm border-2 border-navy">Case de Sucesso</span>
            <span className="bg-cream text-navy font-bold px-4 py-1 rounded-full uppercase text-sm border-2 border-navy flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> @prakritiyogaoficial
            </span>
          </div>

          <h3 className="font-display font-black text-5xl md:text-6xl text-navy uppercase mb-6 leading-tight">
            Prakriti Yoga<br/>Oficial
          </h3>
          
          <p className="font-body text-lg text-navy/80 font-medium mb-8">
            Reposicionamento completo da marca, elevando o perfil de um estúdio de yoga para uma comunidade de bem-estar de alto padrão. Atuamos com edição de vídeo (reels virais), copywriting engajador e direção fotográfica estética.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-cream border-4 border-navy p-4 rounded-2xl">
              <div className="font-script text-purple text-3xl font-bold">Direção</div>
              <div className="font-display font-black text-lg uppercase">Visual e Arte</div>
            </div>
            <div className="bg-cream border-4 border-navy p-4 rounded-2xl">
              <div className="font-script text-purple text-3xl font-bold">Edição</div>
              <div className="font-display font-black text-lg uppercase">Reels & CapCut</div>
            </div>
            <div className="bg-cream border-4 border-navy p-4 rounded-2xl">
              <div className="font-script text-purple text-3xl font-bold">Copy</div>
              <div className="font-display font-black text-lg uppercase">Roteiro & Legend</div>
            </div>
            <div className="bg-cream border-4 border-navy p-4 rounded-2xl">
              <div className="font-script text-purple text-3xl font-bold">Estratégia</div>
              <div className="font-display font-black text-lg uppercase">Calendário</div>
            </div>
          </div>

          <motion.a 
            href="https://www.instagram.com/prakritiyogaoficial?igsh=MjA5cThnd2E0dTl6"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-auto bg-purple text-cream font-display font-bold text-xl px-8 py-4 rounded-full border-4 border-navy shadow-[6px_6px_0px_0px_rgba(26,27,65,1)] flex items-center justify-between hover-trigger cursor-none group self-start"
          >
            Ver no Instagram
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        {/* Right Side: Media Placeholders */}
        <div className="w-full lg:w-1/2 p-8 bg-cream grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1 aspect-[9/16] bg-navy/5 border-4 border-dashed border-navy/30 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden group">
            <Play className="text-purple/50 mb-2" size={48} />
            <span className="font-display font-bold text-navy/40 text-center text-sm px-4">Substituir por vídeo Reel (Prakriti)</span>
            {/* INSTRUÇÃO: <video src="/videos/prakriti-reel-1.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" /> */}
          </div>
          <div className="hidden md:flex aspect-[9/16] bg-navy/5 border-4 border-dashed border-navy/30 rounded-3xl flex-col items-center justify-center relative overflow-hidden group">
            <Play className="text-lime/50 mb-2" size={48} />
            <span className="font-display font-bold text-navy/40 text-center text-sm px-4">Substituir por vídeo Reel (Prakriti)</span>
          </div>
        </div>
      </div>

      {/* Grid: Other Videos/Photos */}
      <h3 className="font-display font-black text-4xl text-navy uppercase mb-8">Mais Criações</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <motion.div 
            key={item}
            whileHover={{ scale: 1.03, rotate: item % 2 === 0 ? 1 : -1 }}
            className="aspect-square bg-cream rounded-3xl border-4 border-navy shadow-[4px_4px_0px_0px_rgba(26,27,65,1)] flex flex-col items-center justify-center relative overflow-hidden hover-trigger cursor-none group"
          >
            <div className="font-display font-bold text-navy/40 text-center px-4">
              ESPAÇO PARA<br/>VÍDEO OU CARROSSEL
            </div>
            {/* INSTRUÇÃO PARA O CLIENTE: 
                Para colocar o vídeo aqui, remova as div acima e adicione:
                <video src={`/videos/seu-video-${item}.mp4`} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            */}
          </motion.div>
        ))}
      </div>

    </section>
  );
}
