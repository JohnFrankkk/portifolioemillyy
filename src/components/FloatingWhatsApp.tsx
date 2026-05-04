"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "5511953528195";
  const message = encodeURIComponent("Oii Emilly! Vi o seu portfólio e gostaria de conversar sobre um projeto incrível.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 flex items-center gap-4"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Tooltip Label */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
        className="bg-navy text-cream font-script text-2xl py-2 px-4 rounded-full shadow-[4px_4px_0px_0px_rgba(212,255,60,1)] pointer-events-none -rotate-6 border-2 border-navy"
      >
        Me chama!
      </motion.div>

      {/* Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(26,27,65,1)] border-4 border-navy hover-trigger group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={32} />
      </motion.a>
    </motion.div>
  );
}
