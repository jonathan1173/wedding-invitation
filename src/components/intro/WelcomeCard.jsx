"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Imagen en `public`
const decoracionBg = '/assets/images/ornamento-blue.webp';

export default function WelcomeCard({ onOpen }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleOpenClick = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    if (onOpen) {
      setTimeout(() => onOpen(), 1000); 
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black font-serif italic"
          exit={{ opacity: 0, transition: { delay: 0.8 } }}
        >
          {/* Fondo decorativo */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${decoracionBg})` }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute inset-0 bg-black/50" />

          {/* TARJETA / SOBRE */}
          <motion.div
            onClick={handleOpenClick}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover="hover"
            exit={{
              scale: 2,
              opacity: 0,
              filter: "brightness(2) blur(10px)",
              transition: { duration: 0.8 }
            }}
            className="relative z-30 w-[320px] md:w-[380px] h-[220px] cursor-pointer"
          >
            {/* CUERPO DEL SOBRE */}
            <div className="absolute inset-0 bg-[#cbd5e1] rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden border border-white/10">
              
              {/* 1. INTERIOR (Lo profundo) */}
              <div className="absolute inset-0 bg-gray-400" />

              {/* 2. SOLAPAS LATERALES (La X) */}
              <div 
                className="absolute inset-0 z-10"
                style={{ 
                  clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)',
                  background: 'linear-gradient(to right, #d8dadc, #e2e8f0)' 
                }}
              />
              <div 
                className="absolute inset-0 z-10"
                style={{ 
                  clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)',
                  background: 'linear-gradient(to left, #d8dadc, #e2e8f0)' 
                }}
              />

              {/* 3. SOLAPA INFERIOR */}
              <div 
                className="absolute inset-0 z-20"
                style={{ 
                  clipPath: 'polygon(0% 100%, 50% 48%, 100% 100%)',
                  background: 'linear-gradient(to top, #f1f5f9, #cbd5e1)',
                  filter: 'drop-shadow(0px -2px 3px rgba(0,0,0,0.1))'
                }}
              />

              {/* 4. SOLAPA SUPERIOR (MÁXIMA DEFINICIÓN) */}
              <motion.div 
                variants={{
                  hover: { 
                    y: -8,
                    transition: { duration: 0.3 } 
                  }
                }}
                className="absolute top-0 left-0 w-full h-[120px] z-30"
                style={{ 
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                  background: 'linear-gradient(to bottom, #fdfdfd 60%, #f1f5f9 100%)',
                  filter: 'drop-shadow(0px 5px 8px rgba(0,0,0,0.3))' // Sombra fuerte para definir el pico
                }}
              />

              {/* SELLO CENTRAL */}
              <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                <motion.button 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 bg-red-700 rounded-full border-4 border-red-900 shadow-[0_10px_20px_rgba(185,28,28,0.4)] text-white font-bold text-[10px] flex items-center justify-center"
                >
                  ABRIR
                </motion.button>
              </div>

              {/* LÍNEAS DE APOYO PARA LA "X" */}
              <div className="absolute inset-0 z-25 pointer-events-none opacity-40">
                <svg className="w-full h-full">
                  <line x1="0" y1="0" x2="50%" y2="50%" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="100%" y1="0" x2="50%" y2="50%" stroke="#94a3b8" strokeWidth="1" />
                </svg>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}