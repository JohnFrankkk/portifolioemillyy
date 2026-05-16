"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

/* ─── Video Card with Play on Hover ─── */
function VideoCard({ src, title, tag, color }: { src: string; title: string; tag: string; color: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };
  const handleMouseLeave = () => {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, type: "spring" as const }}
      whileHover={{ scale: 1.03, rotate: 1 }}
      className="relative aspect-[9/16] rounded-3xl border-4 border-navy shadow-[6px_6px_0px_0px_rgba(26,27,65,1)] overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t ${isPlaying ? 'from-navy/60 via-transparent to-transparent' : 'from-navy/80 via-navy/20 to-transparent'} transition-all duration-500 z-10`} />

      {/* Play Icon Pulse */}
      {!isPlaying && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="w-16 h-16 bg-cream/90 rounded-full border-4 border-navy flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(26,27,65,1)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-navy ml-1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>
      )}

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
        <span className={`${color} text-navy font-bold px-3 py-1 rounded-full text-xs uppercase border-2 border-navy inline-block mb-2`}>
          {tag}
        </span>
        <h4 className="font-display font-black text-lg text-cream uppercase leading-tight">
          {title}
        </h4>
      </div>
    </motion.div>
  );
}

/* ─── Design Card (Square, object-contain) ─── */
function DesignCard({ src, title, tag }: { src: string; title: string; tag: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, type: "spring" as const }}
      whileHover={{ scale: 1.03, rotate: -1 }}
      className="relative aspect-square rounded-3xl border-4 border-navy shadow-[6px_6px_0px_0px_rgba(26,27,65,1)] overflow-hidden group"
    >
      <Image
        src={src}
        alt={title}
        fill
        className="object-contain bg-cream group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
        <span className="bg-pink text-navy font-bold px-3 py-1 rounded-full text-xs uppercase border-2 border-navy inline-block mb-2">
          {tag}
        </span>
        <h4 className="font-display font-black text-lg text-cream uppercase leading-tight">
          {title}
        </h4>
      </div>
    </motion.div>
  );
}

/* ─── Photo Card ─── */
function PhotoCard({ src, title }: { src: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, type: "spring" as const }}
      whileHover={{ scale: 1.03 }}
      className="relative aspect-[4/5] rounded-3xl border-4 border-navy shadow-[4px_4px_0px_0px_rgba(26,27,65,1)] overflow-hidden group"
    >
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

/* ─── Prakriti Video Carousel ─── */
const prakritiReels = [
  { src: "/videos/prakriti-yoga-1.mp4", title: "Yoga Flow", color: "bg-lime" },
  { src: "/videos/prakriti-yoga-2.mp4", title: "Consciência", color: "bg-pink" },
  { src: "/videos/prakriti-yoga-3.mp4", title: "Movimento", color: "bg-purple" },
];

function PrakritiCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };
  const handleMouseLeave = () => {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const prev = () => { setCurrent(c => c === 0 ? prakritiReels.length - 1 : c - 1); setIsPlaying(false); };
  const next = () => { setCurrent(c => c === prakritiReels.length - 1 ? 0 : c + 1); setIsPlaying(false); };
  const goTo = (i: number) => { setCurrent(i); setIsPlaying(false); };

  return (
    <div className="w-full lg:w-1/2 p-4 md:p-8 bg-cream flex flex-col items-center justify-center">
      <div
        className="relative w-full max-w-[300px] aspect-[9/16] rounded-3xl border-4 border-navy shadow-[8px_8px_0px_0px_rgba(26,27,65,1)] overflow-hidden mb-6 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        <video
          key={current}
          ref={videoRef}
          src={prakritiReels[current].src}
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${isPlaying ? 'from-navy/50 via-transparent to-transparent' : 'from-navy/80 via-navy/20 to-transparent'} transition-all duration-500 z-10`} />
        {!isPlaying && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="w-16 h-16 bg-cream/90 rounded-full border-4 border-navy flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(26,27,65,1)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-navy ml-1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
          <span className={`${prakritiReels[current].color} text-navy font-bold px-3 py-1 rounded-full text-xs uppercase border-2 border-navy inline-block mb-2`}>
            Reel {current + 1}/{prakritiReels.length}
          </span>
          <h4 className="font-display font-black text-lg text-cream uppercase leading-tight">
            {prakritiReels[current].title}
          </h4>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button onClick={prev} className="w-12 h-12 bg-navy text-cream rounded-full border-4 border-navy flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,159,211,1)] hover:bg-purple transition-colors">
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2">
          {prakritiReels.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`w-3 h-3 rounded-full border-2 border-navy transition-all ${i === current ? 'bg-lime scale-125' : 'bg-cream'}`} />
          ))}
        </div>
        <button onClick={next} className="w-12 h-12 bg-navy text-cream rounded-full border-4 border-navy flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(212,255,60,1)] hover:bg-purple transition-colors">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

/* ─── MAIN SECTION ─── */
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
          Cases &amp; Criações
        </p>
      </motion.div>

      {/* ═══════════════════════════════════════ */}
      {/* FEATURED CASE: PRAKRITI YOGA            */}
      {/* ═══════════════════════════════════════ */}
      <div className="w-full flex flex-col lg:flex-row border-8 border-navy rounded-[40px] overflow-hidden shadow-[16px_16px_0px_0px_rgba(255,159,211,1)] bg-cream mb-20">
        
        {/* Left Side: Info */}
        <div className="w-full lg:w-1/2 p-6 md:p-12 border-b-8 lg:border-b-0 lg:border-r-8 border-navy flex flex-col bg-wavy-pink">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-lime text-navy font-bold px-4 py-1 rounded-full uppercase text-sm border-2 border-navy">Case Principal</span>
            <span className="bg-cream text-navy font-bold px-4 py-1 rounded-full uppercase text-sm border-2 border-navy flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> @prakritiyogaoficial
            </span>
          </div>

          <h3 className="font-display font-black text-4xl md:text-6xl text-navy uppercase mb-6 leading-tight">
            Prakriti Yoga<br/>Oficial
          </h3>
          
          <p className="font-body text-base md:text-lg text-navy/80 font-medium mb-8">
            Reposicionamento completo da marca, elevando o perfil de um estúdio de yoga para uma comunidade de bem-estar de alto padrão. Atuamos com edição de vídeo (reels virais), copywriting engajador e direção fotográfica estética.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-cream border-4 border-navy p-3 md:p-4 rounded-2xl">
              <div className="font-script text-purple text-2xl md:text-3xl font-bold">Direção</div>
              <div className="font-display font-black text-sm md:text-lg uppercase">Visual e Arte</div>
            </div>
            <div className="bg-cream border-4 border-navy p-3 md:p-4 rounded-2xl">
              <div className="font-script text-purple text-2xl md:text-3xl font-bold">Edição</div>
              <div className="font-display font-black text-sm md:text-lg uppercase">Reels &amp; CapCut</div>
            </div>
            <div className="bg-cream border-4 border-navy p-3 md:p-4 rounded-2xl">
              <div className="font-script text-purple text-2xl md:text-3xl font-bold">Copy</div>
              <div className="font-display font-black text-sm md:text-lg uppercase">Roteiro &amp; Legend</div>
            </div>
            <div className="bg-cream border-4 border-navy p-3 md:p-4 rounded-2xl">
              <div className="font-script text-purple text-2xl md:text-3xl font-bold">Estratégia</div>
              <div className="font-display font-black text-sm md:text-lg uppercase">Calendário</div>
            </div>
          </div>

          <motion.a 
            href="https://www.instagram.com/prakritiyogaoficial?igsh=MjA5cThnd2E0dTl6"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-auto bg-purple text-cream font-display font-bold text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full border-4 border-navy shadow-[6px_6px_0px_0px_rgba(26,27,65,1)] flex items-center justify-between group self-start gap-3"
          >
            Ver no Instagram
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        {/* Right Side: Carousel */}
        <PrakritiCarousel />
      </div>


      {/* ═══════════════════════════════════════ */}
      {/* REELS SHOWCASE                          */}
      {/* ═══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8"
      >
        <h3 className="font-display font-black text-4xl md:text-6xl text-navy uppercase mb-2">
          Reels <span className="font-script text-purple lowercase text-3xl md:text-5xl -rotate-3 inline-block ml-2">em destaque</span>
        </h3>
        <p className="font-body font-medium text-navy/60 text-base md:text-lg">
          Produções de vídeo curto para Instagram — edição, filmagem e roteiro.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
        <VideoCard src="/videos/cobertura-evento.mp4" title="Cobertura de Evento" tag="Cobertura" color="bg-lime" />
        <VideoCard src="/videos/purificacao-uterina.mp4" title="Purificação Uterina" tag="Bem-Estar" color="bg-pink" />
        <VideoCard src="/videos/vlog-marcus.mp4" title="Vlog Marcus Nakagawa" tag="Vlog" color="bg-purple" />
        <VideoCard src="/videos/review-produto.mp4" title="Review de Produto" tag="Review" color="bg-lime" />
        <VideoCard src="/videos/espaco-massagem.mp4" title="Espaço de Massagem" tag="Lifestyle" color="bg-pink" />
        <VideoCard src="/videos/circulo-mulheres.mp4" title="Círculo de Mulheres" tag="Evento" color="bg-purple" />
        <VideoCard src="/videos/espaco-yoga.mp4" title="Espaço de Yoga" tag="Bem-Estar" color="bg-lime" />
        <VideoCard src="/videos/cuidados-pessoais.mp4" title="Cuidados Pessoais" tag="Lifestyle" color="bg-pink" />
      </div>


      {/* ═══════════════════════════════════════ */}
      {/* DESIGN & POSTS SHOWCASE                 */}
      {/* ═══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8"
      >
        <h3 className="font-display font-black text-4xl md:text-6xl text-navy uppercase mb-2">
          Design <span className="text-lime bg-navy px-2 pb-1 rounded-xl relative -top-1 -rotate-2 inline-block text-3xl md:text-5xl">&amp; Posts</span>
        </h3>
        <p className="font-body font-medium text-navy/60 text-base md:text-lg">
          Identidade visual, logos e posts de feed criados para redes sociais.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-20">
        <DesignCard src="/images/designs/POST1.jpg" title="Post Feed" tag="Social Media" />
        <DesignCard src="/images/designs/POST2.jpg" title="Carrossel" tag="Design" />
        <DesignCard src="/images/designs/POST3.jpg" title="Stories" tag="Creative" />
        <DesignCard src="/images/designs/POST4.jpg" title="Feed Estético" tag="Branding" />
        <DesignCard src="/images/designs/LOGO2.png" title="Logo Design" tag="Logo" />
        <DesignCard src="/images/designs/LOGO3.png" title="Marca Visual" tag="Logo" />
      </div>


      {/* ═══════════════════════════════════════ */}
      {/* PHOTO GALLERY                           */}
      {/* ═══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8"
      >
        <h3 className="font-display font-black text-4xl md:text-6xl text-navy uppercase mb-2">
          Fotografia <span className="font-script text-pink lowercase text-3xl md:text-5xl ml-2 inline-block -rotate-3">profissional</span>
        </h3>
        <p className="font-body font-medium text-navy/60 text-base md:text-lg">
          Direção fotográfica e produção de imagem para marcas de beleza e lifestyle.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
        {[1,2,3,4,5,6,7,8,9,10,11].map((num) => (
          <PhotoCard key={num} src={`/images/portfolio/IMG${num}.jpg`} title={`Produção ${num}`} />
        ))}
      </div>

    </section>
  );
}
