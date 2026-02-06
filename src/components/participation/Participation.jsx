import React from "react";
import { motion } from "framer-motion";

const Participation = () => {
  return (
    <section className="relative  bg-amber-50 flex flex-col items-center justify-center overflow-hidden px-6 p-6 ">

      {/* Contenedor padre con flex y centrado total */}
      <div className="flex items-center justify-center w-full">
        <h1 className="font-wedding text-[var(--color-wedding)] text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-sm bg-white p-4 px-8 rounded-full text-center">
          Ceremonia
        </h1>
      </div>

      {/* 1. Ornamento Superior (Rotado) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="flex justify-center mb-6"
      >
        <img
          src="./assets/images/ornamentos/ornamento-6.png"
          alt="Decoración superior"
          className="w-full max-w-[220px] md:max-w-[380px] object-contain opacity-80 rotate-180"
        />
      </motion.div>

      {/* 2. Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="font-wedding text-[var(--color-wedding)] text-3xl md:text-5xl lg:text-6xl leading-[1.2] drop-shadow-sm italic"
        >
          Con la bendición de Dios, nos complace invitarte a compartir con nosotros este día tan especial.
        </motion.h2>
      </div>

      {/* 3. Ornamento Inferior */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mt-6"
      >
        <img
          src="./assets/images/ornamentos/ornamento-6.png"
          alt="Decoración inferior"
          className="w-full max-w-[220px] md:max-w-[380px] object-contain opacity-80"
        />
      </motion.div>

    </section>
  );
};

export default Participation;