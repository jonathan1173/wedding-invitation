import React from 'react';
import { motion } from 'framer-motion';

const GiftSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen bg-amber-50 py-12 px-6 flex flex-col items-center justify-center overflow-hidden font-wedding italic">
      
      {/* 1. Ornamento Superior (Rotado) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <img 
          src="./assets/images/ornamentos/ornamento-6.png" 
          alt="Decoración superior" 
          className="w-full max-w-[200px] md:max-w-[350px] object-contain opacity-80 rotate-180"
        />
      </motion.div>

      {/* 2. Contenido de Texto */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-3xl text-center z-10"
      >
        {/* Título Estilizado sin recuadro pesado */}
        <motion.h2 
          variants={fadeInUp}
          className="text-[var(--color-wedding)] text-4xl md:text-5xl lg:text-6xl mb-6 font-bold tracking-wide"
        >
          Muestra de Cariño
        </motion.h2>

        <motion.div 
          variants={fadeInUp}
          className="px-4"
        >
          {/* Mensaje Principal con interlineado corregido */}
          <p className="text-[var(--color-wedding)] text-3xl md:text-4xl lg:text-5xl leading-[1.15] px-2">
            "Nos sentimos profundamente honrados de compartir nuestra boda con ustedes; 
            si desean expresarnos su cariño con un obsequio en efectivo, 
            lo recibiremos con sincera gratitud."
          </p>
        </motion.div>
      </motion.div>

      {/* 3. Ornamento Inferior */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-8"
      >
        <img 
          src="./assets/images/ornamentos/ornamento-6.png" 
          alt="Decoración inferior" 
          className="w-full max-w-[200px] md:max-w-[350px] object-contain opacity-80"
        />
      </motion.div>

    </section>
  );
};

export default GiftSection;