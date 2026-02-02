"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import decoracionBg from '../../assets/images/ornamento-blue.webp';

export default function WelcomeCard({ onOpen }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleOpenClick = (e) => {
    e.stopPropagation();
    window.scrollTo(0, 0); // Salto instantáneo
    setIsVisible(false);
    if (onOpen) {
      setTimeout(() => onOpen(), 1000); // Tiempo para que se vea la explosión de color
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
          exit={{ opacity: 0, transition: { delay: 0.8 } }}
        >
          {/* 1. FONDO INICIAL: Solo tu imagen decorativa */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center "
            style={{ backgroundImage: `url(${decoracionBg})` }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="absolute inset-0 bg-black/30" />

          {/* 2. EFECTO HERO (GRADIENTE): Solo aparece en el EXIT al tocar el botón */}
          <motion.div 
            className="absolute inset-0 z-20 pointer-events-none opacity-0"
            exit={{ 
              opacity: 1,
              background: "linear-gradient(to bottom right, #FF8F5A, #FF6B39, #FF6B39)",
              filter: "brightness(1.5) blur(50px)",
              scale: 1.5,
              transition: { duration: 0.8, ease: "easeIn" }
            }}
          />

          {/* 3. CONTENIDO: La tarjeta */}
          <motion.div 
            onClick={handleOpenClick}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ 
              scale: 2, 
              opacity: 0, 
              filter: "brightness(2) blur(10px)",
              transition: { duration: 0.8 } 
            }}
            className="relative z-30 w-[350px] h-[220px] bg-white rounded-lg shadow-2xl cursor-pointer overflow-hidden"
          >
            {/* Diseño interno del sobre */}
            <div className="absolute inset-0 border-2 border-gray-100 m-1" />
            <div className="absolute top-[-110px] left-1/2 transform -translate-x-1/2 rotate-45 w-[220px] h-[220px] bg-white border-b border-gray-200 z-10" />
            
            <div className="absolute bottom-0 w-full h-full pointer-events-none">
              <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[175px] border-b-[110px] border-l-transparent border-b-gray-200/50" />
              <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[175px] border-b-[110px] border-r-transparent border-b-gray-200/50" />
            </div>

            {/* Sello / Botón */}
            <div className="absolute top-[85px] left-1/2 transform -translate-x-1/2 z-20">
              <button className="w-14 h-14 bg-red-700 rounded-full border-4 border-red-800 text-white font-bold text-[10px] shadow-xl">
                ABRIR
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}