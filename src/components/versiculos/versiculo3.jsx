import { motion } from "framer-motion";

export default function Versiculo4() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-amber-50 px-4 overflow-hidden">
      
      {/* Contenedor en Grid para superponer sin "encerrar" el texto en el centro */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="display grid grid-cols-1 items-center justify-items-center w-full max-w-5xl"
      >
        
        {/* Imagen de Fondo (Ornamento 8) - Actúa como capa base */}
        <div className="col-start-1 row-start-1 w-full flex justify-center">
          <img 
            src="./assets/images/ornamentos/ornamento-8.png" 
            alt="Ornamento floral" 
            className="w-full max-w-[700px] md:max-w-[850px] object-contain mix-blend-multiply opacity-50"
          />
        </div>

        {/* Texto superpuesto - Misma tipografía y tamaños que el anterior */}
        <div className="col-start-1 row-start-1 z-10 w-full flex flex-col items-center justify-center text-center">
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="font-wedding text-[var(--color-wedding)] italic px-2"
          >
            {/* Mensaje principal */}
            <p className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-4 max-w-4xl mx-auto">
              Mejores son dos que uno. Porque si caen, el uno levantará a su compañero.
            </p>

            {/* Versículo - Espaciado compacto */}
            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-4xl lg:text-5xl leading-tight">
                “Y si alguno prevalece contra uno, dos le resistirán; y el cordón de tres dobleces no se rompe pronto.”
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold not-italic mt-4 opacity-90">
                Eclesiastés 4:9-12
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}