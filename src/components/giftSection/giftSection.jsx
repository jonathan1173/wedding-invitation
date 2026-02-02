import React from 'react';
import { motion } from 'framer-motion';

const GiftSection = () => {
  // Configuración de la animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-amber-50 py-16 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Elemento Decorativo Superior (GSAP o Framer) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-8 text-blue-800/40"
      >
        {/* Un icono elegante de sobre o detalle floral */}
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M1 1L30 25L59 1" />
          <rect x="1" y="1" width="58" height="38" />
        </svg>
      </motion.div>

      {/* Contenedor de Texto con Animación Escalonada */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl text-center"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-blue-800 text-3xl md:text-4xl mb-6"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Muestra de Cariño
        </motion.h2>

        <motion.div 
          variants={fadeInUp}
          className="relative px-4"
        >
          {/* Líneas decorativas laterales sutiles */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-800/20 to-transparent"></div>
          
          <p className="text-blue-800 text-lg md:text-xl font-light leading-relaxed italic px-8">
            "Nos sentimos profundamente honrados de compartir nuestra boda con ustedes; 
            si desean expresarnos su cariño con un obsequio en efectivo, 
            lo recibiremos con sincera gratitud."
          </p>

          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-800/20 to-transparent"></div>
        </motion.div>

 
      </motion.div>

      {/* Decoración Inferior: Una rosa o adorno similar al de la imagen original */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <div className="h-[1px] w-24 bg-blue-800/30 mx-auto relative">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-blue-800">
            ❦
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GiftSection;