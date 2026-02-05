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
    <section className="h-screen bg-amber-50 py-16 px-6 flex flex-col items-center justify-center overflow-hidden font-serif italic">
      {/* Elemento Decorativo Superior (GSAP o Framer) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-8 text-blue-800/40"
      >
        {/* Un icono elegante de sobre o detalle floral */}
        
      </motion.div>

      {/* Contenedor de Texto con Animación Escalonada */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl text-center"
      >
        {/* <motion.h2 
          variants={fadeInUp}
          className="text-blue-800 text-4xl md:text-4xl mb-6 font-serif italic"
        >
          Muestra de Cariño
        </motion.h2> */}

        <motion.div 
          variants={fadeInUp}
          className="relative px-4"
        >
          {/* Líneas decorativas laterales sutiles */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-800/20 to-transparent"></div>
          
          <p className="font-wedding text-[var(--color-wedding)] text-3xl md:text-4xl lg:text-5xl  leading-relaxed  px-2">
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