"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Direção Criativa",
    description: "Conceituação visual, planejamento de campanhas, branding e definição do tom de voz.",
    color: "bg-pink",
    tags: ["Branding", "Concept", "Identity"]
  },
  {
    title: "Gestão & Conteúdo",
    description: "Criação de calendários, posts estáticos, carrosséis, reels e copywriting estratégico.",
    color: "bg-purple",
    textColor: "text-cream",
    tags: ["Social Media", "Copywriting", "Planning"]
  },
  {
    title: "Produção Estética",
    description: "Produção, maquiagem profissional para vídeos/fotos e lifestyle sensorial.",
    color: "bg-lime",
    tags: ["Make-up", "Styling", "Lifestyle"]
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full min-h-screen bg-cream py-16 md:py-32 px-[5vw]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative"
      >
        <h2 className="font-display font-black text-6xl md:text-8xl text-navy uppercase">
          O que eu <span className="font-script text-pink lowercase text-7xl md:text-9xl relative top-4">faço!</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2, type: "spring" as const }}
            whileHover={{ y: -10 }}
            className={`${service.color} ${service.textColor || 'text-navy'} rounded-[40px] border-4 border-navy p-8 shadow-[8px_8px_0px_0px_rgba(26,27,65,1)] hover-trigger cursor-none flex flex-col h-full`}
          >
            <h3 className="font-display font-black text-3xl mb-4 uppercase leading-none">
              {service.title}
            </h3>
            
            <p className="font-body font-medium text-lg flex-grow opacity-90 mb-8">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {service.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-current`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
