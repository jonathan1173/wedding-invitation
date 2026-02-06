import { motion } from "framer-motion";

export default function MobileShowcase() {
  const images = [
    "./assets/images/pareja/pareja-9.webp",
    "./assets/images/pareja/pareja-10.webp", // Esta bajará más en tablet
    "./assets/images/pareja/pareja-11.webp",
  ];

  const variants = {
    fromRight: { opacity: 0, x: 50 },
    fromLeft: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-amber-50 py-20 px-6 flex flex-col items-center overflow-hidden min-h-screen justify-center">
      
      {/* 1. Galería con descalce pronunciado en Tablet */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 mb-10 w-full max-w-6xl">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={index % 2 === 0 ? "fromRight" : "fromLeft"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            /* index === 1 aplica el efecto solo a la segunda imagen */
            /* sm:translate-y-24 la mueve considerablemente hacia abajo en tablets */
            /* lg:translate-y-0 vuelve a alinear todo en laptops (3 columnas) */
            className={`w-full flex justify-center ${
              index === 1 ? "sm:translate-y-70 lg:translate-y-0" : ""
            }`}
          >
            <img 
              src={src} 
              alt={`Pareja ${index + 1}`} 
              className="w-full max-w-[350px] lg:max-w-full h-auto drop-shadow-2xl rounded-md object-cover aspect-[3/4]"
            />
          </motion.div>
        ))}
      </div>

      {/* 2. Sección del Versículo Final */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl px-4 mt-16"
      >
        {/* Ornamento Superior */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img 
            src="./assets/images/ornamentos/ornamento-6.png" 
            alt="Decoración superior" 
            className="w-full max-w-[220px] md:max-w-[380px] object-contain opacity-80 rotate-180"
          />
        </motion.div>
        
        <div className="font-wedding text-[var(--color-wedding)] italic">
          <p className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] my-10">
            “Las muchas aguas no podrán apagar el amor, ni lo ahogarán los ríos”
          </p>
          <p className="text-xl md:text-3xl font-bold not-italic mb-12 opacity-95 tracking-widest">
            Cantares 8:7
          </p>
        </div>

        {/* Ornamento Inferior */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img 
            src="./assets/images/ornamentos/ornamento-6.png" 
            alt="Decoración inferior" 
            className="w-full max-w-[220px] md:max-w-[380px] object-contain opacity-80"
          />
        </motion.div>
      </motion.div>

    </section>
  );
}